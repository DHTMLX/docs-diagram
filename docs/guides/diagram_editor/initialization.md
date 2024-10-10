---
sidebar_label: Initialization 
title: Diagram Editor initialization
description: You can learn how to start with Diagram Editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Diagram Editor initialization

This article covers the process of displaying a Diagram Editor on a page. In order to initialize the editor, you need to include source files specific for Editor and use the `DiagramEditor` instance. In all other aspects the initialization stage is the same as for the Diagram component:

- [Download the DHTMLX Diagram package](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) and unpack it into a folder of your project
- [Include the source files on a page](#including-required-code-files)
- [Initialize Diagram Editor with the object constructor](#initializing-diagram-editor)
- [Load data into the Diagram Editor](#loading-data-into-diagram-editor)

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

        // creating Diagram Editor
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

To create Diagram Editor, you need to include 2 source files on your page:

- **diagramWithEditor.js**
- **diagramWithEditor.css**

Make sure that you set correct relative paths to these files:

~~~html
<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
~~~

### Installing Diagram Editor via npm and yarn

You can import JavaScript Diagram Editor into your project using the `yarn` or `npm` package manager.

#### Installing trial Diagram Editor via npm and yarn

:::info
If you want to use the trial version of Diagram Editor, download the [**trial Diagram package**](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) and follow the steps mentioned in the *README* file. Note that the trial Diagram Editor is available 30 days only.
:::

#### Installing PRO Diagram Editor via npm and yarn

:::info
If you already have Diagram Editor under the proprietary license, send your **license number** to the *contact@dhtmlx.com* email to receive a login and a password for a private **npm** as well as a detailed guide on how to install Diagram Editor. Note that a private **npm** is available before the expiration of the proprietary Diagram Editor license.
:::

## Initializing Diagram Editor

You can initialize a Diagram Editor in a container, in the document body, or in a layout cell.

### Initialization in a container

To initialize Diagram Editor in a container, use the `dhx.DiagramEditor` constructor and pass the following two parameters to the constructor function:

- a container to place Diagram Editor into, let's give it the *"editor_container"* id:

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

It is also possible to skip setting a container for Diagram Editor and to add it right into the document's body:

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

## Loading data into Diagram Editor

It is possible to load an [appropriate data set](../../../guides/loading_data/#preparing-data-to-load) into the editor via the [parse()](../../../api/diagram_editor/editor/methods/parse_method/) method of the editor.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
