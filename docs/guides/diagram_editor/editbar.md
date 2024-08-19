---
sidebar_label: Editbar
title: Editor Guides - Editbar
description: You can learn about the Editbar of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar

Editbar is a part of the editor that provides controls for modifying values of the attributes of the Diagram items. You can select a necessary item and edit its attributes via the related Editbar options.

## Initializing Editbar

To initialize and configure Editbar, use the `editbar` property of the [`view`](api/diagram_editor/editor/config/view_property.md) configuration option. 

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

Below we will consider the types of Editbar controls and the ways of configuring and customizing them.

## Editbar controls

There are two types of Editbar controls: 

- [Basic control](api/diagram_editor/editbar/basic_controls_overview.md) - an item from a basic set of controls. It allows render and/or modify the value of one of the selected [Diagram item's](guides/items_index.md) properties. This type of controls is based on [DHTMLX Form](https://docs.dhtmlx.com/suite/category/list-of-form-controls/). 

The list of Basic controls includes: Avatar, Button, Checkbox, CheckboxGroup, Colorpicker, Combo, Container, Datepicker, Fieldset, Input, RadioGroup, Select, Slider, Spacer, Textarea, Timepicker, Toggle, ToggleGroup 
- [Complex control](api/diagram_editor/editbar/complex_controls_overview.md) - an item that contains more than one basic elements.  

The list of Complex controls includes: Arrange, Border, Grid step, Header, Header common, Header position, Line shape, Pointer view, Position, Size, Text align, Text style

You can configure the default Editbar controls or create custom controls based on [**Basic controls**](api/diagram_editor/editbar/basic_controls_overview.md) and/or [**Complex controls**](api/diagram_editor/editbar/complex_controls_overview.md).


## Creating custom Editbar controls

You can use the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property of the Editbar view to create a custom control. The `controls` property is an object that contains the new control type as a key and its configuration object as a value. After creating a custom control, you need to apply it to the needed Diagram element via the [`properties`](api/diagram_editor/editbar/config/properties_property.md) property.

:::warning
We do not recommend you to use a default control type (refer to the [***Basic controls***](api/diagram_editor/editbar/basic_controls_overview.md) and/or [***Complex controls***](api/diagram_editor/editbar/complex_controls_overview.md)) as the name for a custom control. Use the unique name for each custom control to avoid errors!
:::

It can be useful to combine basic controls while making logical blocks of separate controls, which allows redefining them.

As a rule, custom controls are created with the help of the `fieldset` basic control. Check the example below:

~~~jsx title="Creating custom controls"
const editor= new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "estimate" },
                    { type: "name" },
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
                name: { type: "input", label: "Name", key: "name" }
            }
        }
    }
});
~~~

In the above example the control with the `estimate` type is a complex custom control created with the help of the `fieldset` and `datepicker` controls. The `name` control is a custom control based on the basic `input` control.

Complex controls created on the base of the *basic* controls can be later redefined with the service property `$properties`. In the following example the Arrange control used for configuring Shapes gets particular width and height, while for the Arrange control used for Groups the `angle` property is hidden and the values of its Border control properties are redefined. 

~~~jsx title="Redefining properties of complex controls"
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    {
                        type: "arrange",
                        $properties: {
                            width: { min: 200 },
                            height: { min: 90 },
                        }
                    },
                    { type: "textarea", key: "text", label: "Text", wrap: true },
                    { type: "textStyle", label: "New label styles" },
                    { type: "textAlign" },
                ],
                $group: [
                    {
                        type: "arrange",
                        $properties: {
                            angle: { hidden: true },
                        },
                    },
                    { type: "header" },
                    {
                        type: "border",
                        $properties: {
                            stroke: { key: ["style", "stroke"] },
                            strokeType: { hidden: true },
                            strokeWidth: { key: ["style", "strokeWidth"], width: "85%" },
                        },
                    },
                ],
            },
        }
    }
});
~~~

Complex controls can also include other *complex* controls. Such controls can't be redefined.

**Related sample:** [Diagram Editor. Default mode. PERT сhart with the legend](https://snippet.dhtmlx.com/w8mrh3ay?mode=js)

## Configuring basic and complex controls

You can configure Editbar controls for each Diagram element separately and for a [group of elements](/guides/items_index) taking into account various conditions, such as the type of the item, absence of selected items, selection of more than one element, etc. For this purpose, use the Editbar [`properties`](api/diagram_editor/editbar/config/properties_property.md) config. 

The `properties` control is a configuration object that presents all available properties of an Editbar control. When you redefine this configuration option, it is important to specify the type of an Editbar control or of the group it belongs to. Redefining of any other properties is optional. The details are given below. 

There are two ways of defining controls of Editbar:

- by the type of the selected [shape](/category/shapes), for example: `rectangle`, `circle`, `card`, etc.

You need to specify the corresponding [**shape type**](/shapes/default_shapes/) within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config as shown in the example below:

~~~jsx title="Configuring the rectangle shape type"
const editor= new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    { type: "input", label: "Shape name" },
                    { type: "arrange" },
                    { type: "input", label: "Task name", key: "task_name", wrap: true },
                ]
            },
        }
    }
});
~~~

