---
sidebar_label: Line types
title: Line Types
description: text
---


# Line types

Org chart mode
---------------

The look and the order of connecting org chart shapes is defined by the configuration of the connector objects. You can: 

- specify the starting and ending shapes;
- set the type of the connector line.

<br>

<img style="display:block; margin-left:auto;margin-right:auto;" src="orgchart_connectors.png">


Default mode
------------

The look and the way of connecting shapes is defined by the configuration of the connector objects. You can: 

- specify the starting and ending shapes;
- set the type of the connector line and the arrow;
- define particular sides of shapes that should perform as the initial/final points of the connector line.

<img style="display:block; margin-left:auto;margin-right:auto;" src="diagram_with_arrows.png">



Setting Type of Connector
-------------------------

### Setting the default connector type

You can set a common type for all the connectors of the diagram via the api/diagram_defaultlinktype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType:"dash"        /*!*/
});
~~~

This value is applied, if the connector config doesn't contain the "type" property.

### Setting the type for a separate connector

Use the name of the necessary type as a value of the **type** attribute inside the connector object, while preparing a data set for loading into the [DHTMLX Diagram](common_guides/loading_data.md#preparingdatatoload):

~~~js
// data to load
var data = [
   // connectors
   { "id": "1-2", "from": "1", "to": "2", "type": "line", "forwardArrow": "filled" },
   { "id": "2-3", "from": "2", "to": "3", "type": "dash", "toSide": "bottom", 
   		"forwardArrow": "filled" },
   { "id": "2-4", "from": "2", "to": "4", "type": "dash", "toSide": "top", 
   		"forwardArrow": "filled" }
]

// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~


Setting the default connector type (org chart)
------------------------------

You can set a common type for all the connectors of the Org Chart via the api/diagram_defaultlinktype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    defaultLinkType:"line"        /*!*/
});
~~~

This value is applied, if the connector config doesn't contain the "type" property.

Setting type for a separate connector
--------------------------------------

Use the name of the necessary type as a value of the **type** attribute inside the connector object, while [preparing a data set for loading into the org chart](common_guides/loading_data.md#preparingdatatoload).

~~~js
// data to load
var data = [
	// shapes
	{ "id": "1", "text": "Chairman & CEO"},
	{ "id": "2", "text": "Manager"},
	{ "id": "3", "text": "Technical Director"},
    
	// connectors
	{ "id": "1-2", "from": "1", "to": "2"},
	{ "id": "1-3", "from": "1", "to": "3", "type": "dash" } /*!*/
]

// initializing an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org" });
diagram.data.parse(data);
~~~

API properties
--------------------

### Default mode

<h3 id="connectorattrs">Properties of a connector object</h3>

A connector object can have the following properties:

- **id** - (*string*/*number*) the id of a connector;
- **from** - (*string*/*number*) the id of the parent shape;
- **to** - (*string*/*number*) the id of the child shape;
- **type** - (*string*) the type of the connector line: "*line*" (default) or "*dash*";
- **forwardArrow** - (*string*) sets a forward arrow connector and defines the type of the arrow ("filled" by default);
- **backArrow** - (*string*) sets a back arrow connector and defines the type of the arrow ("filled" by default);
- **fromSide** - (*string*) the side of the shape from which connection will start ("*top*","*bottom*","*left*","*right*","*center*");
- **toSide** - (*string*) the side of the shape to which a different shape will be attached ("*top*","*bottom*","*left*","*right*","*center*");
- **cornersRadius** - (*number*) the radius of rounding corners of a connector.

### Org chart mode/Mind map mode

A connector object can have the following properties:

- **id** - the unique id of the connector;
- **from** - the id of the parent shape;
- **to** - the id of the child shape;
- **type** - the type of the connector:"*line*" (default) or "*dash*".


Connections between shapes (mindmap/orgchart)
-------------------------

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



Connectors configuration (default mode)
----------------------------

To connect shapes in a diagram, you need to specify separate objects that will describe the logic of connecting shapes. For example:

~~~js
var data = [
	// shapes
   	{ "id": 1, "x": 200, "y": 0, "text": "Arrival", "type": "process" },
	{ "id": 2, "x": 200, "y": 130, "text": "Load", "type": "process" },
	{ "id": 2.1, "x": 480, "y": 130, "text": "Part", "type": "process" },
	{ "id": 3, "x": 200, "y": 260, "text": "Process Plan", "type": "process" },
	{ "id": 3.1, "x": 0, "y": 240, "text": "Unit Load", "type": "process" },
    
    // connectors
    { "id": "1-2", "from":"1", "to":"2", "type":"line", "forwardArrow":"filled" },
	{ "id": "2-3", "from":"2", "to":"3", "type":"line", "forwardArrow":"filled" },
	{ "id": "2-2.1", "from":"2", "to":"2.1", "type":"line", "backArrow":"filled" },
	{ "id": "2-3.1", "from":"2", "to":"3.1", "type":"line", "forwardArrow":"filled", 
      "toSide":"top" 
    }
];
~~~

{{editor	https://snippet.dhtmlx.com/fq22oqkz	Diagram. Arrow Connectors}}

