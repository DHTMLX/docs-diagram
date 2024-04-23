---
sidebar_label: Border!!
title: Editbar Complex Controls - Border 
description: You can explore the Border control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Border

@short: The complex control for displaying and modifying borders of a Diagram element

TODO!!!

:::info
The **Border** control is not available for the **lineTitle** element.
:::

## Usage

~~~jsx
{
    type: "border",

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

- `type` - (required) the type of a control. Set it to *"border"*
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
- `$properties` - (optional) allows you to override values of [basic controls](TODO) within a complex control. You can configure the following elements of the **Border** control based on the basic controls:
    - `stroke` - ([colorpicker](TODO)) sets the border color
    - `strokeType` - ([combo](TODO)) sets the border type
    - `strokeWidth` - ([input](TODO)) sets the border width

## Example

~~~jsx {7-13}
const editor= new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    {
                        type: "border",
                        label: "Border style",
                        $properties: {
                            strokeType: { hidden: true }
                        }
                    }
                ]
            }
        }
    }
});
~~~

**Change log**: The control was added in v6.0
