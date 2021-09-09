Diagram Data Format
======================

In order to [load data](common_guides/loading_data.md) to a Diagram, you need to prepare an appropriate data set in the JSON format which contains a set of shape and connectors objects.

##Configuration of shape objects 

The Diagram shapes are not configured automatically. Their positioning and appearance totally depend on the applied configuration settings. Thus, a shape object can have the following attributes:

- **id** - (*string|number*) the unique id of a shape;
- **x** - (*number*) the x coordinate of the shape position;
- **y** - (*number*) the y coordinate of the shape position;
- **text** - (*string|string[]*) the text to be rendered in a shape. The property can be set as an array of string values while [preparing a data set for a **custom shape** only](common_guides/configuration.md#creatingcustomshapes);
- **type** - (*string*) the type of the shape. [See the full list of shapes types](diagram_guides/shapes_arrows_list.md#shapestypes);
- **height** - (*number*) the height of a shape;
- **width** - (*number*) the width of a shape;
- **css** - (*string*) the name of the CSS class that should be applied to the shape.

See [the full list of the **diagram shape object properties**](diagram_guides/shapes_arrows_list.md#shapeattrs).

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


Connections between shapes
------------------

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

A connector object can contain several attributes:

- **id** - the unique id of the connector;
- **from** - the id of the parent shape;
- **to** - the id of the child shape;
- **type** - the type of the connector:"*line*" (default) or "*dash*".

See [the full list of the **connector object properties**](diagram_guides/shapes_arrows_list.md#connectorattrs).



