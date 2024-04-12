---
sidebar_label: Combo!!
title: Editbar Basic Controls - Combo 
description: You can explore the Combo of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Combo

@short: An input that represents an advanced select box with a set of options.

## Usage

~~~js
{
    type: "combo",
    data?: (object | string)[],
    
    css?: string,
    disabled?: boolean, // false by default
    hidden?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number,

    filter?: (item: any, input: string) => boolean,
    itemHeight?: number | string, // 32 by default
    itemsCount?: boolean | ((count: number) => string),
    listHeight?: number | string, // 224 by default
    multiselection?: boolean, // false by default
    placeholder?: string,
    readOnly?: boolean, // false by default
    selectAllButton?: boolean, // false by default
    template?: (item: object) => string,
    virtual?: boolean, // false by default
    
    // for `wrap:true` check the label properties for the Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top" // "top" by default
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control, set it to *"combo"*
- `key` - (optional) 
- `wrap` - (optional)
- `data` - (optional) an array of Combo options. Each option is an object with a set of `key:value` pairs - attributes of options and their values.
	- The `id` attribute is returned and goes to form data. This attribute should always be fulfilled to avoid unexpected behavior
	- The `value` attribute is displayed in the input field
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `hidden` - (optional) defines whether a combo is hidden, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a Combo control, *"8px"* by default
- `filter` - (optional) sets a custom function for filtering Combo options. [Check the details](https://docs.dhtmlx.com/suite/combobox/customization/#custom-filter-for-options).
- `itemHeight` - (optional) sets the height of a cell in the list of options, *32* by default
- `itemsCount` - (optional) shows the total number of selected options
- `listHeight` - (optional) sets the height of the list of options, *224* by default
- `multiselection` - (optional) enables selection of multiple options in Combo, *false* by default
- `placeholder` - (optional) sets a placeholder in the input of Combo
- `readOnly` - (optional) makes Combo readonly (it is only possible to select options from the list, without entering words in the input), *false* by default
- `selectAllButton` - (optional) defines whether the "Select All" button should be shown, *false* by default
- `template` - (optional) sets a template of displaying options in the popup list
- `virtual` - (optional) enables dynamic loading of data on scrolling the list of options, *false* by default
- `label` - (optional) specifies a label for a control
- `labelPosition` - (optional) defines the position of a label: "left" | "top", *"top"* by default
- `labelWidth` - (optional) sets the width of the label of a control

### Service properties

The properties, the name of which starts with the `$` sign are service properties.

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional)
- `$handler` - (optional)
- `$setValue` - (optional)
- `$layout` - (optional)

## Example

~~~js {7-13}
const editor= new dhx.DiagramEditor("editor", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                    },
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": undefined },
    { "id": "shape_3", "parent": "shape_1", "responsible": "Henry Bennet" }
]);
~~~

~~~js {7-14} title="With multiselection enabled"
const editor= new dhx.DiagramEditor("editor", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                    },
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Henry Bennet", "Mike Frebel"] }
]);
~~~

~~~js {7-14} title="Setting options as objects"
const editor= new dhx.DiagramEditor("editor", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", { id: 1, value: "Greg Mash" }]
                    },
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Mike Frebel", 1] }
]);
~~~