- by the logical group a Diagram item belongs to. The names of such [group of elements](/guides/items_index) start with `$`. When the property that contains the name of a group is redefined, all the types of items that relate to this group will be redefined.

You need to use the following group types as properties within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config:

- [`$default`](#configure-editbar-for-the-grid-area) - sets the default Editbar configuration, allows configuring Editbar controls if no elements are selected, or more than one element is selected
- [`$shape`](#configure-editbar-for-shapes) - allows configuring Editbar controls for [all shapes including custom shapes](/category/shapes)
- [`$group`](#configure-editbar-for-group-elements) - allows configuring Editbar controls for all elements with the [**group**](/groups/) type
- [`$swimlane`](#configure-editbar-for-swimlanes) - allows configuring Editbar controls for all elements with the [**swimlane**](/swimlanes/) type
- [`$line`](#configure-editbar-for-lines) allows configuring Editbar controls for all elements with the [**line**](/lines/) type
- [`$lineTitle`](#configure-editbar-for-line-titles) - allows configuring Editbar controls for all elements with the [**lineTitle**](/line_titles/) type

The example below shows how you can create new controls and redefine configurations of basic controls via the `properties` configuration object:

~~~jsx
const editor = new dhx.DiagramEditor("editor", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    { type: "details" },
                    { type: "colorpicker", label: "Header color", key: "headerColor", wrap: true },
                    { type: "spacer" },
                    {
                        type: "button",
                        full: true,
                        text: "Clear",
                        $on: {
                            click: ({ editor, id }) => {
                                editor.diagram.data.update(id, {
                                    "date_start": "",
                                    "date_end": "",
                                    "task": "",
                                    "responsible": "",
                                });
                            },
                        }
                    },
                ],
            },
            controls: {
                details: {
                    type: "fieldset",
                    label: "Task details",
                    rows: [
                        { type: "input", key: "task", label: "Task name" },
                        { type: "input", key: "id", label: "ID", readOnly: true },
                        {
                            align: "between",
                            cols: [
                                { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                { type: "datepicker", key: "date_end", label: "Date end", width: "48%" },
                            ],
                        },
                        {
                            type: "combo",
                            key: "responsible",
                            label: "Responsible",
                            placeholder: "Select responsible",
                            options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                        },
                    ],
                },
            }
        }
    }
});
~~~

The new complex `details` control is created and used for all the Diagram items with the `shape` type together with other controls (`colorpicker`, `spacer` and `button`) which are redefined via the `shape` property of the `properties` object.


**Related sample:** [Diagram Editor. Default mode. Customization of editbar. Added shape count](https://snippet.dhtmlx.com/ealq0m4l?mode=js)

### Configuring Editbar for the grid area

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

### Configuring Editbar for shapes

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

### Configuring Editbar for group elements

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

### Configuring Editbar for swimlanes

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

### Configuring Editbar for lines

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

### Configuring Editbar for line titles

The `$lineTitle` service property allows configuring Editbar controls for all elements with the [**lineTitle**](/line_titles/) type.

~~~jsx
properties: {
    $lineTitle: [
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


## Creating a dynamic Editbar

There is a possibility to create an Editbar the controls of which will dynamically change depending on the properties of the selected item. You can make such an Editbar by providing a function as a value of the property that defines the type of a shape or a group of items (`$shape`, `$group`, `swimlane`, etc.) within the `properties` configuration object. 

~~~jsx
const editor = new dhx.DiagramEditor("editor", {
    type: "org",
    shapeType: "img-card",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: ({ item }) => {
                    const controls = [
                        { type: "position" },
                        { type: "size" },
                    ];
                    if (item.hasOwnProperty("title")) {
                        controls.push({ type: "input", key: "title", label: "Title", wrap: true });
                    }
                    if (item.hasOwnProperty("text")) {
                        controls.push({ type: "textarea", key: "text", height: 200, label: "Text", wrap: true });
                    }
                    if (item.hasOwnProperty("img")) {
                        controls.push({ type: "avatar", key: "img", label: "Image", wrap: true });
                    }
                    return controls;
                },
            },
        }
    }
});
~~~

In the above example the `$shape` property is specified as a function that provides a set of default controls for all Diagram shapes and allows using other controls, depending on whether a Diagram item has a particular property in their configuration.

## Setting the width of Editbar

The default width of the Editbar is 300. You can change it and set any other width via the [`width`](api/diagram_editor/editbar/config/width_property.md) property, e.g.:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            width: 400 // 300 by default
        }
    }
});
~~~

## Showing/hiding the Editbar

Whenever you need to control the visibility of the Editbar, you can use the [`show`](api/diagram_editor/editbar/config/show_property.md) property. It allows you to hide the Editbar with particular settings on initialization of the Diagram Editor and show it later, when needed. By default the Editbar is shown.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            show: false // true by default
        }
    }
});
~~~

## Editbar appearance

You can provide the desired look and feel for the Editbar with the [`css`](api/diagram_editor/editbar/config/css_property.md) property. It allows specifying custom CSS classes to stylize items presentation in the Editbar in your own way.

~~~html
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            editbar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~


