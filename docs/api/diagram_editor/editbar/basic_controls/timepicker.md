---
sidebar_label: Timepicker
title: Editbar Basic Controls - Timepicker 
description: You can explore the Timepicker control of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Timepicker

@short: The basic control for selecting a time value either by moving handles along track bars or by entering hour and minutes values directly into related inputs.

![Timepicker control](../../../../assets/editbar-basic-controls/timepicker.png)

## Usage

~~~jsx
{
    type: "timepicker",
    key?: string | string[],
    wrap?: boolean, // false by default

    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,
    
    controls?: boolean, // false by default
    icon?: string,
    placeholder?: string,
    timeFormat?: 12 | 24, // 24 by default
    valueFormat?: "string" | "timeObject", // "string" by default

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

- `type` - (required) the type of a control. Set it to *"timepicker"*
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item 
- `wrap` - (optional) allows displaying the external wrapping. *false* by default
- `css` - (optional) adds style classes to a control
- `hidden` - (optional) defines whether a control is hidden. *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*). *false* by default
- `width` - (optional) the width of a control. *"content"* by default
- `height` - (optional) the height of a control. *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of the Timepicker control
- `controls` - (optional) defines whether a timepicker is equipped with the Close and Save buttons. *false* by default
- `icon` - (optional) the CSS class of an icon from the used icon font
- `placeholder` - (optional) a tip for the input
- `timeFormat` - (optional) defines what clock format is activated: the 12-hour or 24-hour one. Set the property to *12* or *24*, correspondingly. *24* by default
- `valueFormat` - (optional) defines the format of the value to be applied when working with the events of the timepicker control: *"string"* | *"timeObject"*. *"string"* by default
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
            - `control` - the [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form control
            - `editor` - the object of the Diagram Editor
            - `id` - the id of a Diagram item 
        - `arguments` - (optional) - the [original event arguments](https://docs.dhtmlx.com/suite/category/form-timepicker-events/)
- `$handler` - (optional) - a callback function that allows handling actions on firing the `change` and `input` events of the [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form control and the `change` event of DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item 
        - `key` - the name of the specified/modified property or the path to it in the object of a Diagram item 
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form control the component is built on
        - `value` - the new value of the [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form control
- `$setValue` - (optional) - a callback function that allows setting the value of the [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form control on initialization of a control and on changing the value in DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form control the component is built on
        - `value` - the value of a Diagram item 
- `$layout` - (optional) - a callback function that allows setting the structure of a control. Returns the configuration of the [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form control. Called with the following parameter:
    - `object` - the configuration of a control without service properties

## Example

~~~jsx {8-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    {
                        type: "timepicker",
                        key: "time",
                        label: "Select time",
                        controls: true
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "time": "14:00" },
    { "id": "shape_3", "parent": "shape_1", "time": "18:30" }
]);
~~~
