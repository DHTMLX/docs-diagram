---
sidebar_label: Header
title: Editbar Complex Controls - Header 
description: You can explore the Header control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Header

@short: The complex control for displaying and modifying the header of "group" and "swimlane" elements of the Diagram editor

<img
  src={require('../../../../assets/editbar-complex-controls/header.png').default}
  alt="Header control" width='300'
/>

:::info
The **Header** control is available only for **group** and **swimlane** elements in the *default* mode of the Diagram editor.
:::

## Usage

~~~jsx
{
    type: "header",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, // "0 16px" by default

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "start" by default
    compact?: boolean // false by default
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"header"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*). *false* by default
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"0 16px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"start"* by default
- `compact` - (optional) specifies the compact mode, removes indents and frames. *false* by default

## Example

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    { 
                        type: "header", 
                        label: "Group header style" 
                    }
                ]
            }
        }
    }
});
~~~
