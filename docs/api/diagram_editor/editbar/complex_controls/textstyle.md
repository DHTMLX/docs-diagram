---
sidebar_label: Text style
title: Editbar Complex Controls - Text style 
description: You can explore the Text style control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Text style

@short: The complex control for managing the text style within the Diagram elements

<img
  src={require('../../../../assets/editbar-complex-controls/textstyle.png').default}
  alt="Text style control" width='300'
/>

## Usage

~~~jsx
{
    type: "textStyle",

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

- `type` - (required) the type of a control. Set it to *"textStyle"*
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

- `$properties` - (optional) allows you to override values of [basic controls](/api/diagram_editor/editbar/basic_controls_overview) within a complex control. You can configure the following elements of the **Text style** control based on the basic controls:
    - `fontSize` - ([combo](/api/diagram_editor/editbar/basic_controls/combo)) sets the font size
    - `lineHeight` - ([input](/api/diagram_editor/editbar/basic_controls/input)) sets the line height
    - `fontColor` - ([colorpicker](/api/diagram_editor/editbar/basic_controls/colorpicker)) sets the font color
    - `fontWeight` - ([toggle](/api/diagram_editor/editbar/basic_controls/toggle)) sets the font weight
    - `fontStyle` - ([toggle](/api/diagram_editor/editbar/basic_controls/toggle)) sets the font style

## Example

~~~jsx {6-22}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textStyle",
                        label: "Text style",
                        $properties: {
                            fontSize: {
                                value: 20,
                                options: [
                                    { id: 10, value: "10px" },
                                    { id: 20, value: "20px" },
                                    { id: 30, value: "30px" },
                                    { id: 40, value: "40px" }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
