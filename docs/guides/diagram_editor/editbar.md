---
sidebar_label: Editbar
title: Editor Guides - Editbar
description: You can learn about the Editbar of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar

Editbar is a part of the editor that provides controls for modifying values of the attributes of the Diagram items. You can select a necessary Diagram item and edit its attributes via the related Editbar options.

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

- `show` - (boolean) optional, [defines whether to display the Editbar when initializing](#showinghiding-the-editbar)
- `css` - (string) optional, [applies a custom CSS class to the Editbar](#editbar-appearance)
- `width` - (number) optional, [sets the Editbar width](#setting-the-width-of-editbar)
- `controls` - (object) optional, a set of configurations that [define one or several custom controls](#creating-custom-editbar-controls)
- `properties` - (object) optional, a set of configurations that [modify controls for Diagram items](#configuring-controls-for-diagram-elements)

## Editbar controls

There are two types of Editbar controls: 

- **Basic** control - an item from a basic set of controls. It allows rendering and/or modifying the value of one of the selected [Diagram item's](guides/items_index.md) properties. This type of controls is based on [DHTMLX Form](https://docs.dhtmlx.com/suite/category/list-of-form-controls/). 

The list of [**Basic controls**](api/diagram_editor/editbar/basic_controls_overview.md) includes: Avatar, Button, Checkbox, CheckboxGroup, Colorpicker, Combo, Container, Datepicker, Fieldset, Input, RadioGroup, Select, Slider, Spacer, Textarea, Timepicker, Toggle, ToggleGroup 

- **Complex** control - an item that contains more than one basic or complex controls.  

The list of [**Complex controls**](api/diagram_editor/editbar/complex_controls_overview.md) includes: Arrange, Border, Grid step, Header, Header common, Header position, Line shape, Pointer view, Position, Size, Text align, Text style

You can [configure the default Editbar controls](#configuring-controls-for-diagram-elements) or [create custom controls](#creating-custom-editbar-controls) based on [**Basic controls**](api/diagram_editor/editbar/basic_controls_overview.md) and/or [**Complex controls**](api/diagram_editor/editbar/complex_controls_overview.md).

## Configuring controls for Diagram elements

You can configure Editbar controls for each Diagram element separately and for a [group of elements](guides/items_index.md) taking into account various conditions, such as the type of the item, absence of selected items, selection of more than one element, etc. For this purpose, use the Editbar [`properties`](api/diagram_editor/editbar/config/properties_property.md) config. 

The `properties` config is an object that presents all available properties of an Editbar control. When you redefine this configuration option, it is important to specify the **type** of an Editbar control or of the group it belongs to. Redefining of any other properties is optional. The details are given below. 

There are two ways of defining controls of Editbar:

- by the [**type of the selected shape**](/shapes/default_shapes/), for example: `rectangle`, `circle`, `card`, etc.

You need to specify the corresponding shape type within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config as shown in the example below:

~~~jsx {5-10} title="Configuring the rectangle shape type"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    { type: "input", label: "Shape name" },
                    { type: "arrange" },
                ]
            },
        }
    }
});
~~~

- by the [logical group a Diagram item belongs to](guides/items_index.md). The names of such group of elements start with `$`. When the property that contains the name of a group is redefined, all the types of items that relate to this group will be redefined. The available groups of elements are the following:

    - [`$default`](#configuring-editbar-for-the-grid-area) - sets the default Editbar configuration, allows configuring Editbar controls if no elements are selected, more than one element is selected, or the diagram contains no data
    - [`$shape`](#configuring-editbar-for-shapes) - allows configuring Editbar controls for [all shapes including custom shapes](/category/shapes)
    - [`$group`](#configuring-editbar-for-group-elements) - allows configuring Editbar controls for all elements with the [`group`](/groups/) type
    - [`$swimlane`](#configuring-editbar-for-swimlanes) - allows configuring Editbar controls for all elements with the [`swimlane`](/swimlanes/) type
    - [`$line`](#configuring-editbar-for-lines) - allows configuring Editbar controls for all elements with the [`line`](/lines/) type
    - [`$lineTitle`](#configuring-editbar-for-line-titles) - allows configuring Editbar controls for all elements with the [`lineTitle`](/line_titles/) type

**Related sample:** [Diagram Editor. Default mode. Customization of editbar. Added shape count](https://snippet.dhtmlx.com/ealq0m4l?mode=js)

You need to use the enumerated group types as properties within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config object. 

When the type of a shape and the group this shape belongs to are specified at the same time, the configuration set for the type of a shape is applied, while the configuration of the group is ignored for this type. Such configurations aren't merged:

~~~jsx {3,5}
properties: {
    // applied to all shapes, except the rectangle ones
    $shape: [{ type: "arrange" }, { type: "border" }],
    // applied to the rectangle shapes only
    rectangle: [{ type: "input", label: "Shape name" }],
}
~~~

:::tip Note
The configuration you specify for a property replaces the default configuration of this property completely. The default configurations of the rest of the properties remain unchanged.
:::

### Redefining properties of basic controls

The example below shows how you can redefine the configurations of basic controls for a group of Diagram items via the `properties` configuration object:

~~~jsx {6-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    { type: "colorpicker", label: "Header color", key: "headerColor", wrap: true },
                    { type: "spacer" },
                    { type: "button", full: true, text: "Clear" },
                ],
            },
        }
    }
});
~~~

In the above example:

- The **Colorpicker**, **Spacer** and **Button** controls are used for all the Diagram items with the `$shape` type
    - The configs of the **Colorpicker** and **Button** controls are redefined especially for the `$shape` group of Diagram items, i.e. for all *shapes*

### Redefining properties of complex controls

Complex controls based on the *basic* controls can be redefined with the service property `$properties`. 

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in their functionality. 
:::

Check the example:

~~~jsx {10-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            show: true,
            properties: {
                $group: [
                    {
                        type: "arrange",
                        $properties: {
                            angle: { hidden: true },
                        },
                    },
                ]
            }
        },
    }
});
~~~

