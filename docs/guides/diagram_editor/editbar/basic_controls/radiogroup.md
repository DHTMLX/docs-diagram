---
sidebar_label: RadioGroup!!
title: Editbar Basic Controls - RadioGroup 
description: You can explore the RadioGroup of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# RadioGroup

@short: A control intended for creating groups of Radio buttons.

## Usage

~~~js
{
    type: "radiogroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content",
        padding?: string | number,
        width?: string | number | "content"
    },

    disabled?: boolean, // false by default
    hidden?: boolean, // false by default

    css?: string,
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,

   	// for `wrap:true` check the label properties for the Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top" // "top" by default
}
~~~

Radio button configuration object inside RadioGroup:

~~~js
{
    value: string,
    text?: string,

    disabled?: boolean,
    hidden?: boolean,
    css?: string,
    height?: string | number | "content",
    width?: string | number | "content",
    padding?: string | number
}
~~~

## Description

### RadioGroup properties

#### Basic properties

- `type` - (required) the type of a control, set it to "radioGroup"
- `key` - (optional) 
- `wrap` - (optional)
- `options` - (required) an object with options of a RadioGroup. The object can contain the following attributes:
	- `rows` - (optional) arranges radio buttons inside the RadioGroup control vertically
	- `cols` - (optional) arranges radio buttons inside the RadioGroup control horizontally
	- `css` - (optional) adds style classes to a RadioGroup
	- `height` - (optional) the height of a RadioGroup
	- `padding` - (optional) sets padding between a cell and a border of a RadioGroup
	- `width` - (optional) the width of a RadioGroup
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*)
- `hidden` - (boolean) defines whether a RadioGroup is hidden, *false* by default
- `css` - (optional) adds style classes to a control
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a RadioGroup control, *"8px"* by default
- `label` - (optional) specifies a label for the control
- `labelWidth` - (optional) sets the label width of the control
- `labelPosition` - (optional) defines the position of a label: "left" | "top", *"top"* by default

#### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional)
- `$handler` - (optional)
- `$setValue` - (optional)
- `$layout` - (optional)

### Radio button properties 

- `value` - (required) the value of a radio button
- `text` - (optional) the text label of a radio button
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `hidden` - (optional) defines whether a radio button is hidden, *false* by default
- `css` - (optional) adds style classes to a control
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a radio button control, *"8px"* by default

## Example

~~~js {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "radioGroup",
                        key: "textAlign",
                        label: "Text align",
                        wrap: true,
                        options: {
                            rows: [
                                {
                                    text: "Left",
                                    value: "left",
                                },
                                {
                                    text: "Center",
                                    value: "center",
                                },
                                {
                                    text: "Right",
                                    value: "right",
                                },
                            ]
                        },
                    },
                ]
            }
        }
    }
});
~~~