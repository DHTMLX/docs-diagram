Diagram Connectors
=======================

The look and the way of connecting shapes is defined by the configuration of the connector objects. You can: 

- specify the starting and ending shapes;
- set the type of the connector line and the arrow;
- define particular sides of shapes that should perform as the initial/final points of the connector line.

<img style="display:block; margin-left:auto;margin-right:auto;" src="diagram_with_arrows.png">

Connectors configuration
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

Setting the default connector type
------------------------------------

You can set a common type for all the connectors of the diagram via the api/diagram_defaultlinktype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType:"line"        /*!*/
});
~~~

This value is applied, if the connector config doesn't contain the "type" property.

Setting type for a separate connector
-----------------------------------

Use the name of the necessary type as a value of the **type** attribute inside the connector object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

~~~js
// data to load
var data = [
   // connectors
   {"id": "1-2", "from":"1", "to":"2", "type":"line", "forwardArrow":"filled" },
   {"id": "2-3", "from":"2", "to":"3", "type":"dash", "toSide":"bottom",
   		"backArrow":"filled" },
   {"id": "2-4", "from":"2", "to":"4", "type":"dash", "toSide":"top"}
]

// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~