---
sidebar_label: properties!!
title: properties Property of Editbar
description: You can learn about the properties property of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# properties

### Description

@short: Optional. A set of configurations that modify default controls and apply custom controls

:::info
The `properties` property allows you to do the following:
- modify a default control and its behavior based on [**Basic controls**](guides/diagram_editor/editbar/basic_controls.md) and/or [**Complex controls**](guides/diagram_editor/editbar/complex_controls.md)
- apply the custom control(s) defined via the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property
- specify conditions for applying a control (custom or default)

Refer to the [**Editbar configuration**](guides/diagram_editor/editbar/complex_controls.md) guide for more information about configuring!
:::

### Usage

~~~js
properties?: {
    [type: string]: object[] | function, // default or custom control configuration
    ... // another control
};
~~~

### Parameters

- `type` - the type name of a new control
    - `object` - the configuration object of a control

    or

    - `function` - a callback function that should return an array of objects with configuration of controls. The function is called with an object that includes the following parameters:
        - `item` - (optional) the object of the selected element
        - `editor` - (required) the object of the Diagram editor

~~~jsx {3-4,8-15}
properties: {
    // create new "estimate" control with custom configurations
    estimate: // type of control
        { ... } // configuration object

    // or

    $shape: // type of controls
        ({ item, editor }) => { // the callback function that returns the configuration object
            const controls = [
                // some configurations
            ];
                // ... custom logic here
            return controls;
        },
    ..., // another control
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
