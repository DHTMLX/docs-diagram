---
sidebar_label: Shape types
title: Shape Types
description: text
---

# Shape types

## Default Diagram shapes

The DHTMLX Diagram library provides you with a set of default types of shapes that you can use to build your diagram. The default shapes include:

- a set of the flow chart shapes:

<iframe src="https://snippet.dhtmlx.com/loz7yh2y?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

Tip: Use the name of the necessary shape as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

- the `"card"` type that is the default type of shapes in the "org chart" mode of Diagram:

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

- the `"img-card"` type that can be used for adding shapes with images. Don't forget to provide images for cards via the **img** attribute of the shape object.

<iframe src="https://snippet.dhtmlx.com/qnx3ekin?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

- the `"topic"` type that is the default type of shapes in the "mindmap" mode of Diagram.

<iframe src="https://snippet.dhtmlx.com/3igf1gd5?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="350"></iframe>

{{note Any of the above shapes can be added into the diagram of any mode ("default", "org", or "mindmap" one). }}

## Configuring shapes

Diagram shapes are configured when you create a data set for loading into the diagram. You can find some examples of data sets in the [Preparing data to load](../../guides/loading_data/#preparing-data-to-load) article.

The list of configuration properties of a shape object is given in the [Shape properties](shapes/configuration_properties.md) article.

Adding a custom shape
-----------------------------

```

To create a new type of a shape, you need to use the [](../api/diagram/addshape_method.md) method. 

<iframe src="https://snippet.dhtmlx.com/u1xqyo9w?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

Let's consider a simple example of adding a custom shape into your Diagram:

1) First, you need to initialize a diagram:

~~~js
// initialize Diagram
var diagram = new dhx.Diagram("diagram");
~~~ 

2) Then, using the **addShape** method you need to create a custom shape, i.e. specify the unique name for the type of this shape and define a template for your custom shape: 

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

```

### Custom properties of a shape object



 set custom options as for a custom shape of a diagram as for a custom shape of a diagram editor. 

~~~js
var customShapeData = [
    {
        "id": "1",
        "type": "template",
        "title": "Milena Hunter",
        "post": "Attending physician", /*!*/
        "phone": "(124) 622-1256", /*!*/
        "email": "mhunter@gmail.com", /*!*/
        "img": "../avatar-25.jpg",

        "height": 115, "width": 330
    }
];
~~~

The "post", "phone" and "email" properties are custom. 

{{note Overriding the internal properties of the diagram shape is forbidden as it causes the incorrect work of the diagram and its editor.}}

{{note The [editable](diagram_guides/shapes_arrows_list.md#shapeattrs) property of a shape is not available for a custom shape.}}

For details about interaction between custom properties and the Diagram Editor, see the [Configuring Right Panel](diagram_guides/editor_mode.md) article.

### Custom properties of a shape object

Starting from v3.0, it is also possible to set custom options as for a custom shape of an org chart as for a custom shape of an org chart editor. 

~~~js
var customShapeData = [
    {
        "id": "1",
        "type": "template",
        "title": "Milena Hunter",
        "post": "Attending physician", /*!*/
        "phone": "(124) 622-1256", /*!*/
        "email": "mhunter@gmail.com", /*!*/
        "img": "../avatar-25.jpg",

        "height": 115, "width": 330
    }
];
~~~

The "post", "phone" and "email" properties are custom. 

{{note Overriding of the internal properties of the org chart shape is forbidden as it causes the incorrect work of the org chart and its editor.}}

{{note The [editable](orgchart_guides/orgchart_shapes_types.md#shapeattrs) property of a shape is not available for a custom shape.}}

For details about interaction between custom properties and the Org Chart Editor, see the [Configuring Right Panel](orgchart_guides/editor_mode.md) article.




~~~js
const data = [
	// shapes
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" },
    { id: "2.1", text: "Marketer", parent: "2" },
    { id: "2.2", text: "Team Lead ", parent: "2" },
];

var diagram = new dhx.Diagram("diagram", {
	type: "mindmap",
});
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

### Adding event handlers for the custom shape

```todo
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

{{editor    https://snippet.dhtmlx.com/do1jwmw1	Diagram. Site map and user flow example with custom shapes}}

For more details on creating a custom shape, see the [Creating Custom Shapes](common_guides/configuration.md#creatingcustomshapes) article.

```




Setting the type of a shape
----------------------

### Setting the default shape type

You can set the default type for all the shapes via the [](../api/diagram/defaultshapetype_property.md) attribute of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap" 
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

This value is applied, if the configuration object of the shape doesn't contain the `type` property.

{{note In the "org" or "mindmap" mode of Diagram, the type of child shapes will be the same as the type of the parent shapes.
}}

### Setting individual type for a shape

It is also possible to specify individual types for separate shapes via the related `type` attribute of the data item object.

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

{{note To configure the shape, you should apply the properties peculiar to the type that is set for the shape. <br>See [the full list of configuration properties of a shape object](shapes/configuration_properties.md).

**Related samples**: [Diagram. Mixed](https://snippet.dhtmlx.com/15acqc24) and [Diagram. Org chart. Mixed.](https://snippet.dhtmlx.com/yd6l6grr)
}}

Arrangement of shapes in the mindmap mode of Diagram
--------------------

In the `mindmap` mode of Diagram, the arrangement of child shapes relative to the root shape is defined automatically by the main algorithm. 
To change the default direction of the child shapes, use the [](../api/diagram/typeconfig_property.md) configuration property on initialization of the diagram.

{{note The **typeConfig** configuration property is not available in Diagram Editor.}}

The property allows you:
- [to set the direction for all child shapes at once](#setting-direction-for-all-child-shapes)
- [to specify individual direction for specific child shapes](#setting-direction-for-individual-child-shape)

### Setting direction for all child shapes

To set the child shapes to the right/left of the root shape, use the **direction** attribute of the [](../api/diagram/typeconfig_property.md) property:

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

### Setting direction for individual child shape

You can set the mandatory direction for specific child shapes via the **side** attribute of the [](../api/diagram/typeconfig_property.md) property. The attribute is an object that contains a set of *key:value* pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes.

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

The other child shapes that are not set in the side option will be arranged automatically according to the main algorithm.

