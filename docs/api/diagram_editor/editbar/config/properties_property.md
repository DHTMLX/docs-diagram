---
sidebar_label: properties
title: properties Property of Editbar
description: You can learn about the properties property of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# properties

### Description

@short: Optional. A set of configurations that modify controls for Diagram elements (shapes, groups, swimlanes etc.)

:::info
The `properties` config allows you to do the following:
- modify Editbar controls for all or individual Diaram elements base on [**Basic controls**](api/diagram_editor/editbar/basic_controls_overview.md) and/or [**Complex controls**](api/diagram_editor/editbar/complex_controls_overview.md)
- apply custom Editbar control(s) defined via the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property to Diagram elements
- specify conditions for applying an Editbar control (custom or default) to Diagram elements

Refer to the [**Editbar configuration**](guides/diagram_editor/editbar.md) guide for more information about configuring!
:::

### Usage

~~~jsx
properties?: {
    [type: string]: object[] | function, // custom configurations for controls applied to Diagram elements 
};
~~~

### Parameters

- `type` - the name of a Diagram element or group of elements
    - `object` - the configuration object of a Diagram element

    or

    - `function` - a callback function that should return an array of objects with configuration of Diagram element controls. The function is called with an object that includes the following parameters:
        - `item` - (optional) the object of the selected element
        - `editor` - (required) the object of the Diagram editor

You can configure Editbar controls for a separate Diagram element, for instance **rectangle**, **circle**, **card** etc.:

~~~jsx
properties: {
    // modify Editbar controls for individual elements (shapes)
    rectangle: [], // configure controls for the "rectangle" type
    circle: [], // configure controls for the "circle" type
    card: [], // configure controls for the "card" type
    estimate: [], // configure controls for the custom "estimate" type
    // other elements
}
~~~

You can also configure Editbar controls for a separate group of Diagram elements. There are the following service properties to configure groups:

- [`$default`](guides/diagram_editor/editbar.md#configure-editbar-for-the-grid-area) - allows configuring Editbar controls if no elements are selected, or more than one element is selected
- [`$shape`](guides/diagram_editor/editbar.md#configure-editbar-for-shapes) - allows configuring Editbar controls for all shapes including custom shapes
- [`$group`](guides/diagram_editor/editbar.md#configure-editbar-for-group-elements) - allows configuring Editbar controls for all elements with the "group" type
- [`$swimlane`](guides/diagram_editor/editbar.md#configure-editbar-for-swimlanes) - allows configuring Editbar controls for all elements with the "swimlane" type
- [`$line`](guides/diagram_editor/editbar.md#configure-editbar-for-lines) - allows configuring Editbar controls for all elements with the "line" type
- [`$lineTitle`](guides/diagram_editor/editbar.md#configure-editbar-for-line-titles) - allows configuring Editbar controls for all elements with the "lineTitle" type

~~~jsx
properties: {
    $default: [], 
    $shape: [], 
    $group: [], 
    $swimlane: [],
    $line: [],
    $lineTitle: [],
    // ... other parameters
}
~~~

### Example

~~~jsx {10-44}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // displays default Editbar
        // or configure Editbar via object
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            properties: {
                $shape: ({ item, editor }) => {
                    const controls = [
                        { type: "position" },
                        { type: "size" }
                    ];
                    if (item.hasOwnProperty("title")) {
                        controls.push({ type: "input", key: "title", label: "Title", wrap: true });
                    }
                    if (item.hasOwnProperty("text")) {
                        controls.push({ type: "textarea", key: "text", height: 200, label: "Text", wrap: true });
                    }
                    if (item.hasOwnProperty("img")) {
                        controls.push({ type: "avatar", key: "img", label: "Image", wrap: true });
                    }
                    return controls;
                },
                $group: [
                    {
                        type: "arrange",
                        $properties: {
                            angle: { hidden: true }
                        }
                    },
                    { type: "header" },
                    {
                        type: "border",
                        $properties: {
                            stroke: { key: ["style", "stroke"] },
                            strokeType: { hidden: true },
                            strokeWidth: { key: ["style", "strokeWidth"], width: "85%" }
                        }
                    }
                ]
            }
        }
    }
});
~~~

**Change log**: The property was added in v6.0

**Related article:** [**Editbar configuration**](guides/diagram_editor/editbar.md)

**Related sample:** [Diagram Editor. Default mode. Customization of editbar. Added shape counter](https://snippet.dhtmlx.com/ealq0m4l?mode=wide)