In the above example the `angle` property of the complex **Arrange** control is hidden.

:::tip Note
Complex controls can also [include other *complex* controls](#custom-controls-that-include-complex-controls). Such controls can't be redefined.
:::

**Related sample:** [Diagram Editor. Default mode. PERT сhart with the legend](https://snippet.dhtmlx.com/w8mrh3ay?mode=js)

### Configuring Editbar for the grid area

The `$default` service property allows configuring Editbar controls if no elements are selected, or more than one element is selected. The same configuration is applied when the diagram contains no data, as well as after loading new data or removing all the data.

~~~jsx {6-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "gridStep",
                        readOnly: true
                    }
                ]
            }
        }
    }
});
~~~

In the above example the **Grid step** control in the readonly mode is used when there aren't or more than one selected elements. 

**Related complex controls:** [Grid step](api/diagram_editor/editbar/complex_controls/gridstep.md), [Border](api/diagram_editor/editbar/complex_controls/border.md), [Arrange](api/diagram_editor/editbar/complex_controls/arrange.md)


### Configuring Editbar for shapes

The `$shape` service property allows configuring Editbar controls for [all shapes including custom shapes](/category/shapes).

~~~jsx {6-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "position",
                        $properties: {
                            dx: { disabled: true }
                        }
                    }
                ]
            }
        }
    }
});
~~~

In this example the **Position** control with the disabled shape offset on the x-axis is used for all shapes. 

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Arrange](api/diagram_editor/editbar/complex_controls/arrange.md), [Position](api/diagram_editor/editbar/complex_controls/position.md), [Size](api/diagram_editor/editbar/complex_controls/size.md), [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

### Configuring Editbar for group elements

The `$group` service property allows configuring Editbar controls for all elements with the [`group`](/groups/) type.

~~~jsx {6-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    { 
                        type: "header", 
                        label: "Group header style" 
                    }
                ]
            }
        }
    }
});
~~~

In the above example the **Header** control with a specified label is used for the `$group` type of Diagram elements.

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Arrange](api/diagram_editor/editbar/complex_controls/arrange.md), [Header](api/diagram_editor/editbar/complex_controls/header.md), [Header common](api/diagram_editor/editbar/complex_controls/headercommon.md), [Header position](api/diagram_editor/editbar/complex_controls/headerposition.md), [Size](api/diagram_editor/editbar/complex_controls/size.md), [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

### Configuring Editbar for swimlanes

The `$swimlane` service property allows configuring Editbar controls for all elements with the [`swimlane`](/swimlanes/) type.

~~~jsx {6-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $swimlane: [
                    { 
                        type: "header", 
                        label: "Swimlane header style",
                    }
                ]
            }
        }
    }
});
~~~

