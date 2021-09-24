---
sidebar_label: Configuration 
title: Diagram Configuration
description: text
---

# Diagram Configuration 

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

{{note In the org and mindmap modes of Diagram, the type of child shapes will be the same as the type of the parent shapes.
}}

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

~~~js
const defaults = {
   // the default configuration for all shapes of the "rectangle" type
	rectangle: {
		fill: "#44B3FC",
		stroke: "#44B3FC"
	},
    // the default configuration for all shapes of the "circle" type
	circle: {
		fill: "#3DA0E3",
		stroke: "#3DA0E3"
	},
    // the default configuration for all shapes of the "endpoint" type
	endpoint: {
		fill: "#307DB0",
		stroke: "#307DB0"
	}
};

const diagram = new dhx.Diagram("diagram", {
	defaults: defaults
});
~~~

{{editor	https://snippet.dhtmlx.com/7bn52dl1	Diagram. Decision tree}}

The **defaults** object contains a number of *key:value* pairs where *key* is a type of a shape and *value* is the default config of the shape.

{{note The *type* and *id* attributes can not be defined in the default configuration of a shape.}}

Check [the full list of configuration properties of a shape](../../../shapes/configuration_properties/).

Positioning Diagram and shapes
--------------------

You can specify the position of a diagram on a page and set margins for shapes inside the [](../../api/diagram/margin_property.md) attribute of the diagram config object.

The margin object contains a set of properties: 

- **itemX** - horizontal space between two shapes
- **itemY** - vertical space between two shapes
- **x** - horizontal space between the start of a diagram and the first item
- **y** - vertical space between the start of a diagram and the first item

~~~js
// setting margins for an org chart
const diagram = new dhx.Diagram("diagram_container", { type: "org",
    margin: {
        x: 20, 
        y: 20,
        itemX: 50,
        itemY: 50
    }
})
~~~

{{editor	https://snippet.dhtmlx.com/bwe9vm6i	Diagram. Margin between shapes}}

Configuring autoplacement for shapes
------------------------------

Starting from v3.0, the DHTMLX Diagram library lets you configure settings for automatically arranging connected shapes of Diagram in the hierarchical structure. You can specify the [](../../api/diagram/autoplacement_property.md) property in the configuration object of Diagram and configure the mode of connecting shapes and distance between unconnected diagrams:

~~~js
const diagram = new dhx.Diagram("container", {
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

For example:

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    scale: 0.7
});
diagram.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/9h89c3gl	Diagram. Scaled Org chart}}

Setting toolbar for items
--------------------------

DHTMLX Diagram allows you to specify a toolbar with icons for Diagram items to simplify interaction with them. You can enable the toolbar via the [](../../api/diagram/toolbar_property.md) option of the diagram configuration object: 

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true,
    toolbar:[{
        id: "download",
        content: "<i class='dxi dxi-download'></i>"
    },
    {
        id: "info",
        content: "<i class='dxi dxi-information-outline'></i>"
    }]
});
~~~

The toolbar is set as an array of icons objects. Each icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the item. The function takes an item object and returns *true*, if the icon will be rendered for this item.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the item.

{{editor	https://snippet.dhtmlx.com/4if395hd	Diagram. Per-shape toolbar}}

Selecting items
-------------

It is possible to activate selection of items in a diagram. You need to make use of the [](../../api/diagram/select_property.md) attribute of the diagram config object:

~~~js 
const diagram = new dhx.Diagram("diagram_container", { 
	type: "org", 
    select: true
});
~~~

{{editor	https://snippet.dhtmlx.com/jyoxn5h7	Diagram. Org chart item selection}}

You can also define the way of processing the behavior of the diagram during selecting/unselecting of items via [the predefined set of events](../../../api/selection/index/#events).



