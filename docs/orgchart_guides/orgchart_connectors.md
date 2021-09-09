 Org Chart Connectors 
======================

The look and the order of connecting org chart shapes is defined by the configuration of the connector objects. You can: 

- specify the starting and ending shapes;
- set the type of the connector line.

<br>

<img style="display:block; margin-left:auto;margin-right:auto;" src="orgchart_connectors.png">

<br>

### Properties of a connector object

A connector object can have the following properties:

- **id** - the unique id of the connector;
- **from** - the id of the parent shape;
- **to** - the id of the child shape;
- **type** - the type of the connector:"*line*" (default) or "*dash*".

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

There is also another way to connect shapes in an org chart. This can be done via providing the **parent** property in the config of the shape and set the id of its parent shape as the value:

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

In this case, all the connectors will have the same type.

Setting the default connector type
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
