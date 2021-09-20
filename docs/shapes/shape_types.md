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

Adding a custom shape
-----------------------------

To create a custom shape, you need to use the [](../api/diagram/addshape_method.md) method.

Let's imagine, you want to create a new `networkCard` shape which should render an image, text, and IP address.

<iframe src="https://snippet.dhtmlx.com/u1xqyo9w?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

To do that, you need to take the following two steps:

1\. Set the unique name for the type of a custom shape and specify a template for rendering the shape in the diagram via the [](../api/diagram/addshape_method.md) method:

~~~js
diagram.addShape("networkCard", {
    template: ({ img, text, ip }) => (`
        <section class="dhx-diagram-demo_network-card">
            <img src="${img}" alt="${text}"></img>
            <span>${text}</span>
            <span>${ip}</span>
        </section>
    `),
	defaults: {
		width: 160,
		height: 160,
		img: path.network + "desktop.svg",
		text: "Network Card",
		ip: "138.68.41.78"
    }
});
~~~

In the code example above, we've also defined the default *width, height, img, text and ip* values for all shapes of the *networkCard* type via the **defaults** attribute.

{{note **Note**, that all HTML and SVG tags must be closed in the template. 

For example, an `<img src="" alt="">` tag should look like this: `<img src="" alt=""></img>`.

}}

2\. Use the unique name of the new shape type as a value of the **type** attribute inside the shape object while preparing a data set for loading into the diagram:

~~~js {4}
const networkDiagram = [
    {
        "id": 1,
        "type": "networkCard",
        "x": 0,
        "y": 380,
        // redefine the default values of the text and ip attributes
        "text": "Remote expert desktop",
        "ip": "192.168.32.2"
    },
    // more options
]
~~~

To override the default values of the *text* and *ip* attributes, we've specified the same properties with the new values in the configuration of a shape. 
Thus, the *"Network Card"* text value will be replaced with the *"Remote expert desktop"* one and the *"138.68.41.78"* ip value will be replaced with *"192.168.32.2"*. 

### Configuring custom shapes

Except for the configuration properties provided by DHTMLX Diagram, you can add [your own properties](shapes/configuration_properties.md/#custom-properties-of-a-shape-object) into the configuration object of a custom shape:

~~~js {8}
const customShapeData = [
    {
        "id": 1,
        "type": "networkCard",
        "x": 0,
        "y": 380,
        "text": "Remote expert desktop",
        "ip": "192.168.32.2"
    },
];
~~~

The "ip" property is custom. 

{{note Overriding the internal properties of the diagram shape is forbidden as it causes the incorrect work of the diagram and its editor.}}

{{note The **[editable](../configuration_properties/)** property of a shape is not available for a custom shape.}}

## Event handlers for custom shapes

You may need to add handlers to the events occurred when the user interacts with custom shapes. It can be done by adding event handlers to HTML elements of a custom template of a shape via the **eventHandlers** attribute of the [](../api/diagram/addshape_method.md) method. 

In the example below, a context menu will be opened after the user clicks on the icon with the **toggle_container** class:

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

The **eventHandlers** object includes a set of *key:value* pairs, where:

- *key* - the name of the event. Note, that at the beginning of the event name the **'on'** prefix is used (onclick, onmouseover).
- *value* - an object that contains a *key:value* pair, where *key* is the css class name that the handler will be applied to and *value* is a function that takes two parameters:
	- **event** - an event object
	- **shape** - the shape object

**We recommend that you use different css classes for different custom shapes.**

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

