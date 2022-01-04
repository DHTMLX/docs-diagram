---
sidebar_label: Configuration 
title: Diagram Configuration
description: You can learn about the Diagram Configuration in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Diagram configuration

DHTMLX Diagram provides a wide range of options for configuration. You can zoom into and out a diagram, set the default type of shapes and lines, set margins between shapes, apply selection, and set a toolbar with icons for the shapes.

### Setting the default shape type

It is also possible to set the default type for all the shapes via the [](../../api/diagram/defaultshapetype_property.md) attribute of the diagram config object:

~~~js
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap" 
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

This value will be applied, if the configuration object of the shape doesn't contain the `type` property.

By default, the default types for all shapes are:

- *"rectangle"* - for the diagram in the default mode;
- *"card"*  - for the diagram in the default or org chart mode;
- *"topic"* - for the diagram in the mindmap mode.

## Setting the default line type

You can set a common type for all the connector lines of the diagram via the [](../../api/diagram/defaultlinktype_property.md) property of the diagram config object:

~~~js
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    defaultLinkType: "dash" // "dash" | "line"
});
diagram.data.parse(data);
~~~

This value is applied, if the line object doesn't contain the **type** property.

Setting the default configuration of a shape
-------------------------------------------------

There is a great possibility to escape operating with a big data set while preparing it for loading into the diagram. You can specify the default configuration for all shapes of the necessary type and, therefore, reduce the amount of records in your code.

For this purpose, use the [](../../api/diagram/defaults_property.md) property of the diagram configuration object:

<iframe src="https://snippet.dhtmlx.com/7bn52dl1?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

The **defaults** object contains a number of *key:value* pairs where *key* is a type of a shape and *value* is the default config of the shape.

{{note The *type* and *id* attributes can not be defined in the default configuration of a shape.}}

Check [the full list of configuration properties of a shape](../../../shapes/configuration_properties/).

Arranging shapes in the mindmap mode of Diagram
--------------------

In the mindmap mode of Diagram, the arrangement of child shapes relative to the root shape is defined automatically by the main algorithm. 
To change the default direction of the child shapes, use the [](../../api/diagram/typeconfig_property.md) configuration property on initialization of the diagram.

{{note The **typeConfig** configuration property is not available in Diagram Editor.}}

The property allows you:

- [to set the direction for all child shapes at once](#setting-direction-for-all-child-shapes);
- [to specify individual direction for specific child shapes](#setting-direction-for-individual-child-shape).

### Setting direction for all child shapes

To set the child shapes to the right/left of the root shape, use the **direction** attribute of the [](../../api/diagram/typeconfig_property.md) property:

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

### Setting direction for individual child shape

You can set the mandatory direction for specific child shapes via the **side** attribute of the [](../../api/diagram/typeconfig_property.md) property. The attribute is an object that contains a set of *key:value* pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes.

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

The other child shapes that are not set in the side option will be arranged automatically according to the main algorithm.

Positioning Diagram and shapes
--------------------

You can specify the position of a diagram on a page and set margins for shapes inside the [](../../api/diagram/margin_property.md) attribute of the diagram configuration object:

<iframe src="https://snippet.dhtmlx.com/bwe9vm6i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

Configuring autoplacement for shapes
------------------------------

Starting from v3.0, the DHTMLX Diagram library lets you configure settings for automatically arranging connected shapes of Diagram in the hierarchical structure. You can specify the [](../../api/diagram/autoplacement_property.md) property in the configuration object of Diagram and configure the mode of connecting shapes and distance between unconnected diagrams:

~~~js
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100
    }
});
diagram.autoPlace();
~~~

The property can contain two options:

- **mode** - (*string*) optional, the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) optional, sets the distance between unconnected diagrams, "200" by default

{{note The autoplacement will be applied only after the [](../../api/diagram/autoplace_method.md) method is applied. The autoplacement does not work if you use groups or swimlanes.}}

Zooming Diagram
-------------

If necessary, you can scale a diagram to fit your application. It can be done with the help of the [](../../api/diagram/scale_property.md) option.
By default, its value is set to 1. So, to zoom into a diagram, set the option to a value larger than 1 and to zoom out - smaller than 1, correspondingly.

<iframe src="https://snippet.dhtmlx.com/9h89c3gl?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

Setting toolbar for items
--------------------------

DHTMLX Diagram allows you to specify a toolbar with icons for Diagram items to simplify interaction with them. You can enable the toolbar via the [](../../api/diagram/toolbar_property.md) option of the diagram configuration object: 

<iframe src="https://snippet.dhtmlx.com/4if395hd?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

Selecting items
-------------

It is possible to activate selection of items in a diagram. You need to make use of the [](../../api/diagram/select_property.md) attribute of the diagram config object.

### Example in the org chart mode

<iframe src="https://snippet.dhtmlx.com/jyoxn5h7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

### Example in the default mode

<iframe src="https://snippet.dhtmlx.com/tcny4obw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

{{note [The predefined set of events](../../../api/selection/#events) of the selection object can help you to define the way of processing the behavior of the diagram during selecting/unselecting items.}}