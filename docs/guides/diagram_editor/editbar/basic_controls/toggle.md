---
sidebar_label: Toggle!!
title: Editbar Basic Controls - Toggle 
description: You can explore the Toggle of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Toggle

A special button control that changes its state from pressed to the unpressed one when clicked.

## Usage

~~~js
{
    type: "toggle",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default
    full?: boolean, // false by default

    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number,

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control, set it to *"toggle"*
- `key` - (optional) 
- `hidden` - (optional) defines whether a control is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `full` - (optional) defines whether the toggle will be extended to the width specified by the `width` property, *false* by default
- `text` - (optional) sets a text inside the toggle. When initialized together with the `offText` property, the specified text will be rendered in the selected (pressed) state
- `offText` - (optional) sets the text that will be rendered in the unselected (unpressed) state of the toggle
- `icon` - (optional) sets the class of an icon displayed inside the toggle. When initialized together with the `offIcon` property, the specified classes of icons will be rendered in the selected (pressed) state of the toggle
- `offIcon` - (optional) sets the class of an icon that will be rendered in the unselected (unpressed) state of the toggle
- `value` - (optional) specifies the value in the selected (pressed) state. If not defined, the control is used with the *boolean* value 
- `css` - (optional) adds style classes to a control
- `width` - (optional) the width of a control, *"content"* by default
- `height` - (optional) the height of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of the Toggle control, *"8px"* by default

### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional)
- `$handler` - (optional)
- `$setValue` - (optional)
- `$layout` - (optional)

## Example

~~~js {7-14} title="Setting text and icon for the toggle in the on/off states"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "toggle",
                        key: ["header", "enable"],
                        icon: "dxi dxi-eye",
                        offIcon: "dxi dxi-eye-off",
                        text: "Visible",
                        offText: "Invisible",
                    },
                ]
            }
        }
    }
});
~~~

~~~js {7-12} title="Assigning the set value as a value of the applied property"
const editor= new dhx.DiagramEditor("editor", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggle",
                        key: "fontStyle",
                        value: "italic",
                        icon: "dxi dxi-format-italic"        
                    },
                ]
            }
        }
    }
});
~~~
