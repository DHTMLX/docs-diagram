---
sidebar_label: Size
title: Editbar Complex Controls - Size 
description: You can explore the Size control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Size

@short: The complex control for managing width and height of the Diagram elements

<img
  src={require('../../../../assets/editbar-complex-controls/size.png').default}
  alt="Size control" width='300'
/>

:::info
The **Size** control is available only for the **shape**, **group** and **swimlane** elements of the Diagram editor.
:::

## Usage

~~~jsx
{
    type: "size",

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, // "0 16px" by default

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "start" by default
    compact?: boolean, // false by default

    // Service properties
    $properties?: object
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"size"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*). *false* by default
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"0 16px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"start"* by default
- `compact` - (optional) specifies the compact mode, removes indents and frame. *false* by default

### Service properties

- `$properties` - (optional) allows you to override values of [basic controls](/guides/diagram_editor/editbar/basic_controls) within a complex control. You can configure the following elements of the **Size** control based on the basic controls:
    - `width` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the Diagram element width (px)
    - `height` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the Diagram element height (px)

## Example

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "size",
                        label: "Shape size"
                    }
                ]
            }
        }
    }
});
~~~
