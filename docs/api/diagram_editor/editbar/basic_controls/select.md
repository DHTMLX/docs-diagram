---
sidebar_label: Select
title: Editbar Basic Controls - Select 
description: You can explore the Select control of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Select

@short: The basic control that represents an advanced select box with a set of options to choose from.

![Select control](../../../../assets/editbar-basic-controls/select.png)

## Usage

~~~jsx
{
    type: "select",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // false by default

    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number, 
    icon?: string,

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

Option configuration object inside Select:

~~~jsx
{
    value: string | number,
    content: string,
    disabled?: boolean
}
~~~

## Description

### Select properties

#### Basic properties

- `type` - (required) the type of a control. Set it to *"select"*
- `options` - (required) an array of Select options, each option can be set as a *string* or as an *object* with a set of `key:value` pairs - [attributes of options and their values](#option-properties)
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item 
- `wrap` - (optional) allows displaying the external wrapping. *false* by default
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*). *false* by default
- `hidden` - (boolean) defines whether a Select is hidden. *false* by default
- `height` - (optional) the height of a control. *"content"* by default
- `width` - (optional) the width of a control. *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a Select control
- `icon` - (optional) the CSS class of an [icon](https://docs.dhtmlx.com/suite/helpers/icon/) from the used icon font
- `label` - (optional) specifies a label for the control
- `labelWidth` - (optional) sets the label width of the control
- `labelPosition` - (optional) defines the position of a label: *"left"* | *"top"*. *"top"* by default

#### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in their functionality. 
:::

- `$on` - (optional) - allows setting an event listener. The object has the following properties:
    - `eventName`  - a callback function which is called with the following parameters:
        - `object` - an object with the following properties:
            - `control` - the [Select](https://docs.dhtmlx.com/suite/form/select/) Form control
            - `editor` - the object of the Diagram Editor
            - `id` - the id of a Diagram item 
        - `arguments` - (optional) - the [original event arguments](https://docs.dhtmlx.com/suite/category/form-select-events/)
- `$handler` - (optional) - a callback function that allows handling actions on firing the `change` event of the [Select](https://docs.dhtmlx.com/suite/form/select/) Form control and the `change` event of DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item 
        - `key` - the name of the specified/modified property or the path to it in the object of a Diagram item
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Select](https://docs.dhtmlx.com/suite/form/select/) Form control the component is built on
        - `value` - the new value of the [Select](https://docs.dhtmlx.com/suite/form/select/) Form control
- `$setValue` - (optional) - a callback function that allows setting the value of the [Select](https://docs.dhtmlx.com/suite/form/select/) Form control on initialization of a control and on changing the value in DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [Select](https://docs.dhtmlx.com/suite/form/select/) Form control the component is built on
        - `value` - the value of a Diagram item 
- `$layout` - (optional) - a callback function that allows setting the structure of a control. Returns the configuration of the [Select](https://docs.dhtmlx.com/suite/form/select/) Form control. Called with the following parameter:
    - `object` - the configuration of a control without service properties

### Option properties

- `value` - (required) sets the value for the select option
- `content` - (required) the content displayed in the select option
- `disabled` - (optional) defines whether the option is enabled (*false*) or disabled (*true*). *false* by default

## Example

~~~jsx {7-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "select",
                        label: "Position",
                        key: "position",
                        wrap: true,
                        options: [
                            "",
                            "Technical Director",
                            "Manager",
                            "QA Lead",
                            { value: 4, content: "Team Lead", disabled: true },
                            { value: 5, content: "Programmer" }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
