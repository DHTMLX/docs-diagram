---
sidebar_label: Editbar
title: Editor Guides - Editbar
description: You can learn about the Editbar of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar

Editbar is a part of the editor that provides controls for modifying values of the attributes of the Diagram items. You can select a necessary item and edit its attributes via the related Editbar options.

## Editbar controls

There are two types of Editbar controls: 

- [Basic controls](api/diagram_editor/editbar/basic_controls_overview.md): Avatar, Button, Checkbox, CheckboxGroup, Colorpicker, Combo, Container, Datepicker, Fieldset, Input, RadioGroup, Select, Slider, Spacer, Textarea, Timepicker, Toggle,
ToggleGroup 
- [Complex controls](api/diagram_editor/editbar/complex_controls_overview.md): Arrange, Border, Grid step, Header, Header common, Header position, Line shape, Pointer view, Position, Size, Text align, Text style

## Initializing Editbar

To initialize and configure Editbar, use the `editbar` property of the [`view`](api/diagram_editor/editor/config/view_property.). 

There are two ways of initialization you can choose from:

- create the default Editbar by using the `editbar:true` setting:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // displaying the default Editbar
    }
});
~~~

- configuring Editbar by specifying it as an object with [a set of properties](/category/editbar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // configuring Editbar via an object
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

The `editbar` object contains the following properties:

- `show` - (boolean) optional, defines whether to display the Editbar when initializing
- `css` - (string) optional, applies a custom CSS class to the Editbar
- `width` - (number) optional, sets the Editbar width
- `controls` - (object) optional, a set of configurations that define one or several custom controls
- `properties` - (object) optional, a set of configurations that modify controls for Diagram items

Here's an example of using the `controls` and `properties` configuration options:

~~~jsx
const editor= new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    { type: "gridStep" }
                ],
                rectangle: [
                    { type: "input", label: "Shape name" },
                    { type: "arrange" },
                    { type: "estimate" },
                    { type: "input", label: "Task name", key: "task_name", wrap: true },
                ]
            },
            controls: {
                estimate: {
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" },
                    ],
                },
            }
        }
    }
});
editor.parse([
    {
        "type": "rectangle",
        "date_start": "12/02/24",
        "date_end": "20/03/25",
        "text": "Rectangle",
        "task_name": "Header example",
    }
]);
~~~ 

In this example:

- a control with the `gridStep` type is set for the mode when no elements are selected or there are more than one selected element
- for a shape with the `rectangle` type the following controls are used:
    - a basic `input` control for rendering the text of a shape 
    - a complex `arrange` control for rendering the shape's positioning 
    - the custom `estimate` control that has been configured specifically for the shapes with the `rectangle` type
    - a basic `input` control for rendering a property in the data structure of the shape


You can configure the default Editbar controls or create custom controls based on [**Basic controls**](api/diagram_editor/editbar/basic_controls_overview.md) and/or [**Complex controls**](api/diagram_editor/editbar/complex_controls_overview.md).


## Creating custom Editbar controls

You can use the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property of the Editbar view to create a custom control.

:::warning
We do not recommend you to use a default control type (refer to the [***Basic controls***](api/diagram_editor/editbar/basic_controls_overview.md) and/or [***Complex controls***](api/diagram_editor/editbar/complex_controls_overview.md)) as the name for a custom control. Use the unique name for each custom control to avoid errors!
:::

After creating a custom control, you need to apply it to the needed Diagram element via the [`properties`](api/diagram_editor/editbar/config/properties_property.md) property.

<iframe src="https://snippet.dhtmlx.com/w8mrh3ay?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe> 

## Configuring basic and complex controls

You can configure Editbar controls for each Diagram element separately and for a [group of elements](/guides/items_index) taking into account various conditions. For this purpose, use the Editbar [`properties`](api/diagram_editor/editbar/config/properties_property.md) config.

If you want to configure Editbar controls for an individual [shape](/category/shapes), you need to specify the corresponding **shape type** within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config as shown in the example below:

~~~jsx {6-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [ // configure editbar controls for the "pert" shape
                    { type: "arrange", $properties: { angle: { hidden: true } }},
                    // ... other Editbar controls configuration
                ],
                // ... other shapes configuration
            }
        }
    }
});
~~~

To configure a [group of elements](/guides/items_index), you need to use the following service properties within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config:

