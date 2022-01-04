---
sidebar_label: How to start with Diagram
title: How to start with Diagram
description: You can learn how to start with Diagram in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# How to start with Diagram

In this article we will discuss the stages of adding DHTMLX Diagram on a page. This process presupposes several simple steps:

- [Download the DHTMLX Diagram package](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) and unpack it into a folder of your project
- [Include the DHTMLX Diagram source files on a page](#including-required-code-files).
- [Initialize the Diagram with the object constructor](#initializing-diagram).
- [Load data into the Diagram](#loading-data-into-diagram).


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
		const data = [ 
    		{ id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
			{ id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
			{ id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
			{ from: 1, to: 2 },
			{ from: 2, to: 3 },
    		// more objects
		];

		// creating DHTMLX Diagram
		const diagram = new dhx.Diagram("diagram_container", {
			// config options
		});

		// loading data into the diagram
		diagram.data.parse(data);
	</script>
</body>
</html>
~~~

Including required code files
-------------------

To create Editor, you need to include 2 source files on your page:

- **diagram.js**
- **diagram.css**

Make sure that you set correct relative paths to these files:

~~~html
<script type="text/javascript" src="../codebase/diagram.js"></script>	
<link rel="stylesheet" href="../codebase/diagram.css">
~~~

The structure of DHTMLX Diagram package is the following: 

- **sources** - the source code files of the library. The files are not minified and easy-to-read. The package is mostly intended to be used for component's debugging;

{{note Note that the **Trial** version of the Diagram library doesn't contain the sources folder.}}

- **samples** - the code samples;
- **codebase** - the packed code files of the library. These files are much smaller and intended for use in production. **In your apps you need to use files from this folder**.


Initializing Diagram
----------------

You can initialize a Diagram in a container, in the document body, or in a layout cell.

### Initialization in a container

To initialize a diagram in a container, use the `dhx.Diagram` constructor and pass the following two parameters to the constructor function:

- a container to place a Diagram into, let's give it the id "diagram_container":

~~~html title="index.html"
<div id="diagram_container"></div>
~~~

- an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default.

~~~js title="index.js"
const diagram = new dhx.Diagram("diagram_container", {
	type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialization in the document body

It is possible to skip setting a container for Diagram and to add it right into the document's body:

~~~js
const diagram = new dhx.Diagram(document.body, {
	type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialization in a layout cell

You can also initialize a diagram inside [a Layout cell](https://docs.dhtmlx.com/suite/layout/). In this case use *null* instead of a container:

~~~js
const diagram = new dhx.Diagram(null, {
	type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram"
        },
    ]
});

layout.getCell("diagram").attach(diagram);
~~~

### Configuration properties

To change the configuration of a diagram, you can specify the desired property in the config object passed as a second parameter of the constructor function. 

~~~js
const diagram = new dhx.Diagram("diagram_container", {
	scale: 0.7
});
~~~

**Related sample:**	[Diagram. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p)	

Alternatively, you can get access to some option and set/modify its value via the diagram **config**. Don't forget to call the [](../../api/diagram/paint_method.md) method to re-render the diagram with a new configuration:

~~~js
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.config.scale = 0.7;
diagram.paint();
~~~

See [the full list of configuration properties of Diagram](../../../api/diagram/api_overview/#diagram-properties).

Loading data into Diagram
----------------------------

Detailed information on loading data into DHTMLX Diagram is given in the [Loading and Storing Data](../../../guides/loading_data/) article.


