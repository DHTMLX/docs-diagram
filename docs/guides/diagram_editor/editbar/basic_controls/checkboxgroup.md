---
sidebar_label: CheckboxGroup!!
title: Editbar Basic Controls - CheckboxGroup 
description: You can explore the CheckboxGroup of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# CheckboxGroup

@short: A control intended for creating groups of checkboxes.

The objects with `checkbox` configuration inside the control can take both the *boolean* value and the *string* one, if the `value` property is specified. [Check the example below](#example) to get the idea.

## Usage

~~~js
{
    type: "checkboxGroup",
    options: {
        rows?: [
            // a checkbox object
            {
                id: string,
                text: string,
                value?: string,

                css?: string,
                disabled?: boolean, // false by default
                hidden?: boolean, // false by default
                height?: string | number | "content", // "content" by default
                width?: string | number | "content", // "content" by default
                padding?: string | number,
            },
            // more checkboxes
        ],
        cols?: [
            // a checkbox object
            {
                id: string,
                text: string,
                value?: string,

                css?: string,
                disabled?: boolean, // false by default
                hidden?: boolean, // false by default
                height?: string | number | "content", // "content" by default
                width?: string | number | "content", // "content" by default
                padding?: string | number,
            },
            // more checkboxes
        ],
        css?: string,
        height?: string | number | "content", // "content" by default
        width?: string | number | "content", // "content" by default
        padding?: string | number,
    },
    
    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,
    
    // for `wrap:true` check the label properties for the Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top" // "top" by default
}
~~~

Checkbox configuration object inside a CheckboxGroup:

~~~js
{
    id: string,
    text: string,
    value?: string,

    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number
}
~~~

## Description

### CheckboxGroup properties

#### Basic properties

- `type` - (required) the type of a control, set it to *"checkboxGroup"*
- `key` - (optional) 
- `wrap` - (optional)
- `options` - (required) an object with options of a CheckboxGroup. The object can contain the following attributes:
    - `rows` - (optional) arranges checkboxes inside the CheckboxGroup control vertically
    - `cols` - (optional) arranges checkboxes inside the CheckboxGroup control horizontally
    - `css` - (optional) adds style classes to a CheckboxGroup
    - `height` - (optional) the height of a CheckboxGroup
    - `padding` - (optional) sets padding between a cell and a border of a CheckboxGroup
    - `width` - (optional) the width of a CheckboxGroup
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*)
- `hidden` - (boolean) defines whether a CheckboxGroup is hidden, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a CheckboxGroup control, *"8px"* by default
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

### Checkbox properties 

- `id` - (optional) the id of a control, auto-generated if not set
- `text` - (optional) the text label of a checkbox
- `value` - (optional) the value of a checkbox
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `hidden` - (optional) defines whether a checkbox is hidden, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a Checkbox control, *"8px"* by default

## Example

~~~js {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkboxGroup",
                        label: "Select products",
                        key: "products",
                        options: {
                            rows: [
                                { id: "diagram", text: "DHTMLX Diagram", value: "diagram" },
                                { id: "suite", text: "DHTMLX Suite", value: "suite" },
                                { id: "gantt", text: "DHTMLX Gantt" },
                                { id: "spreadsheet", text: "DHTMLX Spreadsheet", disabled: true },
                            ],
                        }
                    },
                ],
            }
        }
    }
});
editor.parse([
    { 
        "type": "rectangle", 
        "products": { 
            "diagram": "diagram", 
            "suite": "", 
            "gantt": true, 
            "spreadsheet": false 
        } 
    }
]);
~~~