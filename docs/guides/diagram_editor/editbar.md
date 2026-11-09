---
sidebar_label: Editbar
title: Editor Guides - Editbar
description: You can learn about the Editbar of the editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar

Editbar is a part of the editor that provides controls for editing the properties of Diagram items. Select an item to edit its properties in the Editbar.

## Initializing Editbar

To initialize and configure Editbar, use the `editbar` property of the [`view`](api/diagram_editor/editor/config/view_property.md) configuration option.

You can initialize Editbar in two ways:

- create the default Editbar by using the `editbar: true` setting:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // displaying the default Editbar
    }
});
~~~

- configure Editbar by specifying it as an object with [a set of properties](/category/editbar-properties/):

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
- `width` - (number) optional, [sets the Editbar width](#setting-the-width-of-the-editbar)
- `controls` - (object) optional, a set of configurations that [define one or several custom controls](#creating-custom-editbar-controls)
- `properties` - (object) optional, a set of configurations that [modify controls for Diagram items](#configuring-controls-for-diagram-elements)

## Editbar controls

There are two types of Editbar controls:

- **Basic** control - an item from a basic set of controls. It allows rendering and/or modifying the value of one of the selected [Diagram item's](guides/items_index.md) properties. This type of control is based on [DHTMLX Form](https://docs.dhtmlx.com/suite/category/list-of-form-controls/).

The list of [**Basic controls**](api/diagram_editor/editbar/basic_controls_overview.md) includes: Avatar, Button, Checkbox, CheckboxGroup, Colorpicker, Combo, Container, Datepicker, Fieldset, Input, RadioGroup, Select, Slider, Spacer, Textarea, Timepicker, Toggle, ToggleGroup.

- **Complex** control - an item that contains more than one basic or complex control.

The list of [**Complex controls**](api/diagram_editor/editbar/complex_controls_overview.md) includes: Arrange, Border, Grid step, Header, Header common, Header position, Line shape, Pointer view, Position, Size, Text align, Text style.

You can [configure the default Editbar controls](#configuring-controls-for-diagram-elements) or [create custom controls](#creating-custom-editbar-controls) based on basic and/or complex controls.

## Configuring controls for Diagram elements

To configure Editbar controls for a particular Diagram element or a [group of elements](guides/items_index.md), use the Editbar [`properties`](api/diagram_editor/editbar/config/properties_property.md) config.

The `properties` config is an object where a key is the type of a Diagram element or the group it belongs to, and a value is an array with the configurations of controls. When you redefine this configuration option, specify the **type** of an Editbar control. Redefining any other properties is optional.

You can define Editbar controls in two ways:

- by the [**type of the selected shape**](/shapes/default_shapes/), for example: `rectangle`, `circle`, `card`, etc. Specify the shape type as a key of the `properties` config:

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

- by the [logical group a Diagram item belongs to](guides/items_index.md). The available groups are the following:

    - [`$default`](#configuring-editbar-for-the-grid-area) - applies when no elements are selected, more than one element is selected, or the diagram contains no data
    - [`$shape`](#configuring-editbar-for-shapes) - applies to [all shapes including custom shapes](/category/shapes)
    - [`$group`](#configuring-editbar-for-group-elements) - applies to all elements with the [`group`](/groups/) type
    - [`$swimlane`](#configuring-editbar-for-swimlanes) - applies to all elements with the [`swimlane`](/swimlanes/) type
    - [`$line`](#configuring-editbar-for-lines) - applies to all elements with the [`line`](/lines/) type
    - [`$lineTitle`](#configuring-editbar-for-line-titles) - applies to all elements with the [`lineTitle`](/line_titles/) type

The names of groups start with `$`. When you redefine a group, the new configuration applies to all the types of items that belong to this group.

If you configure both a shape type and its group, the configuration of the shape type takes priority. The Editbar uses it for the shapes of this type and ignores the group configuration for them. The two configurations aren't merged:

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

**Related sample:** [Diagram Editor. Default mode. Customization of editbar. Added shape count](https://snippet.dhtmlx.com/ealq0m4l?mode=js)

### Redefining properties of controls

The controls take the configs of the DHTMLX Form controls they are based on. The table below shows which common configs each type of control supports:

| Config | Basic controls | Complex controls |
| ---- | :----: | :----: |
| `hidden` | ✓ | ✓ |
| `disabled` | ✓ | ✓ |
| `readOnly` | ✓ | only [**Grid step**](api/diagram_editor/editbar/complex_controls/gridstep.md), based on the basic **Input** control |

Check the [Basic controls](api/diagram_editor/editbar/basic_controls_overview.md) and [Complex controls](api/diagram_editor/editbar/complex_controls_overview.md) API to learn the full list of configs of each control.

Besides the configs of DHTMLX Form controls, you can redefine the *service* properties of controls, e.g. `$on` for setting event listeners. Check the [Service properties of controls](#service-properties-of-controls) section for details.

#### Basic controls

A basic control addresses a property of the selected item via the `key` config, while the `wrap` config renders the control inside a fieldset with the specified label. The `wrap` config works only if the `label` config is specified.

The example below shows how you can redefine the configurations of basic controls for a group of Diagram items via the `properties` configuration object:

~~~jsx {6-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    { type: "colorpicker", label: "Header color", key: "headerColor", wrap: true }
                ],
            },
        }
    }
});
~~~

In the above example, the Editbar renders the **Colorpicker** control inside a fieldset with the *Header color* label. The control changes the `headerColor` property of all the Diagram items of the `$shape` group.

#### Complex controls

To redefine the controls that a complex control includes, use the `$properties` service property. It is an object where a key is the `key` of an included control and a value is the configuration that redefines it.

:::warning
Redefining the service properties and methods of the [default](#editbar-controls) types of controls isn't recommended, since it may break them.
:::

Check the example below:

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

In the above example, the `$properties` service property hides the `angle` control of the complex **Arrange** control.

:::tip Note
Complex controls can also [include other *complex* controls](#custom-controls-that-include-complex-controls). Such controls can't be redefined.
:::

**Related sample:** [Diagram Editor. Default mode. PERT chart with the legend](https://snippet.dhtmlx.com/w8mrh3ay?mode=js)

### Configuring Editbar for the grid area

The `$default` group allows configuring Editbar controls if no elements are selected or more than one element is selected. The Editbar also applies this configuration when the diagram contains no data, e.g. after loading new data or removing all the data.

![Default Editbar for the grid area](/img/editbar-guide/editbar_grid_area.png)

Since there is no item to edit in these cases, use `$default` for the controls that modify the settings of the editor. For example, the [**Grid step**](api/diagram_editor/editbar/complex_controls/gridstep.md) control displays and modifies the [`gridStep`](api/diagram_editor/editor/config/gridstep_property.md) config of the editor. In the example below, it renders in the read-only mode:

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

:::warning
The controls that address the properties of a Diagram item, e.g. **Border** or **Arrange**, render without values within `$default`, and the changes you make in them have no effect.
:::

To render different sets of controls for the absence of selection and the selection of several items, specify `$default` as a [function](#creating-a-dynamic-editbar).

**Related complex controls:** [Grid step](api/diagram_editor/editbar/complex_controls/gridstep.md)

### Configuring Editbar for shapes

The `$shape` group allows configuring Editbar controls for [all shapes including custom shapes](/category/shapes).

![Arrange, Text and Text style controls of the default Editbar for shapes in the default mode](/img/editbar-guide/editbar_shape.png)

The set of controls that suits shapes depends on the [mode of the editor](api/diagram_editor/editor/config/type_property.md). For example, the position and the size of a shape require different controls:

- in the `default` mode the [**Arrange**](api/diagram_editor/editbar/complex_controls/arrange.md) control sets the coordinates, the size and the angle of a shape:

~~~jsx {6-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "arrange" },
                    { type: "border" }
                ]
            }
        }
    }
});
~~~

In the above example, the Editbar renders the **Arrange** and **Border** controls for all shapes.

- in the `org` and `mindmap` modes, where shapes are arranged automatically, the [**Position**](api/diagram_editor/editbar/complex_controls/position.md) control sets the offsets from the calculated position, and the [**Size**](api/diagram_editor/editbar/complex_controls/size.md) control sets the width and the height of a shape:

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

In the above example, the Editbar renders the **Position** control for all shapes and disables the offset on the x-axis, so users can change only the vertical offset of a shape.

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Arrange](api/diagram_editor/editbar/complex_controls/arrange.md), [Position](api/diagram_editor/editbar/complex_controls/position.md), [Size](api/diagram_editor/editbar/complex_controls/size.md), [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

### Configuring Editbar for group elements

The `$group` group allows configuring Editbar controls for all elements with the [`group`](/groups/) type.

![Arrange and Header controls of the default Editbar for groups](/img/editbar-guide/editbar_group.png)

A group stores its settings in the nested [`style` and `header`](groups/configuration_properties.md) objects. That is why the controls of such elements address the properties of a group via an array of keys, e.g.:

- `key: ["style", "fill"]` - for the background color of a group
- `key: ["header", "text"]` - for the text of the group header

Check the example below:

~~~jsx {6-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    // the background color of a group
                    { type: "colorpicker", key: ["style", "fill"], label: "Fill", wrap: true },
                    // the border settings of a group
                    {
                        type: "border",
                        $properties: {
                            stroke: { key: ["style", "stroke"] },
                            strokeType: { key: ["style", "strokeType"] },
                            strokeWidth: { key: ["style", "strokeWidth"] }
                        }
                    }
                ]
            }
        }
    }
});
~~~

In the above example, the **Colorpicker** control addresses the `fill` property of the `style` object, while the `$properties` service property redefines the keys of the controls included in the **Border** control.

:::warning
The controls that address the flat properties of an item by default, e.g. **Border**, **Text align**, **Text style**, need their keys [redefined](#complex-controls) via the `$properties` service property before you apply them to groups.
:::

Some [complex controls](#editbar-controls) address the nested properties of a group by default. The [**Header**](api/diagram_editor/editbar/complex_controls/header.md) control is one of them, so you can apply it to groups as is:

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

In the above example, the **Header** control configures the headers of all groups: their visibility, fill, height, position, text style and alignment. The *Group header style* label appears above these controls.

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Arrange](api/diagram_editor/editbar/complex_controls/arrange.md), [Header](api/diagram_editor/editbar/complex_controls/header.md), [Header common](api/diagram_editor/editbar/complex_controls/headercommon.md), [Header position](api/diagram_editor/editbar/complex_controls/headerposition.md), [Size](api/diagram_editor/editbar/complex_controls/size.md), [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

### Configuring Editbar for swimlanes

The `$swimlane` group allows configuring Editbar controls for all elements with the [`swimlane`](/swimlanes/) type.

![Header and subheader controls of the default Editbar for swimlanes](/img/editbar-guide/editbar_swimlane.png)

A swimlane stores its settings in the nested [`style` and `header`](swimlanes/configuration_properties.md) objects, so its controls address them in the [same way as the controls of groups](#configuring-editbar-for-group-elements).

In addition, a swimlane contains the `subHeaderCols` and `subHeaderRows` objects with the settings of its subheaders. To configure them, use the [**Header common**](api/diagram_editor/editbar/complex_controls/headercommon.md) control with the redefined keys:

~~~jsx {6-25}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $swimlane: [
                    {
                        type: "headerCommon",
                        label: "Top and bottom subheaders",
                        $properties: {
                            enable: { key: ["subHeaderCols", "enable"] },
                            fill: { key: ["subHeaderCols", "fill"] },
                            height: { key: ["subHeaderCols", "height"] }
                        }
                    },
                    {
                        type: "headerCommon",
                        label: "Left and right subheaders",
                        $properties: {
                            enable: { key: ["subHeaderRows", "enable"] },
                            fill: { key: ["subHeaderRows", "fill"] },
                            height: { key: ["subHeaderRows", "height"] }
                        }
                    }
                ]
            }
        }
    }
});
~~~

