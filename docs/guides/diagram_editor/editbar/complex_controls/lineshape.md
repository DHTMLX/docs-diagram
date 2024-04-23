---
sidebar_label: Line shape!!
title: Editbar Complex Controls - Line shape 
description: You can explore the Line shape control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Line shape

@short: The complex control for displaying and managing connectors

TODO!!!

:::info
The **Line shape** control is available only for the **line** element in the *default* mode of the Diagram editor.
:::

## Usage

~~~jsx
{
    type: "lineShape",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, // "0 16px" by default

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "between" by default
   
    // Service properties
    compact?: boolean, // ??? by default
    $properties?: object
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"lineShape"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*). *false* by default
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"8px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"between"* by default

### Service properties

:::warning
Note that it's highly not recommended to redefine the service properties for the default types of controls, since it may cause breaks in their functionality. If you need to modify the default controls, you should create a new control type via the [`controls`](/api/diagram_editor/editbar/config/controls_property/) property.
:::

- `compact` - (optional) specifies the compact mode, removes indents and frame
- `$properties` - (optional) allows you to override values of [basic controls](TODO) within a complex control. You can configure the following element of the **Line shape** control based on the basic controls:
    - `connectType` - ([toggleGroup](TODO)) sets the connector type

## Example

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $line: [
                    {
                        type: "lineShape",
                        label: "Line connection type"
                    }
                ]
            }
        }
    }
});
~~~

**Change log**: The control was added in v6.0
