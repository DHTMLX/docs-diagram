---
sidebar_label: Checkbox!!
title: Editbar Basic Controls - Checkbox 
description: You can explore the Checkbox of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Checkbox

@short: A control that allows displaying the specified value or change it to the opposite one.

![Checkbox control](../../../../assets/editbar-basic-controls/checkbox.png)

## Usage

~~~js
{
    type: "checkbox",
    key?: string | string[],
    text?: string,
    value?: string,

    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,

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

The control can be used both with the *boolean* value and the *string* one, if the `value` property is specified. [Check the example below](#example) to get the idea.

## Description

### Basic properties

- `type` - (required) the type of a control, set it to *"checkbox"*
:::warning
Note that when creating a new control via the [`controls` property](/api/diagram_editor/editbar/config/controls_property/) it's not allowed to redefine the default types of basic controls. If you need to modify a default control, you should create a new control type.
:::
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item 
- `text` - (optional) the text value of a control. It's placed to the right of the control
- `value` -	(optional) the value of a checkbox
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `hidden` - (optional) defines whether a checkbox is hidden, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a Checkbox control
- `label` - (optional) specifies a label for a control
- `labelPosition` - (optional) defines the position of a label: *"left" | "top"*, *"top"* by default
- `labelWidth` - (optional) sets the width of the label of a control

### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in their functionality. 
:::

- `$on` - (optional) - allows setting an event listener. The object has the following properties:
    - `eventName`  - a callback function which is called with the following parameters:
        - `object` - an object with the following properties:
            - `control` - the [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form control
            - `editor` - the object of the Diagram Editor
            - `id` - the id of a Diagram item 
        - `arguments` - (optional) - the [original event arguments](https://docs.dhtmlx.com/suite/category/form-checkbox-events/)
- `$handler` - (optional) - a callback function that allows handling actions on firing the `change` event of the [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form control and the `change` event of DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item 
        - `key` - the name of the specified/modified property or the path to it in the object of a Diagram item 
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form control the component is built on
        - `value` - the new value of the [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form control
- `$setValue` - (optional) - a callback function that allows setting the value of the [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form control on initialization of a control and on changing the value in DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form control the component is built on
        - `value` - the value of a Diagram item 
- `$layout` - (optional) - a callback function that allows setting the structure of a control. Returns the configuration of the [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form control. Called with the following parameter:
    - `object` - the configuration of a control without service properties

## Example

~~~js {7-17}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkbox",
                        label: "String value",
                        key: "other",
                        value: "enable",
                    },
                    {
                        type: "checkbox",
                        label: "Boolean value",
                        key: "fixed",
                    }
                ],
            }
        }
    }
});
editor.parse([
    { "type": "rectangle", "other": "", "fixed": false },
    { "type": "rectangle", "other": "enable", "fixed": true, "x": 400 },
]);
~~~