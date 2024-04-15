---
sidebar_label: ToggleGroup!!
title: Editbar Basic Controls - ToggleGroup 
description: You can explore the ToggleGroup of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ToggleGroup

A control intended for creating groups of toggle buttons.

## Usage

~~~js
{
    type: "toggleGroup",
    options: object[],

    full?: boolean, // false by default
    gap?: number, // 0 by default
    hidden?: boolean, // false by default
    disabled?: boolean, // false by default  

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number
}
~~~

Options configuration object inside ToggleGroup:

~~~js
{
    id?: string,
    hidden?: boolean,
    disabled?: boolean,
    full?: boolean,
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number
}
~~~

## Description

### ToggleGroup properties

#### Basic properties

- `type` - (required) the type of a control, set it to *"toggleGroup"*
- `key` - (optional)
- `options` - (required) an array of ToggleGroup elements. See the attributes of an option below
- `hidden` - (optional) defines whether a ToggleGroup is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `full` - (optional) defines whether the ToggleGroup will be extended to the width specified by the `width` property, *false* by default
- `gap` - (optional) sets an offset between the elements (buttons) of an option, *0* by default
- `css` - (optional) adds style classes to a control
- `width` - (optional) the width of a control, *"content"* by default
- `height` - (optional) the height of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of the ToggleGroup control, *"8px"* by default

#### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional)
- `$handler` - (optional)
- `$setValue` - (optional)
- `$layout` - (optional)

### Options properties

- `id` - (optional) the id of a control, auto-generated if not set
- `hidden` - (optional) defines whether an option is hidden, *false* by default
- `disabled` - (optional) defines whether an option is enabled (*false*) or disabled (*true*), *false* by default
- `full` - (optional) defines whether the option will be extended to the width specified by the `width` property, *false* by default
- `text` - (optional) sets a text inside the option. When initialized together with the `offText` property, the specified text will be rendered in the selected (pressed) state
- `icon` - (optional) sets the class of an icon displayed inside the option. When initialized together with the `offIcon` property, the specified classes of icons will be rendered in the selected (pressed) state of the option
- `offText` - (optional) sets the text that will be rendered in the unselected (unpressed) state of the option
- `offIcon` - (optional) sets the class of an icon that will be rendered in the unselected (unpressed) state of the option
- `value` - (optional) specifies the value in the selected (pressed) state. If not defined, the option is used with the *boolean* value

## Example

~~~js {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggleGroup",
                        key: "textAlign",
                        gap: 4,
                        $on: {
                            beforeChange: (spec, values) => !Object.values(values).every(i => !i),
                        },
                        options: [
                            {
                                icon: "dxi dxi-format-align-left",
                                value: "left",
                            },
                            {
                                icon: "dxi dxi-format-align-center",
                                value: "center",
                            },
                            {
                                icon: "dxi dxi-format-align-right",
                                value: "right",
                            },
                        ],
                    },
                ]
            }
        }
    }
});
~~~