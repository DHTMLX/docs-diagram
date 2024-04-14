---
sidebar_label: Checkbox!!
title: Editbar Basic Controls - Checkbox 
description: You can explore the Checkbox of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Checkbox

@short: A control that allows a user to make a choice between one or several opposite options by toggling them.

The control can take both the *boolean* value and the *string* one, if the `value` property is specified. [Check the example below](#example) to get the idea.

## Usage

~~~js
{
    type: "checkbox",
    text?: string,
    value?: string,

    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,

    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top" // "top" by default
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control, set it to *"checkbox"*
- `key` - (optional) 
- `text` - (optional) optional, the text value of a control. It's placed to the right of the control
- `value` -	(optional) the value of a checkbox
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `hidden` - (optional) defines whether a checkbox is hidden, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a Checkbox control, *"8px"* by default
- `label` - (optional) specifies a label for a control
- `labelPosition` - (optional) defines the position of a label: "left" | "top", *"top"* by default
- `labelWidth` - (optional) sets the width of the label of a control

### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional)
- `$handler` - (optional)
- `$setValue` - (optional)
- `$layout` - (optional)

## Example

~~~js {7-17}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkbox",
                        label: "String value",
                        key: "other",
                        value: "enable",
                    },
                    {
                        type: "checkbox",
                        label: "Boolean value",
                        key: "fixed",
                    }
                ],
            }
        }
    }
});
editor.parse([
    { "type": "rectangle", "other": "", "fixed": false },
    { "type": "rectangle", "other": "enable", "fixed": true, "x": 400 },
]);
~~~