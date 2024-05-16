---
sidebar_label: Editbar
title: Editor Guides - Editbar
description: You can learn about the Editbar of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar

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
            },
            // ...
        },
        // ...
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
        },
        // ...
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
        },
        // ...
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
        },
        // ...
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
        },
        // ...
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
        },
        // ...
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

## Create and configure custom Editbar controls

You can use the [`controls`](api/diagram_editor/editbar/config/controls_property.md) property of the Editbar view to create a custom control based on [**Basic controls**](api/diagram_editor/editbar/basic_controls_overview.md) and/or [**Complex controls**](api/diagram_editor/editbar/complex_controls_overview.md).

:::warning
We do not recommend you to use a default control type (refer to the [***Basic controls***](api/diagram_editor/editbar/basic_controls_overview.md) and/or [***Complex controls***](api/diagram_editor/editbar/complex_controls_overview.md)) as the name for a custom control. Use the unique name for each custom control to avoid errors!
:::

After creating a custom control, you need to apply it to the needed Diagram element via the [`properties`](api/diagram_editor/editbar/config/properties_property.md) property.

<iframe src="https://snippet.dhtmlx.com/w8mrh3ay?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