In the above example, the **Header common** control appears twice: it configures the top/bottom subheaders via the `subHeaderCols` object and the left/right subheaders via the `subHeaderRows` object.

The [**Header**](api/diagram_editor/editbar/complex_controls/header.md) control addresses the `header` object of a swimlane by default:

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

In the above example, the **Header** control configures the headers of all swimlanes in the same way as for groups. The *Swimlane header style* label appears above its controls.

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Arrange](api/diagram_editor/editbar/complex_controls/arrange.md), [Header](api/diagram_editor/editbar/complex_controls/header.md), [Header common](api/diagram_editor/editbar/complex_controls/headercommon.md), [Header position](api/diagram_editor/editbar/complex_controls/headerposition.md), [Size](api/diagram_editor/editbar/complex_controls/size.md), [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

### Configuring Editbar for lines

The `$line` group allows configuring Editbar controls for all elements with the [`line`](/lines/) type.

![Default Editbar for lines](/img/editbar-guide/editbar_line.png)

The following controls are specific to lines:

- [**Line shape**](api/diagram_editor/editbar/complex_controls/lineshape.md) - sets the `connectType` property of a line
- [**Pointer view**](api/diagram_editor/editbar/complex_controls/pointerview.md) - sets the `backArrow` and `forwardArrow` properties of a line

Check the example below:

~~~jsx {6-15}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $line: [
                    {
                        type: "lineShape",
                        label: "Line connection type"
                    },
                    {
                        type: "pointerView",
                        label: "Line arrows"
                    }
                ]
            }
        }
    }
});
~~~