In the above example the **Header** control with a specified label is used for the `$swimlane` type of Diagram elements.

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Arrange](api/diagram_editor/editbar/complex_controls/arrange.md), [Header](api/diagram_editor/editbar/complex_controls/header.md), [Header common](api/diagram_editor/editbar/complex_controls/headercommon.md), [Header position](api/diagram_editor/editbar/complex_controls/headerposition.md), [Size](api/diagram_editor/editbar/complex_controls/size.md), [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

### Configuring Editbar for lines

The `$line` service property allows configuring Editbar controls for all elements with the [`line`](/lines/) type.

~~~jsx {6-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $line: [
                    {
                        type: "lineShape",
                        label: "Line connection type"
                    }
                ]
            }
        }
    }
});
~~~

In the above example the **Line shape** control with a specified label is used for the `$line` group of Diagram elements.

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Line shape](api/diagram_editor/editbar/complex_controls/lineshape.md), [Pointer view](api/diagram_editor/editbar/complex_controls/pointerview.md)

### Configuring Editbar for line titles

The `$lineTitle` service property allows configuring Editbar controls for all elements with the [`lineTitle`](/line_titles/) type.

~~~jsx {6-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $lineTitle: [
                    {
                        type: "textAlign",
                        label: "Text align"
                    }
                ]
            }
        }
    }
});
~~~

In the above example the **Text align** control with a specified label is used for the `$lineTitle` group of Diagram elements. 

**Related complex controls:**  [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Creating custom Editbar controls

You can use the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property of the Editbar view to create a custom control. The `controls` property is an object that contains a new control type as a key and its configuration object as a value. After creating a custom control, you need to apply it to the needed Diagram element via the [`properties`](api/diagram_editor/editbar/config/properties_property.md) property.

:::warning
We do not recommend using a default control type (refer to the [***Basic controls***](api/diagram_editor/editbar/basic_controls_overview.md) and/or [***Complex controls***](api/diagram_editor/editbar/complex_controls_overview.md)) as the name for a custom control. Use a unique name for each custom control to avoid errors!
:::

It can be useful to combine basic controls while making logical blocks of separate controls, which allows redefining them.
As a rule, custom controls are created with the help of the basic [**Fieldset**](api/diagram_editor/editbar/basic_controls/fieldset.md) control. 

### Custom controls based on basic controls

The example below shows how you can create custom controls based on basic controls:

~~~jsx {11-20}
const editor = new dhx.DiagramEditor("editor_container", {
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

In the above example:

- the **Estimate** control is a complex custom control created with the help of the **Fieldset** and two **Datepicker** controls
- the **Name** control is a custom control based on the basic **Input** control
- both controls are applied to all shapes (the *$shape* group type) 

**Related sample:** [Diagram Editor. Default mode. PERT сhart with the legend](https://snippet.dhtmlx.com/w8mrh3ay?mode=js)

### Redefining service properties of custom controls based on basic controls

Custom controls based on basic ones can have *service* properties and methods in their configuration. The names of such properties start with `$`. 

:::warning
Note that redefining the service properties and methods for the [default](#editbar-controls) types of controls may cause breaks in their functionality. You need to create a new control based on the default type to redefine the service properties and methods.
:::

Check [Basic controls API](api/diagram_editor/editbar/basic_controls_overview.md) to learn what service properties and methods are used for each control.

- `$on` - (optional) - allows setting an event listener. The object has the following properties:
    - `eventName`  - a callback function which is called with the following parameters:
        - `object` - an object with the following properties:
            - `control` - the Form control 
            - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)
            - `id` - the id of a Diagram item 
        - `arguments` - (optional) - the [original event arguments](https://docs.dhtmlx.com/suite/category/form-avatar-events/)
- `$handler` - (optional) - a callback function that allows handling actions on firing the `change` event of the Form or the `input` event of the Form control. The callback is not called if the new value of the control is equal to the current value of the related property of a Diagram item. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item 
        - `key` - the name of the specified/modified property in the object of a Diagram item 
        - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)
        - `control` - the object of the Form control the component is built on
        - `value` - the new value of the Form control
- `$setValue` - (optional) - a callback function that allows setting the value of the Form control on initialization of a control and on changing the value in DataCollection. The callback is not called if the control already displays the current value of the related property of a Diagram item. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)
        - `control` - the object of the Form control the component is built on
        - `value` - the value of a Diagram item 
- `$layout` - (optional) - a callback function that allows setting the structure of a control. Returns the configuration of the Form control. Called with the following parameter:
    - `object` - the configuration of the control without service properties

In the example below the use of the `$on` service property is shown:

~~~jsx {13-15}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "name" },
                ]
            },
            controls: {
                name: {
                    type: "input",
                    $on: {
                        focus: () => console.log("input in focus"),
                    }
                }
            }
        }
    }
});
~~~

