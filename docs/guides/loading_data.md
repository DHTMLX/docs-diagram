Loading and Storing Data
===================

You can populate Diagram, Org Chart, or Mind Map with data in the following ways:

- [load data from an external file](#externaldataloading)
- [load data from a local data source](#loadingfromalocalsource)

Preparing Data to Load
-------------------------

In order to load data into the DHTMLX Diagram, you need to prepare an appropriate data set in the JSON format. Here are examples of JSON format templates for all the available types of diagrams:

1\. **[Org chart](org_chart_guides.md)** template:

~~~js
const data = [
	{ "id": "1", "text": "Chairman & CEO" },
	{ "id": "2", "text": "Manager", "parent": "1" },
	{ "id": "3", "text": "Technical Director", "parent": "1" },
	{ "id": "2.1", "text": "Marketer", "parent": "2" },
	{ "id": "3.1", "text": "Team Lead ", "parent": "3" }
];
~~~

Check the details on configuration of the org chart shapes and connector lines in the related articles: [Org Chart Shapes](orgchart_guides/orgchart_shapes_types.md) and [Org Chart Connectors](orgchart_guides/orgchart_connectors.md).

2\. **[Diagram](diagram_guides.md)** templates:

- Shapes and Connectors template:

~~~js
const data = [
	// shapes    
	{ "id":"1", "x":100, "y":40,  "text":"Start", "type":"start", "height":50 },
	{ "id":"2", "x":100, "y":170, "text":"Operation 1", "type":"output" },
	{ "id":"3", "x":100, "y":300, "text":"Operation 2", "type":"input" },
    
	// connectors
	{ "id":"1-2", "from": "1", "to": "2" },
	{ "id":"2-3", "from": "2", "to": "3" }
]; 
~~~

Check the details on configuration of the diagram shapes and connector lines in the related articles: [Diagram Shapes, Groups, Swimlanes](diagram_guides/shapes_arrows_list.md#shapesconfiguration) and [Diagram Connectors](diagram_guides/diagram_connectors.md#connectorsconfiguration).

- Group template:

~~~js
const data = [
	// a group
    {
        type: "$group", id: 1, width: 400, height: 200, x: 0, y: 0,
        header: { text: "Group 1", editable: true, closable: true },
        groupChildren: ["1.1", "1.2"], open: false
    },

	// shapes
    { type: "rectangle", id: 1.1, x: 50, y: 75, text: "Shape 1.1" },
    { type: "rectangle", id: 1.2, x: 200, y: 75, text: "Shape 1.2" }
];
~~~

Check the details on configuration of groups in the related article: [Diagram Shapes, Groups, Swimlanes](diagram_guides/shapes_arrows_list.md#groupsconfiguration).

- Swimlane template:

~~~js
const data = [
    {
        type: "$swimlane",
        id: "a",
        height: 500,
        width: 850,
        layout: [
            ["a1", "a2", "a3"]
        ],
        subHeaderCols: {
            enable: true,
        }
    },
];
~~~

Check the details on configuration of swimlanes in the related article: [Diagram Shapes, Groups, Swimlanes](diagram_guides/shapes_arrows_list.md#swimlaneconfiguration).

3\. **[Mind Map](mindmap_guides.md)** template:

~~~js
const data = [
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

Check the details on configuration of a mind map in the related article: [Mind Map Shapes](mindmap_guides/mindmap_shapes_connectors.md).

External Data Loading
-------------------

To load data from an external file, make use of the api/data/methods/load.md method. It takes the URL of the file with data as a parameter:

~~~js
diagram.data.load("../common/data.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.data.load("/some/data").then(function(){
   diagram.selection.add("123");
});
~~~

{{editor	https://snippet.dhtmlx.com/09isp2d8	Diagram. Org chart load data}}

Loading from a Local Source
--------------------

To load data from a local data source, use the api/data/methods/parse.md method. As a parameter you need to pass an array of [predefined data objects](#preparingdatatoload):

~~~js
diagram.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/4d4k3o8p	Diagram. Wide flowchart}}

Saving and Restoring State
----------------------------

To save the current state of a diagram, use the api/data/methods/serialize.md method. It converts the data of the diagram into an array of JSON objects. 
Each JSON object contains the configuration of a separate shape.

~~~js
var state = diagram1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different diagram. For example:

~~~js
// creating a new diagram
var diagram2 = new dhx.Diagram(document.body);
// parsing the state of the diagram1 into diagram2
diagram2.data.parse(state);
~~~

