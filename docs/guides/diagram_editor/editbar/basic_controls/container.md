---
sidebar_label: Container!!
title: Editbar Basic Controls - Container 
description: You can explore the Container of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Container

@short: A control to attach HTML code or the DHTMLX widgets.

## Usage

~~~js
{
    type: "container",
    html: HTMLElement | string,
    
    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,

    // for `wrap:true` check the label properties for the Fieldset
    label?: string;
    labelWidth?: string | number;
    labelPosition?: "left" | "top"; // "top" by default
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control, set it to *"container"*
- `wrap` - (optional) 
- `html` - (optional) the HTML content of a control
- `css` - (optional) adds style classes to a control string
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `hidden` - (optional) defines whether a control is hidden, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a control, *"8px"* by default
- `label` - (optional) specifies a label for the control
- `labelWidth` - (optional) sets the label width of the control
- `labelPosition` - (optional) defines the position of a label: "left" | "top", *"top"* by default

#### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$layout` - (optional)

## Example

~~~js {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "container",
                        html: `
                            <h3>DHTMLX Diagram</h3>
                            <p>This is an example of simple customization of the editing panel using the container control.</p>
                            <p>You can also use this control to create your own controls.</p>
                            <img
                                style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto'
                                src='https://snippet.dhtmlx.com/codebase/data/common/img/01/developer-01.svg'
                            >
                        `,
                    },
                ]
            }
        }
    }
});
~~~