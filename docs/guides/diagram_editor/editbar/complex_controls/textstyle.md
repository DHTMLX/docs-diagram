---
sidebar_label: Text style!!
title: Editbar Complex Controls - Text style 
description: You can explore the Text style control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Text style

@short: The complex control for managing the text style within the Diagram elements

TODO!!!

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
   
    // Service properties
    compact?: boolean, // ??? by default
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
- `padding` - (optional) sets the padding for the content inside the control group. *"8px"* by default
- `label` - (optional) specifies a label for the control
- `labelAlignment` - (optional) defines the position of the label. *"left"* by default
- `align` - (optional) sets the alignment of controls inside the control group. *"between"* by default

### Service properties

:::warning
Note that it's highly not recommended to redefine the service properties for the default types of controls, since it may cause breaks in their functionality. If you need to modify the default controls, you should create a new control type via the [`controls`](/api/diagram_editor/editbar/config/controls_property/) property.
:::

- `compact` - (optional) specifies the compact mode, removes indents and frame
- `$properties` - (optional) allows you to override values of [basic controls](TODO) within a complex control. You can configure the following element of the **Text style** control based on the basic controls:
    - `fontSize` - ([combo](TODO)) sets the font size
    - `lineHeight` - ([input](TODO)) sets the line height
    - `fontColor` - ([colorpicker](TODO)) sets the font color
    - `fontWeight` - ([toggle](TODO)) sets the font weight
    - `fontStyle` - ([toggle](TODO)) sets the font style

## Example

~~~jsx {6-22}
const editor= new dhx.DiagramEditor("editor", {
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

**Change log**: The control was added in v6.0