In the above example, the Editbar renders the **Line shape** and **Pointer view** controls for all lines, so users can change the connection type and the arrows of a line.

A line connects two shapes and gets its geometry from the [`from`, `to` and `points`](lines/configuration_properties.md) properties. That is why the controls that address the position and the size of an item, e.g. **Arrange** or **Size**, don't suit lines.

The [**Border**](api/diagram_editor/editbar/complex_controls/border.md) control sets the style of a line. The default configuration renders it with the *Line style* label:

~~~jsx {6-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $line: [
                    {
                        type: "border",
                        label: "Line style"
                    }
                ]
            }
        }
    }
});
~~~

In the above example, the Editbar renders the **Border** control with the *Line style* label for all lines, as the default configuration does.

:::note
The text that a line displays belongs to a separate item, so you need to configure it via the [`$lineTitle`](#configuring-editbar-for-line-titles) group.
:::

**Related complex controls:** [Border](api/diagram_editor/editbar/complex_controls/border.md), [Line shape](api/diagram_editor/editbar/complex_controls/lineshape.md), [Pointer view](api/diagram_editor/editbar/complex_controls/pointerview.md)

### Configuring Editbar for line titles

The `$lineTitle` group allows configuring Editbar controls for all elements with the [`lineTitle`](/line_titles/) type.

![Default Editbar for line titles](/img/editbar-guide/editbar_line_title.png)

A line title is a separate Diagram item that a line owns via the [`parent`](line_titles/configuration_properties.md) property, so you configure its controls apart from the controls of the line itself.

:::note
Line titles are available only in the default mode of the editor (type: `"default"`).
:::

A line title stores its text settings in flat properties, e.g. `text`, `fontColor`, `textAlign`, and supports only the horizontal alignment of the text. That is why the default configuration hides the `textVerticalAlign` control inside the **Text align** control. Hide it in the same way when you redefine the controls of line titles:

~~~jsx {6-14}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $lineTitle: [
                    {
                        type: "textAlign",
                        label: "Text align",
                        $properties: {
                            textVerticalAlign: { hidden: true }
                        }
                    }
                ]
            }
        }
    }
});
~~~

