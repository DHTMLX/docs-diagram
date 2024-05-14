---
sidebar_label: Arrange
title: Editbar Complex Controls - Arrange 
description: You can explore the Arrange control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Arrange

@short: The complex control for editing width, height, rotation angle, x and y properties of a Diagram element

<img
  src={require('../../../../assets/editbar-complex-controls/arrange.png').default}
  alt="Arrange control" width='300'
/>

:::info
The **Arrange** control is available for all elements (excluding the **line** and **lineTitle** elements) in the *default* mode of the Diagram editor.
:::

## Usage

~~~jsx
{
    type: "arrange",

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

- `type` - (required) the type of a control. Set it to *"arrange"*
- `hidden` - (optional) defines whether the control is hidden. *false* by default
- `disabled` - (optional) defines whether the control is enabled (*false*) or disabled (*true*)
- `css` - (optional) adds style classes to the control
- `width` - (optional) the width of the control. *"content"* by default
- `height` - (optional) the height of the control. *"content"* by default
- `padding` - (optional) sets the padding for the content inside the control group. *"0 16px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the control label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"start"* by default
- `compact` - (optional) specifies the compact mode, removes indents and frame. *false* by default

### Service properties

- `$properties` - (optional) allows you to override values of [basic controls](/guides/diagram_editor/editbar/basic_controls) within a complex control. You can configure the following elements of the **Arrange** control based on the basic controls:
    - `x` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the Diagram element position on the x-axis
    - `y` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the Diagram element position on the y-axis
    - `width` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the Diagram element width (px)
    - `height` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the Diagram element height (px)
    - `angle` - ([input](/guides/diagram_editor/editbar/basic_controls/input)) sets the Diagram element rotation angle

## Example

~~~jsx {7-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    {
                        type: "arrange",
                        disabled: true,
                        $properties: {
                            angle: { hidden: true } // configuration of the "input" basic control
                        }
                    }
                ]
            }
        }
    }
});
~~~
