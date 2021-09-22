---
sidebar_label: Configuration 
title: Diagram Configuration
description: text
---

# Diagram Configuration 

DHTMLX Diagram provides a wide range of options for configuration. You can zoom into and out from a diagram, change the type of shapes and their margins, create your own types of shapes,
apply selection, define the size of grid cells and set a toolbar with icons for the shapes.

[Check the list of possible config properties](common_guides/initialization.md#listofproperties).


Setting the default configuration of a shape
-------------------------------------------------
There is a great possibility to escape operating with a big data set while preparing it for loading into the DHTMLX Diagram. You can specify the default configuration for all shapes with the necessary type and, therefore, reduce the amount of records in the data set.


For this purpose, use the api/diagram_defaults_config.md property of the diagram config object:

~~~js
var defaults = {
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

var diagram = new dhx.Diagram("diagram", {
	defaults: defaults /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/7bn52dl1	Diagram. Decision tree}}

The **defaults** object contains a number of *key:value* pairs where *key* is a type of a shape and *value* is the default config of the shape.

{{note The *type* and *id* attributes can not be defined in the default configuration of a shape.}}

See the full lists of configuration properties:

- [for a diagram shape](diagram_guides/shapes_arrows_list.md#shapeattrs)
- [for a group](diagram_guides/shapes_arrows_list.md#groupsconfiguration)
- [for a swimlane](diagram_guides/shapes_arrows_list.md#swimlaneconfiguration) and [its cells](diagram_guides/shapes_arrows_list.md#configurationofaswimlanecell)
- [for an org chart shape](orgchart_guides/orgchart_shapes_types.md#shapeattrs)
- [for a mind map shape](mindmap_guides/mindmap_shapes_connectors.md#configurationoftheshape)


Positioning Diagram and Shapes
--------------------

You can specify the position of a diagram on a page and set margins for shapes inside the api/diagram_margin_config.md attribute of the diagram config object.

The margin object contains a set of properties: 

- **itemX** - horizontal space between two shapes
- **itemY** - vertical space between two shapes
- **x** - horizontal space between the start of a diagram and the first item
- **y** - vertical space between the start of a diagram and the first item

~~~js
// setting margins for an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org",
    margin:{
        x:20, 
        y:20,
        itemX:50,
        itemY:50
    }
})
~~~

{{editor	https://snippet.dhtmlx.com/bwe9vm6i	Diagram. Margin between shapes}}

Configuring Autoplacement
------------------------------

Starting from v3.0, the DHTMLX Diagram library lets you configure settings for automatically arranging connected shapes of Diagram in the hierarchical structure. You can specify the api/diagram_autoplacement_config.md property in the configuration object of Diagram and configure the mode of connecting shapes and distance between unconnected diagrams:

~~~js
var diagram = new dhx.Diagram("container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100
    }
});
~~~

The property can contain two options:

- **mode** - (*string*) optional, the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) optional, sets the distance between unconnected diagrams, "200" by default

{{note The autoplacement will be applied only after the [autoPlace()](api/diagram_autoplace.md) method is used. For more information on how to organize Diagram shapes and connectors in the symmetric order automatically, see the [related](common_guides/manipulating_shapes.md#arrangingshapesautomatically) article. The autoplacement does not work if you use groups or swimlanes.}}

You can find more details about using the **autoplacement** property in Diagram Editor in the [related](diagram_guides/editor_mode.md#configurationproperties) article.




Zooming Diagram
-------------

If necessary, you can scale a diagram to fit your application. It can be done with the help of the api/diagram_scale_config.md option.
By default, its value is set to 1. So, to zoom into a diagram, set the option to a value larger than 1 and to zoom out - smaller than 1, correspondingly.

For example:

~~~js
// zooming an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org", scale:0.7});
diagram.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/9h89c3gl	Diagram. Scaled Org chart}}

Setting Toolbar for Shapes
--------------------------

DHTMLX Diagram allows you to specify a toolbar with icons for Diagram shapes to simplify interaction with shapes. You can enable the toolbar via the 
api/diagram_toolbar_config.md option of the diagram config object: 

~~~js
// setting toolbar for shapes of an org chart
var diagram = new dhx.Diagram("diagram_container", { type:"org", select:true,
    toolbar:[{
        id: "download",
        content:"<i class='dxi dxi-download'></i>"
    },
    {
        id: "info",
        content:"<i class='dxi dxi-information-outline'></i>"
    }]
});
~~~

The toolbar is set as an array of icons objects. Each icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

{{editor	https://snippet.dhtmlx.com/4if395hd	Diagram. Per-shape toolbar}}

Selecting Shapes
-------------

It is possible to activate selection of shapes in a diagram. You need to make use of the api/diagram_select_config.md attribute of the diagram config object:

~~~js
// enabling selection in an org chart 
var diagram = new dhx.Diagram("diagram_container", { 
	type: "org", 
    select: true 		/*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/jyoxn5h7	Diagram. Org chart item selection}}

You can also define the way of processing the behavior of the diagram during selecting/unselecting of shapes via the predefined set of events:

```todo  добавить ссылку
- api/selection/events/diagram_onbeforeselect_event.md
- api/selection/events/diagram_onafterselect_event.md
- api/selection/events/diagram_onafterunselect_event.md
- api/selection/events/diagram_onafterunselect_event.md
```