The `$on` service property of the custom **Name** control based on the [**Input**](https://docs.dhtmlx.com/suite/form/input/) Form control sets a listener for the [`focus`](https://docs.dhtmlx.com/suite/form/api/input/input_focus_event/) event.

In the following example the use of the `$handler` service property is shown:

~~~jsx {13-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "name" },
                ]
            },
            controls: {
                name: {
                    type: "input",
                    $handler: ({ id, editor, control, key, value }) => {
                        editor.diagram.data.update(
                            id,
                            { [key]: value, }
                        );
                        control.setValue(value);
                    },
                }
            }
        }
    }
});
~~~

The `$handler` service property of the custom **Name** control defines that on firing the `change` and `input` events of the [**Input**](https://docs.dhtmlx.com/suite/form/input/) Form control the corresponding field is updated in the diagram data collection and the new value is set for the control. 

### Custom controls that include complex controls

While creating a custom control, you can use Complex controls the same as Basic controls. Check the following example:

~~~jsx {8,12-23}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                pert: [
                    { type: "arrange", $properties: { angle: { hidden: true } }},
                    { type: "details"},
                ],
            },
            controls: {
                // creating a custom control
                details: {
                    type: "fieldset",
                    label: "Task details",
                    rows: [
                        // using a complex Size control
                        { type: "size", label: "Task size", align: "center" }, 
                        { type: "checkbox", text: "Critical", key: "critical" },
                        { type: "input", key: "status", label: "Status" },
                        { type: "textarea", key: "task", label: "Description" },
                    ]
                }
            }
        }
    }
});
~~~

In the above example a [custom shape](/shapes/custom_shape/) with the **pert** type contains:
    
- a complex **Arrange** control with the `angle` property redefined via the [`$properties`](#redefining-properties-of-complex-controls) config 
- a custom **Details** control created with the **Fieldset** control. It includes a complex **Size** control and several basic controls. The configuration of the complex **Details** control can't be redefined via the `$properties` config, since it [contains a complex control in its configuration object](#redefining-properties-of-complex-controls).

## Using custom HTML in Editbar

You can specify a custom HTML content to be displayed on the Editbar panel. Use the basic [Container](api/diagram_editor/editbar/basic_controls/container.md) control and provide the necessary HTML content via the `html` property:

~~~jsx {9-14}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "container",
                        html: `
                            <h3 class="editbar_logo__header">DHTMLX Diagram</h3>
                            <p class="editbar_logo__description">This is an example of simple customization of the editing panel using the container control.</p>
                            <p class="editbar_logo__description">You can also use this control to create your own controls.</p>
                            <img class="editbar_logo__image" src='https://snippet.dhtmlx.com/codebase/data/common/img/01/developer-01.svg'>
                        `,
                    },
                ],
            }
        }
    }
});
~~~

In the above example a text with an image appears in the Editbar when there is no Diagram items selected (the `$default` group type is specified).

## Creating a dynamic Editbar

There is a possibility to create an Editbar that will dynamically change depending on certain conditions, e.g.:
the selected shape type, absence of selected items, the properties of the selected item. 