In the above example, the Editbar renders the **Text align** control for all line titles and hides the vertical alignment, which line titles don't support.

**Related complex controls:** [Text align](api/diagram_editor/editbar/complex_controls/textalign.md), [Text style](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Creating custom Editbar controls

You can use the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property of the Editbar view to create a custom control. The `controls` property is an object that contains a new control type as a key and its configuration object as a value. After creating a custom control, apply it to Diagram elements via the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config.

:::warning
We do not recommend using a default control type (refer to the [Basic controls](api/diagram_editor/editbar/basic_controls_overview.md) and/or [Complex controls](api/diagram_editor/editbar/complex_controls_overview.md)) as the name for a custom control, since the custom control replaces the default one everywhere, including the default Editbar configuration and the controls inside complex controls. Use a unique name for each custom control.
:::

### Custom controls based on basic controls

You can combine basic controls into a logical block to reuse and redefine them as one control. Custom controls usually use the basic [**Fieldset**](api/diagram_editor/editbar/basic_controls/fieldset.md) control as a container.

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

- the **Estimate** control is a custom complex control that combines the **Fieldset** and two **Datepicker** controls
- the **Name** control is a custom control based on the basic **Input** control
- both controls are applied to all shapes (the `$shape` group)

A custom control inherits the configuration of the control specified in its `type` property, including the `key` config and the service properties. The configs that you specify for a custom control redefine the inherited ones.

**Related sample:** [Diagram Editor. Default mode. Customization of cards, editbar, toolbar and shapebar](https://snippet.dhtmlx.com/1p0wemnn?mode=js)

### Custom controls that include complex controls

While creating a custom control, you can use complex controls in the same way as basic controls. Check the following example:

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

In the above example, a [custom shape](/shapes/custom_shape/) with the **pert** type contains:

- a complex **Arrange** control with the `angle` property redefined via the [`$properties`](#complex-controls) config
- a custom **Details** control created with the **Fieldset** control. It includes a complex **Size** control and several basic controls. The configuration of the custom complex **Details** control can't be redefined via the `$properties` config, since it [contains a complex control in its configuration object](#complex-controls).

### Service properties of controls

Basic controls and custom controls based on them can have *service* properties and methods in their configuration. The names of such properties start with `$`. You can specify the `$on`, `$handler`, `$setValue` and `$properties` service properties right within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config or in the configuration of a custom control. The `$layout` service property works only in the configuration of a custom control.

:::warning
Redefining the service properties and methods of the [default](#editbar-controls) types of controls may break them. You need to create a new control based on the default type to redefine the service properties and methods.
:::

Check [Basic controls API](api/diagram_editor/editbar/basic_controls_overview.md) to learn what service properties and methods each basic control uses.

- `$on` - (object) optional, allows setting an event listener. The object has the following properties:
    - `eventName` - the name of a Form control event as a key, and a callback function as a value. The callback is called with the following parameters:
        - `object` - an object with the following properties:
            - `control` - the Form control
            - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)
            - `id` - the id of a Diagram item
        - `arguments` - optional, the first argument of the [original event](https://docs.dhtmlx.com/suite/category/list-of-form-controls/)
- `$handler` - (function) optional, a callback function that allows handling actions on firing the `change` event of the Form or the `input` event of the Form control. Called with the following parameter:
    - `object` - an object with the following properties:
        - `id` - the id of a Diagram item
        - `key` - the name of the specified/modified property in the object of a Diagram item
        - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)
        - `control` - the object of the Form control the component is built on
        - `value` - the new value of the Form control
- `$setValue` - (function) optional, a callback function that allows setting the value of the Form control on initialization of a control and on changing the value in DataCollection. Called with the following parameter:
    - `object` - an object with the following properties:
        - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)
        - `control` - the object of the Form control the component is built on
        - `value` - the value of a Diagram item
- `$layout` - (function) optional, a callback function that allows setting the structure of a control. Returns the configuration of the Form control. Called with the following parameter:
    - `object` - the configuration of the control, including its `id`. The service properties of the control definition aren't included.

:::tip Note
The Editbar calls the `$handler` and `$setValue` callbacks only when the value of the control and the value of the related property of a Diagram item differ.
:::

The example below shows how to use the `$on` service property:

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

The following example shows how to use the `$handler` service property:

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

In the above example, on the `change` and `input` events of the [**Input**](https://docs.dhtmlx.com/suite/form/input/) Form control, the `$handler` service property of the custom **Name** control:

- updates the `text` property of a Diagram item
- sets the new value for the control

The **Name** control inherits the `text` key from the **Input** control it is based on.

### Custom controls that perform actions

The controls that perform actions need the [`$on`](#service-properties-of-controls) service property. For example, the basic [**Button**](api/diagram_editor/editbar/basic_controls/button.md) control renders a button that does nothing until you specify a listener of the `click` event for it.

You can set `$on` right within the `properties` config, as shown in the [Button](api/diagram_editor/editbar/basic_controls/button.md#example) example (note that redefining the service properties of the default types of controls may break their functionality). You can also create a custom control to reuse the button for several groups of elements:

~~~jsx {13-21}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    // keeps the Arrange control, since $shape replaces the default controls
                    { type: "arrange" },
                    { type: "resetSize" },
                ]
            },
            controls: {
                resetSize: {
                    type: "button",
                    text: "Reset size",
                    $on: {
                        click: ({ editor, id }) => {
                            editor.diagram.data.update(id, { width: 140, height: 90 });
                        },
                    },
                },
            },
        }
    }
});
~~~

