Mind Map Shapes and Connectors
=====================

In order to [load data](common_guides/loading_data.md) to a Mind Map, you need to prepare an appropriate data set in the JSON format which contains a set of shapes and, optionally, connectors objects. This article focuses on configuration of shapes and connectors available for a Mind Map. In this article you will also find the ways of [connecting shapes](#connectionsbetweenshapes).

Additionally, the article discusses adding different types of shapes, such as custom shapes or shapes specific to Diagram and Org Chart, into Mind Map.  


## Configuration of the shape 

There is one shape typical of the Mind Map:

- **"topic"** - the default shape of the mind map

<img src="mindmap.png">


### Properties of a shape object

The shapes of Mind Map are configured automatically. You can set the following attributes for a shape of a mind map:

- **id** - (*string|number*) the unique id of a shape;
- **text** - (*string|string[]*) the text to be rendered in a shape. The property can be set as an array of string values while [preparing a data set for a **custom shape** only](common_guides/configuration.md#creatingcustomshapes);
- **editable** - (*boolean*) enables/disables the ability to edit the text of the shape by double-clicking on the shape; *true* by default;
- **parent** - (*string|number*) the id of the parent shape;
- **type** - (*string*) the type of the shape ("topic", by default)
- **dx** - (*number*) the left offset of the shape;
- **dy** - (*number*) the top offset of the shape;
- **height** - (*number*) the height of a shape;
- **width** - (*number*) the width of a shape;
- **fixed** - (*boolean*) enables/disables movement and resizing of a shape, *false* by default;
- **open** - (*boolean*) defines, whether the child items of the current shape will be shown. *True* by default;
- **openDir** - (*object*) shows/hides the child items of the parent shape. The object takes two attributes:
    - **left** - (*boolean*) -  shows/hides the child items to the left of the parent shape
    - **right** - (*boolean*) - shows/hides the child items to the right of the parent shape

~~~js
var data = [
    {
        "id": "main", "text": "main",
        "openDir": {
            left: true,
            right: false,
        }
    },
    { "id": "2", "text": "2", "parent": "main" },
    { "id": "3", "text": "3", "parent": "main" }
];
~~~

- **hidden** - (*boolean*) defines, whether a shape will be hidden;
- **css** - (*string*) the name of the CSS class that should be applied to the shape;
- **fill** - (*string*) the color of the shape;
- **stroke** - (*string*) the color of the shape outline;
- **strokeWidth** - (*number*) the width of the shape outline, 1 by default;
- **strokeType** - (*string*) the type of the stroke outline, "line" (default), "dash" for a dashed line;
- **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
- **fontStyle** - (*string*) the style of the text font, can be "normal" (default), "italic" or "oblique";
- **fontWeight** - (*string*) the text font weight, possible values are: "normal" (default), "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font;
- **fontSize** - (*number*) - the size of the font in pixels, 14 by default;
- **textAlign** - (*string*) - the alignment of text in a shape:"left","center"(default),"right";
- **textVerticalAlign** - (*string*) - the vertical alignment of text in a shape:"top","center"(default),"bottom";
- **lineHeight** - (*number*) the height of a line, 14 by default.

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

## Connections between shapes

<img style="display:block; margin-left:auto;margin-right:auto;" src="connector_mindmap.png">

To connect shapes in the mind map, you can apply one of the following two ways:

- **using the "parent attribute"**

You can specify the **parent** property in the configuration object of the shape and set the id of its parent shape as the value:

~~~js
var data = [
	// shapes
	{ id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" }
];
~~~

In this case, all the connectors will have the same type. 

- **using connector objects**

This way allows you to define the look of the connectors because you can set the type of the connector line in the configuration of the connector object. The object can have the following properties:

- **id** - the unique id of the connector;
- **from** - the id of the parent shape;
- **to** - the id of the child shape;
- **type** - optional, the type of the connector:"line" (default) or "dash".

~~~js
var data = [
	// shapes
	{ id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager" },
    { id: "3", text: "Technical Director" },
    { id: "4", text: "Manager" },
    { id: "5", text: "Technical Director" },
    // connectors
    { "id": "1-2", "from": "1", "to": "2", "type": "dash" },
    { "id": "1-3", "from": "1", "to": "3", "type": "dash" },
	{ "id": "1-4", "from": "1", "to": "4", "type": "line" },
    { "id": "1-5", "from": "1", "to": "5", "type": "line" },
];
~~~

### Setting the default connector type

You can also set a common type for all the connectors of the Mind Map via the [defaultLinkType](api/diagram_defaultlinktype_config.md) property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    type: "mindmap", 
    defaultLinkType:"line"        
});
~~~

This value is applied, if the connector config doesn't contain the "type" property.

To change the type of a separate connector, just use the **type** attribute of the connector object:

~~~js
var data = [
    { "id": "1-2", "from": "1", "to": "2", "type": "dash" },
    { "id": "1-3", "from": "1", "to": "3", "type": "dash" },
	{ "id": "1-4", "from": "1", "to": "4" },
    { "id": "1-5", "from": "1", "to": "5" },
];
~~~

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

Mixed shapes
----------------

By default, all shapes of the mind map have the ["topic" type](api/diagram_defaultshapetype_config.md). But there is the ability to add any other types of shapes (for instance, [Diagram shapes](diagram_guides/shapes_arrows_list.md), or [Org Chart shapes](orgchart_guides/orgchart_shapes_types.md)) into Mind Map.

<img style="display:block; margin-left:auto;margin-right:auto;" src="mixed_mindmap.png">

To do that, you just need to set the individual type for a separate shape via the **type** attribute of the shape object. To configure the shape, you can apply the attributes peculiar to the type that is set for the shape. 

~~~js
const data = [
	// create an "img-card" shape of Org Chart with the related configuration
    { id: "1", text: "Chairman & CEO", type: "img-card", img: "../avatar-06.jpg" },
	// create default "topic" shapes of Mind Map
    { id: "2", text: "Manager", parent: "1" },
    { id: "2.1", text: "Marketer", parent: "2" },
    { id: "2.2", text: "Team Lead ", parent: "2" },
	// more options
];

// initializing the mind map
var diagram = new dhx.Diagram("diagram", {
	type: "mindmap",
});
diagram.data.parse(data);
~~~

{{note Behavior of the added Org Chart shape will be the same as behavior of the Mind Map shapes. }}

## Default shape type

You can change the default "topic" type of the mind map shapes and specify other type as a common type for all the shapes of the Mind Map via the [defaultShapeType](api/diagram_defaultshapetype_config.md) property of the diagram config object:

~~~js
const diagram = new dhx.Diagram("diagram", {
    type: "mindmap",
    defaultShapeType: "rectangle" 
});
~~~

This value is applied, if the shape config doesn't contain the "type" property. 

To change the type of a separate shape, just use the **type** attribute of the shape object:

~~~js
const data = [
    { id: "1", text: "Chairman & CEO", type: "card" }, /*!*/
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" }
];
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

## Creating Custom Shape

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

