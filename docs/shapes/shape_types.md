---
sidebar_label: Shape types
title: Shape Types
description: text
---


# Shape types

Org Chart shapes
---------------

The Org Chart has specific types of shapes. You will find them together with the connectors types available for the Org Chart in this article. 
The article also covers such issues as creating a new type of shapes and adding the Diagram shapes into Org Chart.

There are two types of shapes typical of the Org Chart:

- **"card"** - the default type for an org chart

<img src="type_card.png">

- **"img-card"** - for adding shapes with images. Don't forget to provide images for cards via the **img** attribute of the shape object.

<img src="type_image.png">


Flow chart shapes
---------------------

All possible shapes types that you can use to build your diagram are presented below:<br><br>

<img style="display:block; margin-left:auto;margin-right:auto;" src="shapes_types.png">

{{editor	https://snippet.dhtmlx.com/loz7yh2y	Diagram. Flow-Chart shapes}}

Mind Map shape
--------------

- **"topic"** - the default shape of the mind map

<img src="mindmap.png">

Use the name of the necessary shape as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

~~~js
var data = [
	// shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
    { "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
    { "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
    { "id": "4", "x": 20,  "y": 430, "text": "End 1", "type": "end", "height": 50 },
    { "id": "5", "x": 280, "y": 250, "text": "Extra Step", "type": "process" },
    { "id": "6", "x": 350, "y": 60,  "text": "End 2", "type": "end", "height": 50 }
];
~~~

{{editor	https://snippet.dhtmlx.com/loz7yh2y	Diagram. Flow-Chart shapes}}

Besides, you can create a new type of shapes for Diagram. For more information see the common_guides/configuration.md#creatingcustomshapes article.












Use the name of the necessary shape as a value of the type attribute inside the shape object, while preparing a data set for loading into the diagram.

var data = [
    // shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
    { "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
    { "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
    { "id": "4", "x": 20,  "y": 430, "text": "End 1", "type": "end", "height": 50 },
    { "id": "5", "x": 280, "y": 250, "text": "Extra Step", "type": "process" },
    { "id": "6", "x": 350, "y": 60,  "text": "End 2", "type": "end", "height": 50 }
];

Setting Type of Shape
----------------------

You can set the default type for all the shapes via the api/diagram_defaultshapetype_config.md attribute of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "rectangle"  		/*!*/
});
diagram.data.parse(data);
~~~

See the full lists of shapes types of the DHTMLX Diagram:

- [Diagram shapes](diagram_guides/shapes_arrows_list.md#shapestypes)
- [Org Chart shapes](orgchart_guides/orgchart_shapes_types.md#shapestypes)
- [Mind Map shapes](mindmap_guides/mindmap_shapes_connectors.md)

###Setting individual type for a shape

It is also possible to specify individual types for separate shapes via the related **type** attribute of the data item object.

~~~js
// data to load
var data = [
    // shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
    { "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
    { "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
 
    // connectors
    { "id": "1-2", "from": "1", "to": "2" },
    { "id": "2-3", "from": "2", "to": "3" }
]
 
// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

Besides, you can create your own type of a shape. For more information see the [Creating custom shapes](common_guides/configuration.md#creatingcustomshapes) article.

Setting the default shape type (default mode)
--------------------------------------

You can set a common type for all the shapes of a diagram via the api/diagram_defaultshapetype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "rectangle" /*!*/
});
~~~

This value is applied, if the shape config doesn't contain the "type" property.

### Setting type for a separate shape

Use the name of the necessary type as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

~~~js
// data to load
var data = [
	// shapes
	{ "id": "1", "x": 100, "y": 40, "text": "Start", "type": "start", "height": 50 },
	{ "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
	{ "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
    // more shape objects
    
    // connectors
    { "id": "1-2", "from": "1", "to": "2" },
	{ "id": "2-3", "from": "2", "to": "3" },
    // more connector objects
];

// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~


Setting the default shape type (org chart mode)
------------------------------------------------------

You can set a common type for all the shapes of the Org Chart via the api/diagram_defaultshapetype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    defaultShapeType: "img-card"        /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/qnx3ekin	Diagram. Org chart with images}}

This value is applied, if the shape config doesn't contain the "type" property.

{{note The type of child shapes will be the same as the type of the parent shapes.}} ```todo Перенести пометку в сэмпл```

### Setting type for a separate shape

Use the name of the necessary type as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the org chart](common_guides/loading_data.md#preparingdatatoload).
In the following example all the shapes have the default "card" type, except for the item with the id "1", which has the "img-card" type:

~~~js
// data to load
var data = [
	{
		"id": "1",
		"text": "Chairman & CEO",
		"title": "Henry Bennett",
        "type":"img-card", 						 /*!*/
		"img": "../common/img/avatar-1.png"  		 /*!*/  
	},
	{
		"id": "2",
		"text": "Manager",
		"title": "Mildred Kim",
	},
	{
		"id": "3",
		"text": "Technical Director",
		"title": "Jerry Wagner",
	}
    // more shape objects
]

// initializing an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org" });
diagram.data.parse(data);
~~~


## Custom Shape Configuration

You may want to [create a mind map with custom shapes](mindmap_guides/mindmap_shapes_connectors.md#creatingcustomshape). In this case, besides the [standard options](#configurationofshapeobjects) of the "topic"- type shape, you can set custom attributes for your custom shapes when preparing a data set.   

~~~js
var customShapeData = [
    {
		"id": "main",
		"title": "Main page",
		"cr": 33,
		"br": 12,
		"conversion": 25,
		"view": "../img_01.png",
		"info": "Develop enterprise web and mobile applications with rich interface",
		"link": "https://dhtmlx.com/"
    },
];
~~~

In the code snippet above, all properties are custom except for "id". 

{{note Overriding of the internal properties of the mind map shape is forbidden as it causes the incorrect work of the mind map and its editor.}}

{{note The [editable](mindmap_guides/mindmap_shapes_connectors.md#configurationoftheshape) property of a shape is not available for a custom shape.}}

For details about interaction between custom properties and the Mind Map Editor, see the [Configuring Right Panel](mindmap_guides/editor_mode.md) article.
 
Creating Custom Shapes
-----------------------------

The dhtmlxDiagram library provides you with a set of default types of shapes that you can use to build your diagram, org chart, or mind map.

But you can create custom shapes via the [addShape](api/diagram_addshape.md) method in order to change the look and feel of the diagram according to your needs.

<img style="margin: 20px auto 20px auto;display: block;" src="custom_network_shape.png">

{{editor	https://snippet.dhtmlx.com/u1xqyo9w	Diagram. Network diagram}}

Let's consider a simple example of adding a custom shape into your Diagram:

1) First, you need to initialize a diagram:

~~~js
// initialize Diagram
var diagram = new dhx.Diagram("diagram");
~~~ 

1) Then, using the **addShape** method you need to create a custom shape, i.e. specify the unique name for the type of this shape and define a template for your custom shape: 

~~~js
diagram.addShape("networkCard", {
    template: config => (
        `<section class='network_template'>
            <img src='${config.img}' alt='${config.text}'></img>
            <span>${config.text}</span>
            <span>${config.ip}</span>
        </section>`
    ),
	defaults: {
		width: 160,
		height: 160,
		img: "../network_image/desktop.svg",
		text: "Network Card",
		ip: "138.68.41.78"
    }
});
~~~

You can also define the default configuration for each shape with the custom type with the help of the **defaults** attribute. <br>In the code example above, we've defined the default *width, height, img, text and ip* values for all shapes of the *networkCard* type. 

{{note **Note**, that all HTML and SVG tags must be closed in the template. 

~~~js
For example, an <img src="" alt=""> tag should look like this: 
<img src="" alt=""></img>
~~~ 

}}

3) After that, set the new custom type for a shape via the **type** attribute of the configuration object of the shape while preparing a data set for loading into the diagram:

~~~js
var networkDiagram = [
    {
        "id": 1,
        "type": "networkCard", /*!*/
        "x": 0,
        "y": 0,
        "text": "Remote expert desktop",
        "ip": "192.168.32.2"
    },
    // more options
]
~~~

To override values of the *text and ip* attributes set in the default config, we've specified the same properties with the new values in the data set. 
Thus, the *"Network Card"* text value will be replaced with the *"Remote expert desktop"* one and the *"138.68.41.78"* ip value will be replaced with *"192.168.32.2"*. 

**Note**, that the *ip* property is custom. For more details, see the [Custom properties of a shape object](diagram_guides/shapes_arrows_list.md#customprop) article.

4) Finally, you need to load the prepared data set into the Diagram:

~~~js
diagram.data.parse(networkDiagram);
~~~

{{note The functionality is also available in the editor mode.}}

{{note You can find out more about the **addShape** method in the [related article](api/diagram_addshape.md).}}

Adding Event Handlers for the Custom Shape
----------------------------

Starting with v3.1, you can add custom event handlers to the custom shapes via the **eventHandlers** attribute of the [addShape()](api/diagram_addshape.md) method:

~~~js
const diagram = new dhx.Diagram("diagram", {
    type: "mindmap", // or type: "default", or type: "org"
    defaultShapeType: "flowView",
    typeConfig: {
        side: {
            right: ["suite"]
        }
    },
});

function template({ title, view, cr, br, conversion, link }) {
    ...
}

function openModalInfo(title, text) {
     ...
}

diagram.addShape("template", {
	template: template,
	defaults: {
		height: 190,
		width: 97
	},
	eventHandlers: { /*!*/
        onclick: { /*!*/
            info: function(event, item) { /*!*/
                openModalInfo(item.title, item.info); /*!*/
            } /*!*/
        } /*!*/
    }/*!*/
});

diagram.data.load("../dataset.json");
~~~

{{editor    https://snippet.dhtmlx.com/do1jwmw1	Diagram. Site map and user flow example with custom shapes}}

The **eventHandlers** object includes a set of *key:value* pairs, where:

- *key* - the name of the event. Note, that at the beginning of the event name the **'on'** prefix is used (onclick, onmouseover).
- *value* - an object that contains a *key:value* pair, where *key* is the css class name that the handler will be applied to and *value* is a function that takes two parameters:
	- **event** - an event object
	- **shape** - the shape object

We recommend that you use different css classes for different custom shapes.

{{note The functionality is also available in the editor mode.}}


Creating Custom Shape (mindmap mode)
---------------------------------------

It is possible to customize a mind map. For this, you need to create a new type of a shape via the [addShape()](api/diagram_addshape.md) method and set the new shape type as the default type for the mind map shapes. For instance:

~~~js
const diagram = new dhx.Diagram("diagram", {
    type: "mindmap",
    // specifies the new shape type as a type for all shapes
    defaultShapeType: "flowView",
    typeConfig: {
        side: {
            right: ["suite"]
        }
    },
});

function template({ title, view, cr, br, conversion, link }){
    ...
}

function openModalInfo(title, text) {
     ...
}

diagram.addShape("flowView", {
    template: template,
    defaults: {
        width: 190,
        height: 97,
    },
    eventHandlers: {
        onclick: {
            info: function(event, item) {
                openModalInfo(item.title, item.info);
            }
        }
    }
});


const customShape = [
    {
		"id": "main",
		"title": "Main page",
		"cr": 33,
		"br": 12,
		"conversion": 25,
		"view": "../img_01.png",
		"info": "Develop enterprise web and mobile applications with rich interface",
		"link": "https://dhtmlx.com/"
    },
    {
		"id": "gantt",
		"title": "DHTMLX Gantt Chart",
		"cr": 45,
		"br": 10,
		"conversion": 25,
		"view": "../img_02.png",
		"info": "DHTMLX Gantt is a full-featured Gantt chart for cross-browser app.",
		"link": "https://dhtmlx.com/docs/products/dhtmlxGantt/",
		"parent": "main"
    },
    // more options
];

diagram.data.parse(customShape);
~~~

{{editor    https://snippet.dhtmlx.com/do1jwmw1	Diagram. Site map and user flow example with custom shapes}}

For more details on creating a custom shape, see the [Creating Custom Shapes](common_guides/configuration.md#creatingcustomshapes) article.



Arrangement of Shapes
--------------------

By default. the arrangement of the child shapes relative to the root shape is defined automatically by the main algorithm. 
But you can set the desired direction of the child shapes on initialization of the Mind Map via the [typeConfig](api/diagram_typeconfig_config.md) option. 

<img style="display:block; margin-left:auto;margin-right:auto;" src="mindmap_direction.png">

{{editor    https://snippet.dhtmlx.com/pzllujx3	Mind Map. Direction of the shapes}}

The [typeConfig](api/diagram_typeconfig_config.md) configuration option of the diagram object allows you:

- to set the child shapes of the mind map to the right of the root shape via the **direction: "right"** attribute of [typeConfig](api/diagram_typeconfig_config.md):

~~~js
const diagram = new dhx.Diagram("diagram", { 
    type: "mindmap",
    typeConfig: {
        direction: "right",
    }
});
diagram.data.parse(data);
~~~

- to set the child shapes of the mind map to the left of the root shape via the **direction: "left"** attribute of [typeConfig](api/diagram_typeconfig_config.md):

~~~js
const diagram = new dhx.Diagram("diagram", { 
    type: "mindmap",
    typeConfig: {
        direction: "left",
    }
});
diagram.data.parse(data);
~~~

- to define the mandatory direction for the specific child shapes via the **side** attribute of [typeConfig](api/diagram_typeconfig_config.md). The attribute is an object that contains a set of *key:value* pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes.

~~~js
const diagram = new dhx.Diagram("container", { 
    type: "mindmap",
    typeConfig: {
        side: {
            left: ["2", "3"],
            right: ["4", "5"],
        }
    }
});
diagram.data.parse(data);
~~~

The other child shapes that are not set in the side option will be arranged automatically according to the main algorithm.

{{note The **typeConfig** configuration option is not available in Mind Map Editor.}}