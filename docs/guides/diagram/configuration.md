---
sidebar_label: Configuration 
title: Diagram Configuration
description: You can learn about the Diagram Configuration in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Diagram configuration

DHTMLX Diagram provides a wide range of options for configuration. You can change the scale of a diagram, set the default type of shapes and lines, set margins between shapes, apply selection, and set a toolbar with icons for the shapes.

### Setting the Diagram mode

There are the following Diagram modes you can choose from: **"default"**, **"org"**, **"mindmap"**, **"pert"**. Their detailed description is given in the [Diagram overview](/diagram) article. You can specify the necessary type via the [type](/api/diagram/type_property/) configuration option, as follows:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // `type: "org"` | `type: "mindmap"` | `type: "pert"`
});
diagram.data.parse(data);
~~~

### Setting the default shape type

It is possible to set the default type for all the shapes via the [](../../api/diagram/defaultshapetype_property.md) attribute of the diagram configuration object:

~~~jsx {3}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap" 
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

This value will be applied, if the configuration object of the shape doesn't contain the `type` property.

The default types of shapes are:

- *"rectangle"* - for the diagram in the default mode
- *"card"*  - for the diagram in the default mode or the org chart mode
- *"topic"* - for the diagram in the mindmap mode
- *"task"* - for the diagram in the PERT mode

## Setting the default line type

You can set a common type for all the connector lines of the diagram via the `lineType` parameter of the [](../../api/diagram/lineconfig_property.md) property of the diagram configuration object:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

This value is applied, if the line object doesn't contain the `type` property.

## Setting the default configuration of a shape

There is a great possibility to escape operating with a big data set while preparing it for loading into the diagram. You can specify the default configuration for all shapes and lines of the necessary types and, therefore, reduce the amount of records in your code.

For this purpose, use the [](../../api/diagram/defaults_property.md) property of the diagram configuration object:

<iframe src="https://snippet.dhtmlx.com/7bn52dl1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

The `defaults` object contains a number of `key:value` pairs where the *key* is the type of a shape or line and the *value* is the default config of the shape or line correspondingly.

:::note
The `type` and `id` attributes can not be defined in the default configuration of a shape/line
:::

Check the full list of configuration properties of a [shape](../../../shapes/configuration_properties/) and [line](../../../lines/configuration_properties/).

## Arranging shapes in the mindmap mode of Diagram

In the mindmap mode of Diagram, the arrangement of child shapes relative to the root shape is defined automatically by the main algorithm.
To change the default direction of the child shapes, use the [](../../api/diagram/typeconfig_property.md) configuration property on initialization of the diagram.

:::note
The `typeConfig` configuration property is not available in the Diagram Editor
:::

The property allows you to:

- [set the direction for all child shapes at once](#setting-direction-for-all-child-shapes)
- [specify individual direction for specific child shapes](#setting-direction-for-individual-child-shape)

### Setting direction for all child shapes

To set the child shapes to the right/left of the root shape, use the `direction` attribute of the [](../../api/diagram/typeconfig_property.md) property:

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Setting direction for individual child shape

You can set the mandatory direction for specific child shapes via the `side` attribute of the [](../../api/diagram/typeconfig_property.md) property. The attribute is an object that contains a set of `key:value` pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes.

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Other child shapes that are not set in the side option will be arranged automatically according to the main algorithm.

## Setting date format in the PERT mode of Diagram

In the PERT mode of Diagram, you can specify the necessary format of rendering dates in the shapes of the **task** type. For this, use the `dateFormat` attribute of the [](../../api/diagram/typeconfig_property.md) property:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

## Positioning Diagram and shapes

You can specify the position of a diagram on a page and set margins for shapes inside the [](../../api/diagram/margin_property.md) attribute of the diagram configuration object:

<iframe src="https://snippet.dhtmlx.com/bwe9vm6i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Configuring autoplacement for shapes

The DHTMLX Diagram library lets you configure settings for arranging connected shapes of Diagram in the hierarchical structure automatically. You can specify the [](../../api/diagram/autoplacement_property.md) property in the configuration object of Diagram and configure the mode of connecting shapes and distance between unconnected diagrams:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100,
        placeMode: "radial"
    }
});
diagram.autoPlace();
~~~

The property can contain three options:

- **mode** - (*string*) optional, the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) optional, sets the distance between unconnected diagrams, "200" by default
- **placeMode** - (*string*) sets the mode of placement of shapes, "orthogonal" (by default) or "radial"

:::note
The autoplacement will be applied only after the [](../../api/diagram/autoplace_method.md) method is applied. The autoplacement does not work if you use groups or swimlanes.
:::

## Adjusting the Diagram scale

If necessary, you can scale a diagram to fit your application. It can be done with the help of the [](../../api/diagram/scale_property.md) option.
By default, its value is set to 1. So, to zoom in on a diagram, set the option to a value larger than 1 and to zoom out - smaller than 1, correspondingly.

<iframe src="https://snippet.dhtmlx.com/9h89c3gl?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Setting toolbar for shapes

DHTMLX Diagram allows you to specify a toolbar with icons for Diagram shapes to simplify interaction with them. You can enable the shape toolbar via the [](../../api/diagram/toolbar_property.md) option of the diagram configuration object:

<iframe src="https://snippet.dhtmlx.com/4if395hd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Enabling items selection

It is possible to activate selection of items in a diagram. You need to make use of the [](../../api/diagram/select_property.md) attribute of the diagram configuration object. Once you've enabled selection in a diagram, you can make use of the Selection object API to [work with the items selection](/guides/manipulating_items/#selecting-items).

:::note
[The predefined set of events](../../../api/selection/#events) of the selection object can help you to define the way of processing the behavior of the diagram during selecting/unselecting items
:::

<iframe src="https://snippet.dhtmlx.com/jyoxn5h7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
