---
sidebar_label: Textarea!!
title: Editbar Basic Controls - Textarea 
description: You can explore the Textarea of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Textarea

@short: A control that allows a user to enter a simple multi-line text.

![Textarea control](../../../../assets/editbar-basic-controls/textarea.png)

## Usage

~~~js
{
    type: "textarea",
    key?: string,
    wrap?: boolean, // false by default
    
    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,

    maxlength?: number | string,
    minlength?: number | string,
    placeholder?: string, 
    readOnly?: boolean, // false by default

    // for `wrap:true` check the label properties for the Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // "top" by default

    // service properties and methods 
    $on?: { [eventName: string]: ({
            control: object,
            editor: object,
            id?: string | number
        }: any[]) => any
    },
    $handler?: ({
        id?: string | number,
        key: string | string[],
        editor: object,
        control: object,
        value: any
    }) => void,
    $setValue?: ({
        editor: object,
        control: object,
        value: any
    }) => void,
    $layout?: (object: any) => any
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control, set it to *"textarea"*
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item (shape, line, group, swimlane)
- `wrap` - (optional) allows displaying the external wrapping, *false* by default
- `css` - (optional) adds style classes to a control
- `hidden` - (optional) defines whether a control is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `width` - (optional) the width of a control, *"content"* by default
- `height` - (optional) the height of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of the Textarea control, *"8px"* by default
- `maxlength` - (optional) the maximum [number of characters allowed in the textarea](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)
- `minlength` - (optional) the minimum [number of characters allowed in the textarea](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)
- `placeholder` - (optional) a tip for the textarea
- `readOnly` - (optional) defines whether a textarea is readonly, *false* by default
- `label` - (optional) specifies a label for the control
- `labelWidth` - (optional) sets the label width of the control
- `labelPosition` - (optional) defines the position of a label: *"left" | "top"*, *"top"* by default

### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional) - allows setting an event listener. The object has the following properties:
    - `eventName`  - the event listener function which is called with the following parameters:
        - `object` - an object with the following properties:
            - `control` - the form control
            - `editor` - the object of the Diagram Editor
            - `id` - the id of a Diagram item (shape, line, group, swimlane)
        - `arguments` - (optional) - the original event arguments
- `$handler` - (optional) - a function that allows handling actions on firing the `change` and `input` events of a form control and the `change` event of DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item (shape, line, group, swimlane)
        - `key` - the name of the specified/modified property or the path to it in the object of a Diagram item (shape, line, group, swimlane)
        - `editor` - the object of the Diagram Editor
        - `control` - the object of a Form control the component is built on
        - `value` - the new value of a Form control
- `$setValue` - (optional) - a function that allows setting the value of a Form control on initialization of a control and on changing the value in DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the Diagram Editor
        - `control` - the object of a Form control the component is built on
        - `value` - the value of a Diagram item (shape, line, group, swimlane)
- `$layout` - (optional) - a function that allows setting the structure of a control. Returns the configuration of a Form control. Called with the following parameter:
    - `object` - the configuration of a control without service properties

## Example

~~~js {7-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textarea",
                        key: "text",
                        label: "Textarea label",
                        height: 250,
                        wrap: true
                    },
                ]
            }
        }
    }
});
~~~