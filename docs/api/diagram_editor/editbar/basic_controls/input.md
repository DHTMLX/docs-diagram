---
sidebar_label: Input
title: Editbar Basic Controls - Input 
description: You can explore the Input control of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Input

@short: The basic input field control for typing some text inside.

![Input control](../../../../assets/editbar-basic-controls/input.png)

## Usage

~~~jsx
{
    type: "input",
    key?: string | string[],
    wrap?: boolean, // false by default
    
    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,

    icon?: string,
    inputType?: "text" | "password" | "number", // "text" by default
    max?: number | string,
    maxlength?: number | string,
    min?: number | string,
    minlength?: number | string,
    placeholder?: string,
    readOnly?: boolean, // false by default

    // for `wrap:true` check the label properties for the Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // "top" by default

    // service properties and methods 
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control. Set it to *"input"*
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item
- `wrap` - (optional) allows displaying the external wrapping. *false* by default
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*). *false* by default
- `hidden` - (optional) defines whether a control is hidden. *false* by default
- `height` - (optional) the height of a control. *"content"* by default
- `width` - (optional) the width of a control. *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of an input control
- `icon` - (optional) the CSS class of an [icon](https://docs.dhtmlx.com/suite/helpers/icon/) from the used icon font
- `inputType` - (optional) sets the type of an input: *"text"* | *"password"* | *"number"*. *"text"* by default
Use the "password" value to specify a field for entering a password
- `max` - (optional) - the [maximal value allowed in the input](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values). The attribute works only with the input type: *"number"*
- `maxlength` - (optional) the maximum [number of characters allowed in the input](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters). The attribute works with the following input types: *"text", "password"*
- `min` - (optional) [the minimal value allowed in the input](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values). The attribute works only with the input type: *"number"*
- `minlength` - (optional) the minimum [number of characters allowed in the input](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters). The attribute works with the following input types: *"text", "password"*
- `placeholder` - (optional) a tip for the input
- `readOnly` - (optional) defines whether an input is readonly. *false* by default
- `label` - (optional) specifies a label for the control
- `labelWidth` - (optional) sets the label width of the control
- `labelPosition` - (optional) defines the position of a label: *"left"* | *"top"*. *"top"* by default

### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in their functionality. 
:::

- `$on` - (optional) - allows setting an event listener. The object has the following properties:
    - `eventName`  - a callback function which is called with the following parameters:
        - `object` - an object with the following properties:
            - `control` - the [Input](https://docs.dhtmlx.com/suite/form/input/) Form control
            - `editor` - the object of the Diagram Editor
            - `id` - the id of a Diagram item 
        - `arguments` - (optional) - the [original event arguments](https://docs.dhtmlx.com/suite/category/form-input-events/)
- `$handler` - (optional) - a callback function that allows handling actions on firing the `change` and `input` events of the [Input](https://docs.dhtmlx.com/suite/form/input/) Form control and the `change` event of DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item 
        - `key` - the name of the specified/modified property or the path to it in the object of a Diagram item 
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Input](https://docs.dhtmlx.com/suite/form/input/) Form control the component is built on
        - `value` - the new value of the [Input](https://docs.dhtmlx.com/suite/form/input/) Form control
- `$setValue` - (optional) - a callback function that allows setting the value of the [Input](https://docs.dhtmlx.com/suite/form/input/) Form control on initialization of a control and on changing the value in DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Input](https://docs.dhtmlx.com/suite/form/input/) Form control the component is built on
        - `value` - the value of a Diagram item 
- `$layout` - (optional) - a callback function that allows setting the structure of a control. Returns the configuration of the [Input](https://docs.dhtmlx.com/suite/form/input/) Form control. Called with the following parameter:
    - `object` - the configuration of a control without service properties

## Example

~~~jsx {7-22}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "input",
                        inputType: "text",
                        key: "text",
                        label: "Input with a string value",
                        placeholder: "Enter a string value"
                    },
                    {
                        type: "input",
                        inputType: "number",
                        key: "x",
                        label: "Input with a number value",
                        placeholder: "Enter a number value",
                        min: 0,
                        max: 100,
                    }
                ]
            }
        }
    }
});
~~~
