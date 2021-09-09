Org Chart Data Format
============================

In order to [load data](common_guides/loading_data.md) to an Org Chart, you need to prepare an appropriate data set in the JSON format which contains a set of shape and, optionally,connectors objects.

The presence or absence of connectors configs in the data set depends on the chosen [way of shapes connection](#connectionsbetweenshapes).

##Configuration of shape objects

The shapes of Org Chart are configured automatically. You can set the following options for a shape of an org chart:

- **id** - (*string|number*) the unique id of a shape; 
- **text** - (*string*) the text to be rendered in a shape;
- **parent** - (*string|number*) the id of the parent shape;
- **type** - (*string*) the type of the shape. [See the list of shapes types for Organogram](orgchart_guides/orgchart_shapes_types.md);
- **img** - (*string*) the image of a shape;
- **dx** - (*number*) the left offset of the shape;
- **dy** - (*number*) the top offset of the shape; 
- **title** - (*string*) the title of a shape.

See [the full list of the **org chart shape object properties**](orgchart_guides/orgchart_shapes_types.md#shapeattrs).

~~~js
var data = [
	// shapes
	{
		"id": "1",
		"text": "Chairman & CEO",
		"title": "Henry Bennett",
		"img": "../common/img/avatar-1.png"
	},
	{
		"id": "2",
		"text": "QA Lead",
		"title": "Emma Lynch",
		"img": "../common/img/avatar-2.png",
		"parent": "1",
		"dir": "vertical"
	},
	{
		"id": "2.1",
		"text": "QA",
		"title": "Charles Little",
		"img": "../common/img/avatar-4.png",
		"parent": "2"
	}
]
~~~


Connections between shapes
-----------------

There are two ways to connect shapes in an organogram:

- **using the "parent" attribute**

You can provide the **parent** property in the config of the shape and set the id of its parent shape as the value:

~~~js
var data = [
	// shapes
	{ "id": "1", "text": "Chairman & CEO",},
	{ "id": "2", "text": "Manager", "parent": "1"},
	{ "id": "3", "text": "Technical Director", "parent": "1"},
	{ "id": "2.1", "text": "Marketer", "parent": "2" },
	{ "id": "3.1", "text": "Team Lead ", "parent": "3"}
];
~~~

{{editor	https://snippet.dhtmlx.com/9h89c3gl	Diagram. Scaled Org chart}}

- **using connector objects**

It is also possible to specify separate connector objects that will describe the logic of connecting shapes. For example:

~~~js
var data = [
	// shapes
    {
        "id": "1",
        "text": "Chairman & CEO"
    },
    {
        "id": "2",
        "text": "Manager"
    },
    {
        "id": "3",
        "text": "Technical Director"
    },
    
    // connectors
    { "id": "1-2", "from": "1", "to": "2", "type": "line" },
    { "id": "1-3", "from": "1", "to": "3", "type": "line" }
];
~~~

{{editor	https://snippet.dhtmlx.com/5ign6fyy	Diagram. Org Chart initialization}}

A connector object can contain the following attributes:

- **id** - the unique id of the connector;
- **from** - the id of the parent shape;
- **to** - the id of the child shape;
- **type** - the type of the connector:"*line*" (default) or "*dash*".



