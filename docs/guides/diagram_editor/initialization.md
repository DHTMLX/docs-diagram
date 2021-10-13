---
sidebar_label: How to start with Editor
title: How to start with Editor
description: text
---

# How to start with Diagram Editor

This article covers the process of displaying a Diagram editor on a page. In order to initialize the editor, you need to include source files specific for Editor and use the *DiagramEditor* instance. In all other aspects the initialization stage is the same as for the Diagram component:

- [Download the DHTMLX Diagram package](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) and unpack it into a folder of your project;
- [Include the source files on a page](#including-required-code-files);
- [Create a container to place the Editor into](#creating-a-container);
- [Initialize the Editor with the object constructor](#initializing-editor);
- [Load data into the Editor](#loading-data-into-editor).

~~~html
<!DOCTYPE html>
<html>
<head>
  	<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
	<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
</head>

<body>
	<div id="editor_container"></div>
	<script>
		// preparing data
		const data = [ 
    		{ id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
			{ id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
			{ id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
			{ from: 1, to: 2 },
			{ from: 2, to: 3 },
    		// more objects
		];

		// creating Editor
		const editor = new dhx.DiagramEditor("editor_container", {
			// config options
		});

		// loading data into the editor
		editor.parse(data);
	</script>
</body>
</html>
~~~

Including required code files
-------------------

To create Editor, you need to include 2 source files on your page:

- **diagramWithEditor.js**
- **diagramWithEditor.css**

Make sure that you set correct relative paths to these files:

~~~html
<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
~~~

Creating a container
---------------------

Add an HTML container for the Editor and give it an id, for example "editor_container":

~~~html
<div id="editor_container"></div>
~~~

Initializing Editor
----------------

To initialize the Editor, you should use the `dhx.DiagramEditor` constructor. The constructor function takes two parameters:

- a container to place an Editor into. The one we have created at the previous step.
- an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default.

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
	type: "default" // "default" | "org" | "mindmap"
});
~~~

It is also possible to skip setting a container for Editor and to add it right into the document's body:

~~~js
const editor = new dhx.DiagramEditor(document.body, {
	type: "default" // "default" | "org" | "mindmap"
});
~~~

### Configuration properties

To change the configuration of the editor, you can specify the desired property in the config object passed as a second parameter of the constructor function. 

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
	type: "default" // "default" | "org" | "mindmap",
	shapeBarWidth: 320,
	lineGap: 20
});
~~~

### Properties

Check [the full list of configuration properties of Editor](../../../api/editor/api_overview/#editor-properties).

Loading data into Editor
----------------------------

It is possible to load an [appropriate data set](../../../guides/loading_data/#preparing-data-to-load) into the editor via the [](../../api/editor/parse_method.md) method of the editor.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="200"></iframe>

