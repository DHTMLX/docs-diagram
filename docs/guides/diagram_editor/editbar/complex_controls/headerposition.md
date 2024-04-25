---
sidebar_label: Header position!!
title: Editbar Complex Controls - Header position 
description: You can explore the Header position control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Header position

@short: The complex control for changing position of the group header

TODO!!!

:::info
The **Header position** control is available only for **group** and **swimlane** elements in the *default* mode of the Diagram editor.
:::

## Usage

~~~jsx
{
    type: "headerPosition",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, // "0 16px" by default

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "start" by default
    compact?: boolean, // false by default
   
    // Service properties
    $properties?: object
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"headerPosition"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*). *false* by default
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"0 16px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"start"* by default
- `compact` - (optional) specifies the compact mode, removes indents and frame. *false* by default

### Service properties

- `$properties` - (optional) allows you to override values of [basic controls](TODO) within a complex control. You can configure the following element of the **Header position** control based on the basic controls:
    - `position` - ([toggleGroup](TODO)) - sets a position of the group header

## Example

~~~jsx {6-25}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "headerPosition",
                        label: "Header position",
                        $properties: {
                            position: {
                                options: [
                                    {
                                        icon: "dxi dxi-format-vertical-align-top",
                                        value: "top"
                                    },
                                    {
                                        icon: "dxi dxi-format-vertical-align-bottom",
                                        value: "bottom"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~

**Change log**: The control was added in v6.0
