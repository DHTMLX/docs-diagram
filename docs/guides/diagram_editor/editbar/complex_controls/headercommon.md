---
sidebar_label: Header common!!
title: Editbar Complex Controls - Header common 
description: You can explore the Header common control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Header common

@short: The complex control for for changing visibility, color, and height of the group header

TODO!!!

:::info
The **Header common** control is available only for **group** and **swimlane** elements in the *default* mode of the Diagram editor.
:::

## Usage

~~~jsx
{
    type: "headerCommon",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, // "0 16px" by default

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "between" by default
    compact?: boolean, // false by default
   
    // Service properties
    $properties?: object
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"headerCommon"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*). *false* by default
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"0 16px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"between"* by default
- `compact` - (optional) specifies the compact mode, removes indents and frame. *false* by default

### Service properties

- `$properties` - (optional) allows you to override values of [basic controls](/guides/diagram_editor/editbar/basic_controls) within a complex control. You can configure the following elements of the **Header common** control based on the basic controls:
    - `enable` - ([toggle](/guides/diagram_editor/editbar/basic_controls/toggle)) toggles the group header visibility
    - `fill` - ([colorpicker](/guides/diagram_editor/editbar/basic_controls/colorpicker)) sets the group header background color
    - `height` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the group header height (px)

## Example

~~~jsx {6-14}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "headerCommon",
                        label: "Header common",
                        $properties: {
                            fill: { key: ["header", "fill"] }
                        }
                    }
                ]
            }
        }
    }
});
~~~
