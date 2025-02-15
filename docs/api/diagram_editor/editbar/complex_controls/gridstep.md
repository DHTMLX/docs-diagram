---
sidebar_label: Grid step
title: Editbar Complex Controls - Grid step 
description: You can explore the Grid step control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Grid step

@short: The complex control for displaying and modifying a grid step of the Diagram editor

<img
  src={require('../../../../assets/editbar-complex-controls/gridstep.png').default}
  alt="Gridstep control" width='300'
/>

## Usage

~~~jsx
{
    type: "gridStep",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, // "0 16px" by default

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    readOnly?: boolean, // false by default
    wrap?: boolean // true by default
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"gridStep"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*). *false* by default
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"0 16px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `readOnly` - (optional) sets the readonly mode for the control. *false* by default
- `wrap` - (optional) allows displaying the external wrapping. *true* by default

## Example

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "gridStep",
                        readOnly: true
                    }
                ]
            }
        }
    }
});
~~~