In the above example, the custom **Reset size** control based on the **Button** control sets the width and the height of the selected shape to 140 and 90 on a click.

## Using custom HTML in Editbar

To display custom HTML content in the Editbar, use the basic [**Container**](api/diagram_editor/editbar/basic_controls/container.md) control and pass the content via its `html` property:

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

In the above example, text and an image appear in the Editbar when no items or several items are selected, since the **Container** control is set for the `$default` group.

## Creating a dynamic Editbar

You can create an Editbar that changes its controls depending on the selected shape type, the absence of selected items, or the properties of the selected item.

To do this, specify a function instead of an array of controls within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config. The default Editbar configuration uses the same approach: the built-in `$shape` property is a function that returns different sets of controls depending on the type of a selected item, e.g. for the `text` and `img-card` shapes.

The default configuration differs for the [modes of the editor](api/diagram_editor/editor/config/type_property.md): the `default`, `org` and `mindmap` modes have their own sets of controls.

Follow the steps described below to make your own dynamic Editbar.

### Step 1. Choosing the property to configure

You can set a function as a value of any property within the [`properties`](api/diagram_editor/editbar/config/properties_property.md) config, namely:

- a [group of elements](#configuring-controls-for-diagram-elements), i.e. `$shape`, `$group`, `$swimlane`, `$line`, `$lineTitle`
- the [type of a particular shape](/shapes/default_shapes/), e.g. `rectangle`, `circle`, `card`
- the `$default` property

:::note
In the `$default` function, the `item` parameter is *undefined*, since there is no selected item. To distinguish the absence of selection from the selection of several items, check the state of the editor via the `editor` parameter, as shown in the [Checking the state of the editor](#checking-the-state-of-the-editor) example.
:::

The [priority of the properties](#configuring-controls-for-diagram-elements) stays the same as for the arrays of controls: the Editbar applies the configuration of the shape type and ignores the configuration of the group this shape belongs to.

### Step 2. Specifying a function

The function must return an array with the configurations of controls. It is called with the following parameter:

- `object` - an object with the following properties:
    - `item` - the object of the selected Diagram item
    - `editor` - the object of the [Diagram Editor](api/diagram_editor/editor/api_overview.md)

#### Checking the selected item

The `item` parameter allows checking the type and the properties of the selected item. In the example below, the `$shape` function returns the **Position** and **Size** controls for all shapes and adds other controls depending on the properties of the selected shape:

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

The `hasOwnProperty()` method checks whether an item has the specified property. If it does, the function adds the control that renders and modifies this property:

- an item with the `title` property gets the **Input** control
- an item with the `text` property gets the **Textarea** control
- an item with the `img` property gets the **Avatar** control

#### Checking the state of the editor

The `editor` parameter gives access to the state of the whole editor, e.g. to the data and the selection of the Diagram via `editor.diagram`. In the example below, the `$default` function renders the **Grid step** control in the read-only mode when more than one element is selected or the diagram contains no data:

~~~jsx {6-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: ({ editor }) => {
                    const selected = editor.diagram.selection.getIds();
                    // more than one element is selected or the diagram contains no data
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

The [`getIds()`](api/selection/getids_method.md) method of Selection and the [`getLength()`](https://docs.dhtmlx.com/suite/data_collection/api/datacollection_getlength_method/) method of DataCollection check the state of the editor.

### Step 3. Checking when the Editbar is rebuilt

The Editbar calls the function each time it rebuilds its set of controls, namely:

- on selecting a Diagram item
- on unselecting an item or selecting more than one item, when the `$default` configuration is applied
- after loading data into the Diagram or removing all the data

Modifying the properties of the selected item doesn't rebuild the Editbar. In this case the already rendered controls only refresh their values via the [`$setValue`](#service-properties-of-controls) service property. To get a new set of controls, select the item anew, e.g. by selecting another element and then the needed one again.

## Setting the width of the Editbar

The default width of the Editbar is 300px. To change it, use the [`width`](api/diagram_editor/editbar/config/width_property.md) property:

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

Use the [`show`](api/diagram_editor/editbar/config/show_property.md) property to hide the Editbar on initialization of the Diagram Editor and show it later. By default, the Editbar is shown.

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

To style the Editbar, use the [`css`](api/diagram_editor/editbar/config/css_property.md) property. It applies a custom CSS class to the Editbar container.

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

In the above example, the `custom_style` class is added to the Editbar container. The class sets:

- the background color of the Editbar via the `--dhx-background-primary` variable
- the font size of the Editbar via the `--dhx-font-size-large` variable

These are the CSS variables of the DHTMLX [themes](guides/themes.md), so the Editbar follows the colors and sizes of the current theme.