For this purpose, you need to specify a function instead of an array of controls within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config. The default Editbar configuration is built in the same way: the built-in `$shape` property is specified as a function that returns different sets of controls depending on the type of a selected item, e.g. for the `text` and `img-card` shapes. Note that the default configuration isn't the same for all the [modes of the editor](api/diagram_editor/editor/config/type_property.md): the `default`, `org` and `mindmap` modes have their own sets of controls.

Follow the steps described below to make your own dynamic Editbar.

### Step 1. Choosing the property to configure

A function can be set as a value of any property within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config, namely:

- a [group of elements](#configuring-controls-for-diagram-elements), i.e. `$shape`, `$group`, `$swimlane`, `$line`, `$lineTitle`
- the [type of a particular shape](/shapes/default_shapes/), e.g. `rectangle`, `circle`, `card`
- the `$default` property. Note that in this case the `item` parameter is *undefined*, since the `$default` configuration is applied when there is no selected item. Use the `editor` parameter to check the current state of the editor, e.g. the [`getIds()`](api/selection/getids_method.md) method of Selection returns the ids of the selected items, which allows distinguishing the absence of selection from the selection of several items

The [priority of the properties](#configuring-controls-for-diagram-elements) stays the same as for the arrays of controls: the configuration set for the type of a shape is applied, while the configuration of the group this shape belongs to is ignored.

### Step 2. Specifying a function

The function must return an array with the configurations of controls. It is called with the following parameter:

- `object` - an object with the following properties:
    - `item` - the object of the selected Diagram item
    - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)

The `item` parameter allows checking the type and the properties of the selected item, while the `editor` parameter gives access to the state of the whole editor, e.g. to the data and the selection of the Diagram via `editor.diagram`.

Check the example below:

~~~jsx {6-22}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                // a function for the type of a particular shape
                rectangle: ({ item }) => {
                    const controls = [{ type: "arrange" }, { type: "border" }];
                    if (item.hasOwnProperty("text")) {
                        controls.push({ type: "textStyle" });
                    }
                    return controls;
                },
                // a function for the $default property
                $default: ({ editor }) => {
                    const selected = editor.diagram.selection.getIds();
                    // more than one element is selected or the Diagram contains no data
                    if (selected.length > 1 || !editor.diagram.data.getLength()) {
                        return [{ type: "gridStep", readOnly: true }];
                    }
                    return [{ type: "gridStep" }];
                },
            }
        }
    }
});
~~~

In the above example the set of controls for the **rectangle** shape is extended with the **Text style** control if the shape contains the `text` property, while the **Grid step** control of the grid area is rendered in the readonly mode when more than one element is selected or the Diagram contains no data. The state of the editor is checked via the [`getIds()`](api/selection/getids_method.md) method of Selection and the [`getLength()`](https://docs.dhtmlx.com/suite/data_collection/api/datacollection_getlength_method/) method of DataCollection.

### Step 3. Setting the conditions for rendering controls

Inside the function you can check the type and the properties of a selected item and return the set of controls that meets the necessary conditions:

~~~jsx {7-25}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeType: "img-card",
    view: {
        editbar: {
            show: true,
            properties: {
                // setting the $shape property as a function
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

In the above example the `$shape` property is specified as a function that provides a set of default controls for all Diagram shapes and also allows using additional controls, depending on the properties of a selected shape.

The `hasOwnProperty()` method checks whether an item has a certain property specified as an argument of this method. If it does, a particular control is used for rendering/modifying this property. For example:

- if there is the `title` property in the item object,  the **Input** control will be used 
- if there is the `text` property in the item object, the **Textarea** control will be used
- if there is the `img` property in the item object, the **Avatar** control will be used

### Step 4. Checking when the Editbar is rebuilt

The function is called each time the Editbar rebuilds its set of controls, namely:

- on selecting a Diagram item
- on unselecting an item or selecting more than one item, when the `$default` configuration is applied
- after loading data into the Diagram or removing all the data

Modifying the properties of the selected item doesn't rebuild the Editbar. In this case the already rendered controls only refresh their values via the [`$setValue`](#redefining-service-properties-of-custom-controls-based-on-basic-controls) service property. If a new set of controls is expected, you need to select the item anew, e.g. by selecting another element and then the needed one again.

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


