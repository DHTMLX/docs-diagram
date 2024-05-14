---
sidebar_label: Initialization 
title: Editor initialization
description: You can learn how to start with Diagram Editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editor initialization

This article covers the process of displaying a Diagram editor on a page. In order to initialize the editor, you need to include source files specific for Editor and use the `DiagramEditor` instance. In all other aspects the initialization stage is the same as for the Diagram component:

- [Download the DHTMLX Diagram package](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) and unpack it into a folder of your project
- [Include the source files on a page](#including-required-code-files)
- [Initialize the Editor with the object constructor](#initializing-editor)
- [Load data into the Editor](#loading-data-into-editor)

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
            { from: 2, to: 3 }
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

## Including required code files

To create Editor, you need to include 2 source files on your page:

- **diagramWithEditor.js**
- **diagramWithEditor.css**

Make sure that you set correct relative paths to these files:

~~~html
<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
~~~

## Initializing Editor

You can initialize a Diagram Editor in a container, in the document body, or in a layout cell.

### Initialization in a container

To initialize an editor in a container, use the `dhx.DiagramEditor` constructor and pass the following two parameters to the constructor function:

- a container to place an Editor into, let's give it the *"editor_container"* id:

~~~html title="index.html"
<div id="editor_container"></div>
~~~

- an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the default settings will be applied

~~~jsx title="index.js"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialization in the document body

It is also possible to skip setting a container for Editor and to add it right into the document's body:

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialization in a layout cell

You can also initialize an editor inside [a Layout cell](https://docs.dhtmlx.com/suite/layout/). In this case use *null* instead of a container:

~~~jsx
const editor = new dhx.DiagramEditor(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram_editor"
        }
    ]
});

layout.getCell("diagram_editor").attach(editor);
~~~

### Configuration properties

To change the configuration of the editor, you can specify the desired property in the config object passed as a second parameter of the constructor function.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "default" | "org" | "mindmap"
    shapeBarWidth: 320,
    lineGap: 20
});
~~~

### Properties

Check [the full list of configuration properties of Editor](/api/diagram_editor/editor/config/overview/).

Loading data into Editor
----------------------------

It is possible to load an [appropriate data set](../../../guides/loading_data/#preparing-data-to-load) into the editor via the [parse()](../../../api/diagram_editor/editor/methods/parse_method/) method of the editor.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