- [`$default`](#configure-editbar-for-the-grid-area) - allows configuring Editbar controls if no elements are selected, or more than one element is selected
- [`$shape`](#configure-editbar-for-shapes) - allows configuring Editbar controls for [all shapes including custom shapes](/category/shapes)
- [`$group`](#configure-editbar-for-group-elements) - allows configuring Editbar controls for all elements with the [**group**](/groups/) type
- [`$swimlane`](#configure-editbar-for-swimlanes) - allows configuring Editbar controls for all elements with the [**swimlane**](/swimlanes/) type
- [`$line`](#configure-editbar-for-lines) allows configuring Editbar controls for all elements with the [**line**](/lines/) type
- [`$lineTitle`](#configure-editbar-for-line-titles) - allows configuring Editbar controls for all elements with the [**lineTitle**](/line_titles/) type

<iframe src="https://snippet.dhtmlx.com/ealq0m4l?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Configure Editbar for the grid area

The `$default` service property allows configuring Editbar controls if no elements are selected, or more than one element is selected.

~~~jsx
properties: {
    $default: [
        {
            type: "gridStep",
            readOnly: true,
            // ...
        }
    ]
}
~~~

**Related complex controls:** [Grid step](/api/diagram_editor/editbar/complex_controls/gridstep/), [Border](/api/diagram_editor/editbar/complex_controls/border/), [Arrange](/api/diagram_editor/editbar/complex_controls/arrange/)

## Configure Editbar for shapes

The `$shape` service property allows configuring Editbar controls for [all shapes including custom shapes](/category/shapes).

~~~jsx
properties: {
    $shape: [
        {
            type: "position",
            $properties: {
                dx: { disabled: true },
                // ...
            },
            // ...
        }
    ]
}
~~~

**Related complex controls:** [Border](/api/diagram_editor/editbar/complex_controls/border/), [Arrange](/api/diagram_editor/editbar/complex_controls/arrange/), [Position](/api/diagram_editor/editbar/complex_controls/position/), [Size](/api/diagram_editor/editbar/complex_controls/size/), [Text align](/api/diagram_editor/editbar/complex_controls/textalign/), [Text style](/api/diagram_editor/editbar/complex_controls/textstyle/)

## Configure Editbar for group elements

The `$group` service property allows configuring Editbar controls for all elements with the [**group**](/groups/) type.

~~~jsx
properties: {
    $group: [
        { 
            type: "header", 
            label: "Group header style",
            // ... 
        }
    ]
}
~~~

**Related complex controls:** [Border](/api/diagram_editor/editbar/complex_controls/border/), [Arrange](/api/diagram_editor/editbar/complex_controls/arrange/), [Header](/api/diagram_editor/editbar/complex_controls/header/), [Header common](/api/diagram_editor/editbar/complex_controls/headercommon/), [Header position](/api/diagram_editor/editbar/complex_controls/headerposition/), [Size](/api/diagram_editor/editbar/complex_controls/size/), [Text align](/api/diagram_editor/editbar/complex_controls/textalign/), [Text style](/api/diagram_editor/editbar/complex_controls/textstyle/)

## Configure Editbar for swimlanes

The `$swimlane` service property allows configuring Editbar controls for all elements with the [**swimlane**](/swimlanes/) type.

~~~jsx
properties: {
    $swimlane: [
        { 
            type: "header", 
            label: "Swimlane header style",
            // ... 
        }
    ]
}
~~~

**Related complex controls:** [Border](/api/diagram_editor/editbar/complex_controls/border/), [Arrange](/api/diagram_editor/editbar/complex_controls/arrange/), [Header](/api/diagram_editor/editbar/complex_controls/header/), [Header common](/api/diagram_editor/editbar/complex_controls/headercommon/), [Header position](/api/diagram_editor/editbar/complex_controls/headerposition/), [Size](/api/diagram_editor/editbar/complex_controls/size/), [Text align](/api/diagram_editor/editbar/complex_controls/textalign/), [Text style](/api/diagram_editor/editbar/complex_controls/textstyle/)

## Configure Editbar for lines

The `$line` service property allows configuring Editbar controls for all elements with the [**line**](/lines/) type.

~~~jsx
properties: {
    $line: [
        {
            type: "lineShape",
            label: "Line connection type",
            // ...
        }
    ]
}
~~~

**Related complex controls:** [Border](/api/diagram_editor/editbar/complex_controls/border/), [Line shape](/api/diagram_editor/editbar/complex_controls/lineshape/), [Pointer view](/api/diagram_editor/editbar/complex_controls/pointerview/)

## Configure Editbar for line titles

The `$lineTitle` service property allows configuring Editbar controls for all elements with the [**lineTitle**](/line_titles/) type.

~~~jsx
properties: {
    $lineTitles: [
        {
            type: "textAlign",
            label: "Text align",
            // ...
        },
        // ...
    ]
}
~~~

**Related complex controls:**  [Text align](/api/diagram_editor/editbar/complex_controls/textalign/), [Text style](/api/diagram_editor/editbar/complex_controls/textstyle/)


