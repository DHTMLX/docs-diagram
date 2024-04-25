---
sidebar_label: ToggleGroup!!
title: Editbar Basic Controls - ToggleGroup 
description: You can explore the ToggleGroup control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ToggleGroup

@short: The basic control for creating groups of toggle buttons.

![ToggleGroup control](../../../../assets/editbar-basic-controls/togglegroup.png)

## Usage

~~~jsx
{
    type: "toggleGroup",
    options: object[],
    key?: string | string[],

    full?: boolean, // false by default
    gap?: number, // 0 by default
    hidden?: boolean, // false by default
    disabled?: boolean, // false by default  

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number,

    // service properties and methods 
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

Toggle configuration object inside ToggleGroup:

~~~jsx
{
    id?: string,
    hidden?: boolean,
    disabled?: boolean,
    full?: boolean,
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number
}
~~~

The objects with the `toggle` configuration inside the control can be used both with the *boolean* value and the *string* one, if the `value` property is specified. The `value` property is needed for assigning the set value as a value of the applied property. [Check the example below](#example) to get the idea.

## Description

### ToggleGroup properties

#### Basic properties

- `type` - (required) the type of a control. Set it to *"toggleGroup"*
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item 
- `options` - (required) an array of ToggleGroup options, each option is set as an *object* with a set of `key:value` pairs - [attributes of options and their values](#toggle-properties)
- `hidden` - (optional) defines whether a ToggleGroup is hidden. *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*). *false* by default
- `full` - (optional) defines whether the ToggleGroup will be extended to the width specified by the `width` property. *false* by default
- `gap` - (optional) sets an offset between the elements (buttons) of an option. *0* by default
- `css` - (optional) adds style classes to a control
- `width` - (optional) the width of a control. *"content"* by default
- `height` - (optional) the height of a control. *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of the ToggleGroup control

#### Service properties and methods

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in their functionality. 
:::

- `$on` - (optional) - allows setting an event listener. The object has the following properties:
    - `eventName`  - a callback function which is called with the following parameters:
        - `object` - an object with the following properties:
            - `control` - the [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form control
            - `editor` - the object of the Diagram Editor
            - `id` - the id of a Diagram item 
        - `arguments` - (optional) - the [original event arguments](https://docs.dhtmlx.com/suite/category/form-togglegroup-events/)
- `$handler` - (optional) - a callback function that allows handling actions on firing the `change` event of the [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form control and the `change` event of DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item 
        - `key` - the name of the specified/modified property or the path to it in the object of a Diagram item 
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form control the component is built on
        - `value` - the new value of the [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form control
- `$setValue` - (optional) - a callback function that allows setting the value of the [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form control on initialization of a control and on changing the value in DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the Diagram Editor
        - `control` - the object of the [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form control the component is built on
        - `value` - the value of a Diagram item 
- `$layout` - (optional) - a callback function that allows setting the structure of a control. Returns the configuration of the [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form control. Called with the following parameter:
    - `object` - the configuration of a control without service properties

### Toggle properties

- `id` - (optional) the id of a control, auto-generated if not set
- `hidden` - (optional) defines whether an option is hidden. *false* by default
- `disabled` - (optional) defines whether an option is enabled (*false*) or disabled (*true*). *false* by default
- `full` - (optional) defines whether the option will be extended to the width specified by the `width` property. *false* by default
- `text` - (optional) sets a text inside the option. When initialized together with the `offText` property, the specified text will be rendered in the selected (pressed) state
- `icon` - (optional) sets the CSS class of an icon displayed inside the option. When initialized together with the `offIcon` property, the specified CSS classes of icons will be rendered in the selected (pressed) state of the option
- `offText` - (optional) sets the text that will be rendered in the unselected (unpressed) state of the option
- `offIcon` - (optional) sets the CSS class of an icon that will be rendered in the unselected (unpressed) state of the option
- `value` - (optional) specifies the value in the selected (pressed) state. If not defined, the option is used with the *boolean* value

## Example

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggleGroup",
                        key: "textAlign",
                        gap: 4,
                        $on: {
                            beforeChange: (spec, values) => !Object.values(values).every(i => !i),
                        },
                        options: [
                            {
                                icon: "dxi dxi-format-align-left",
                                value: "left",
                            },
                            {
                                icon: "dxi dxi-format-align-center",
                                value: "center",
                            },
                            {
                                icon: "dxi dxi-format-align-right",
                                value: "right",
                            },
                        ],
                    },
                ]
            }
        }
    }
});
~~~