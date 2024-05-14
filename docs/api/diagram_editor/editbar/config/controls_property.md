---
sidebar_label: controls
title: controls Property of Editbar
description: You can learn about the controls property of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# controls

### Description

@short: Optional. A set of configurations that defines one or several custom controls

:::info
The `controls` property allows you to create custom Editbar controls based on [**Basic controls**](guides/diagram_editor/editbar/basic_controls.md) and/or [**Complex controls**](guides/diagram_editor/editbar/complex_controls.md). Use the [`properties`](api/diagram_editor/editbar/config/properties_property.md) property to apply the custom control(s) to the needed elements.

Refer to the [**Editbar configuration**](guides/diagram_editor/editbar/complex_controls.md) guide for more information about configuring!
:::

### Usage

~~~jsx
controls?: {
    [type: string]: object, // custom control
    ... // another control
};
~~~

### Parameters

- `type` - the type name of a new control
    - `object` - the configuration object of a new control

~~~jsx
controls: {
      estimate: { ... }, // create new "estimate" control with custom configurations
      ... // another control
}
~~~

### Example

~~~jsx {16-26}
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
                $shape: [
                    { type: "estimate" },
                    { type: "name" }
                ]
            },
            controls: {
                estimate: {
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" }
                    ]
                },
                name: { type: "input", label: "Name", key: "name" }
            }
        }
    }
});
~~~

**Change log**: The property was added in v6.0
