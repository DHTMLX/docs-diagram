---
sidebar_label: properties
title: properties Property of Editbar
description: You can learn about the properties property of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# properties

### Description

@short: Optional. A set of configurations that modify controls for Diagram elements (shapes, groups, swimlanes, etc.)

:::info
The `properties` property allows you to do the following:
- modify editbar controls for all or individual Diagram elements based on [**Basic controls**](/api/diagram_editor/editbar/basic_controls_overview/) and/or [**Complex controls**](/api/diagram_editor/editbar/complex_controls_overview)
- apply custom editbar control(s) defined via the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property to Diagram elements
- specify conditions for applying an editbar control (custom or default) to Diagram elements

Refer to the [**Editbar configuration**](guides/diagram_editor/editbar.md) guide for more information about configuring!
:::

### Usage

~~~jsx
properties?: {
    [type: string]: object[] | function, // custom configurations for controls applied to Diagram elements 
    // ...
};
~~~

### Parameters

- `type` - the type name of a Diagram element
    - `object` - the configuration object of a Diagram element

    or

    - `function` - a callback function that should return an array of objects with configuration of Diagram element controls. The function is called with an object that includes the following parameters:
        - `item` - (optional) the object of the selected element
        - `editor` - (required) the object of the Diagram editor

~~~jsx {3-4,8-15}
properties: {
    // modify the estimate element (shape)
    estimate: // Diagram element
        { ... } // configuration object

    // or

    $shape: // type of Diagram elements
        ({ item, editor }) => { // the callback function that returns the configuration object
            const controls = [
                // some configurations
            ];
                // ... custom logic here
            return controls;
        },
    //... another element
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

**Change log**: Added in v6.0

**Related sample**: [Diagram Editor. Default mode. Network PERT chart](https://snippet.dhtmlx.com/wdijghbn)
