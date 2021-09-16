---
sidebar_label: How to start with Diagram
title: How to start with Diagram
description: text
---

# How to start with Diagram

In this article we will discuss the stages of adding dhtmlxDiagram on a page. This process presupposes several simple steps:

- [Download the DHTMLX Diagram package and unpack it into a folder of your project](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml)
- [Include the dhtmlxDiagram source files on a page](common_guides/initialization.md#includingrequiredcodefiles).
- [Create a container to place the Diagram into](common_guides/initialization.md#creatingcontainer).
- [Initialize the Diagram with the object constructor](common_guides/initialization.md#initializingdiagram).
- [Load data into the Diagram](#loaddataintodiagram).


~~~html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="codebase/diagram.js"></script>	
  <link rel="stylesheet" href="codebase/diagram.css">
</head>

<body>
	<div id="diagram_container"></div>
	<script>
		// preparing diagram data
		var data = [ 
    		{ "id":"1", "x":100, "y":40, "text":"Start", "type":"start" },
    		{ "id":"2", "x":100, "y":170, "text":"Operation 1", "type":"output" },
    		{ "id":"1-2", "from": "1", "to": "2" },
    		// more objects
		];

		// creating DHTMLX Diagram
		var myDiagram = new dhx.Diagram("diagram_container", {
			// config options
		});

		// loading data into the diagram
		diagram.data.parse(data);
	</script>
</body>
</html>
~~~


Including Required Code Files
-------------------

To create dhtmlxDiagram, you need to include 2 source files on your page:

- **diagram.js**
- **diagram.css**

Make sure that you set correct relative paths to these files:

~~~html
<script type="text/javascript" src="codebase/diagram.js"></script>	
<link rel="stylesheet" href="codebase/diagram.css">
~~~

The structure of dhtmlxDiagram package is the following: 

- **sources** - the source code files of the library. The files are not minified and easy-to-read. The package is mostly intended to be used for component's debugging;

{{note Note that the **Trial** version of the Diagram library doesn't contain the sources folder.}}

- **samples** - the code samples;
- **codebase** - the packed code files of the library. These files are much smaller and intended for use in production. **In your apps you need to use files from this folder**.



Creating Container
---------------------

It's high time to add an HTML container for our diagram. Let's give it the id "diagram_container":

~~~html
<div id="diagram_container"></div>
~~~

Initializing Diagram
----------------

To initialize dhtmlxDiagram, you should use the `dhx.Diagram` constructor. The constructor function takes two parameters:

- a container to place a Diagram into. The one we have created at the previous step.
- an object with configuration properties. [See the full list below](common_guides/initialization.md#listofproperties).

~~~js
var myDiagram = new dhx.Diagram("diagram_container", {// config options});
~~~

It is also possible to skip setting a container for Diagram and to add it right into the document's body:

~~~js
var myDiagram = new dhx.Diagram(document.body, {// config options});
~~~

<h3 id="orgchartinit">Initializing Org Chart</h3>

To create an Org Chart, specify the **type:"org"** property in the configuration object:

~~~js
var myDiagram = new dhx.Diagram("diagram_container", {type:"org"});
~~~

{{editor	https://snippet.dhtmlx.com/5ign6fyy	Diagram. Org Chart initialization}}

<h3 id="mindmapinit">Initializing Mind Map</h3>

To create a Mind Map, specify the **type:"mindmap"** property in the configuration object:

~~~js
var myDiagram = new dhx.Diagram("diagram_container", {type:"mindmap"});
~~~

<h3 id="listofproperties">Configuration properties</h3>

There is a list of properties that you can specify in the diagram configuration object (the second parameter of the constructor function):

- **api/diagram_autoplacement_config.md** - (*object*) sets configuration for autoplacement;
- **api/diagram_defaultlinktype_config.md** - (*string*) defines the type of diagram links that is applied to all links by default. The default value is "line". You can set an individual type for each link;
- **api/diagram_defaults_config.md** - (*object*) defines the default configuration that is applied to all shapes of a specified type;
- **api/diagram_defaultshapetype_config.md** - (*string*) defines the type of a diagram shape that is applied to all shapes by default. The default value is "card". You can set an individual type for each shape;
- **api/diagram_exportstyles_config.md** - (*boolean, array*) defines the styles that will be sent to the export service when exporting the diagram;
- **api/diagram_linegap_config.md** - (*number*) defines the spacing between shapes and the connector line, 10 by default;
- **api/diagram_margin_config.md** - (*object*) specifies the vertical and horizontal margins for diagram shapes;
- **api/diagram_scale_config.md** - (*boolean*) enables zooming in and out from a diagram, 1 by default;
- **api/diagram_select_config.md** - (*boolean*) enables the ability to select particular shapes;
- **api/diagram_toolbar_config.md** - (*array*) sets a toolbar with buttons for shapes
- **api/diagram_type_config.md** - (*string*) the type of a diagram: "default" (by default, for Diagram), "org", "mindmap"
- **api/diagram_typeconfig_config.md** - (*object*) optional, defines the direction of the shapes in the mind map

There are two ways to change the configuration of a diagram. You can specify the desired property in the config object passed as a second
parameter of the constructor function. 

~~~js
var myDiagram = new dhx.Diagram("diagram_container", {scale:0.7});
~~~

{{editor	https://snippet.dhtmlx.com/4d4k3o8p	Diagram. Wide flowchart}}

Alternatively, you can get access to some option and set/modify its value via the diagram **config**. Don't forget to call the api/diagram_paint.md method to re-render the diagram with a new configuration:

~~~js
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.config.scale = 0.7; /*!*/
diagram.paint();
~~~

Loading data into Diagram
----------------------------

Detailed information on loading data into DHTMLX Diagram is given in the [Loading and Storing Data](common_guides/loading_data.md) article.


