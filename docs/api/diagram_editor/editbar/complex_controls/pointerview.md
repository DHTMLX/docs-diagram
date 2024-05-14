---
sidebar_label: Pointer view
title: Editbar Complex Controls - Pointer view 
description: You can explore the Pointer view control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Pointer view

@short: The complex control for displaying and managing the connector arrows

<img
  src={require('../../../../assets/editbar-complex-controls/pointerview.png').default}
  alt="Pointer view control" width='300'
/>

:::info
The **Pointer view** control is available only for the **line** element in the *default* mode of the Diagram editor.
:::

## Usage

~~~jsx
{
    type: "pointerView",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, // "0 16px" by default

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "between" by default
    compact?: boolean, // false by default

    // Service properties
    $properties?: object
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"pointerView"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*). *false* by default
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"0 16px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"between"* by default
- `compact` - (optional) specifies the compact mode, removes indents and frame. *false* by default

### Service properties

- `$properties` - (optional) allows you to override values of [basic controls](/guides/diagram_editor/editbar/basic_controls) within a complex control. You can configure the following elements of the **Pointer view** control based on the basic controls:
    - `backArrow` - ([toggleGroup](/guides/diagram_editor/editbar/basic_controls/togglegroup)) sets the arrow type at the end of connector
    - `forwardArrow` - ([toggleGroup](/guides/diagram_editor/editbar/basic_controls/togglegroup)) sets the arrow type at the start of connector

## Example

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $line: [
                    {
                        type: "pointerView",
                        disabled: true
                    }
                ]
            }
        }
    }
});
~~~
