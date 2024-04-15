---
sidebar_label: Select!!
title: Editbar Basic Controls - Select 
description: You can explore the Select of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Select

@short: An advanced select box that provides a set of options to choose from.

## Usage

~~~js
{
    type: "select",
    options: (object | string)[],

    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number, // "8px" by default
    icon?: string,

    // for `wrap:true` check the label properties for the Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top" // "top" by default
}
~~~

Options configuration object inside Select:

~~~js
{
    value: string | number,
    content: string,
    disabled?: boolean
}
~~~

## Description

### Select properties

#### Basic properties

- `type` - (required) the type of a control, set it to *"select"*
- `key` - (optional) 
- `wrap` - (optional)
- `options` - (required) an array of Select options, each option can be set as a *string* or as an *object* with a set of `key:value` pairs - attributes of options and their values:
	- `value` - (required) sets the value for the select option
	- `content` - (required) the content displayed in the select option
	- `disabled` - (optional) defines whether the option is enabled (*false*) or disabled (*true*)
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*)
- `hidden` - (boolean) defines whether a Select is hidden, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a Select control, *"8px"* by default
- `icon` - (optional) the name of an [icon](https://docs.dhtmlx.com/suite/helpers/icon/) from the used icon font
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

## Example

~~~js {7-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "select",
                        label: "Position",
                        key: "position",
                        wrap: true,
                        options: [
                            "",
                            "Technical Director",
                            "Manager",
                            "QA Lead",
                            { value: 4, content: "Team Lead", disabled: true },
                            { value: 5, content: "Programmer" }
                        ],
                    },
                ]
            }
        }
    }
});
~~~