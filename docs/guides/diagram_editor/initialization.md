Initialization
===============

The dhtmlxDiagram component provides a special Editor mode that allows you to try and apply your designer skills in building neat and nice-looking diagrams. 

Default mode
-----------

In order to initialize a Diagram editor, you need to use the *DiagramEditor* instance. In all other aspects the initialization stage is the same as for the Diagram component: the constructor function takes as parameters either an HTML container or the document body and a configuration object.

~~~js
var editor = new dhx.DiagramEditor(document.body, {// editor config settings});
~~~

It is possible to load an [appropriate data set](common_guides/loading_data.md#preparingdatatoload) into the editor via the api/data/methods/parse.md method.

~~~js
editor.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/xshe9ut7	Diagram. Diagram Editor. Basic editor}}


Configuration properties - add link


Org chart mode
----------

You can modify the arrangement of the Org Chart shapes and their content in the special editor mode. To initialize an org chart in this mode, use a separate instance called *DiagramEditor*.

The constructor of the editor doesn't differ much from that of the diagram. The constructor function takes as parameters either an HTML container or the document body, and a configuration object. 
It is obligatory to set the **type:"org"** config option in this object to initialize Org Chart editor:

~~~js
var editor = new dhx.DiagramEditor(document.body, { type: "org" });
~~~

The editor is populated with data that has the same structure as [the data of an Org Chart](common_guides/loading_data.md#preparingdatatoload). 
Use the api/data/methods/parse.md method to load data into the editor:

~~~js
editor.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/og4qm3ja	Diagram. Org Chart Editor. Basic editor}}

Mindmap mode
------------

The library includes a special *Editor mode* with a set of in-built tools that will help you to accelerate the process of customizing shapes of Mind Map and their content. To initialize a mind map in this mode, use a separate instance called *DiagramEditor*.

The constructor of the editor is similar to that of diagram. The constructor function takes as parameters either an HTML container or the document body, and a configuration object. To initialize a Mind Map editor, you need to set the obligatory **type:"mindmap"** option in the configuration object:

~~~js
var editor = new dhx.DiagramEditor(document.body, { 
	type: "mindmap" 
});
~~~

To populate the editor with [an appropriate data set](common_guides/loading_data.md#preparingdatatoload), use the api/data/methods/parse.md method:

~~~js
editor.parse(data);
~~~
