Editor API 
=============

Diagram Editor API
-----------------

### Constructor

The constructor function takes as parameters either an HTML container or the document body and an object with configuration properties.

~~~js
var editor = new dhx.DiagramEditor(document.body, {
    type: "default"
});
~~~


- [Methods](diagram_guides/editor_mode.md#editorapimethods)
- [Events](diagram_guides/editor_mode.md#editorapievents)
- [Properties](diagram_guides/editor_mode.md#configurationproperties)

Org Chart Editor API
------------------

### Constructor

The constructor function takes as parameters either an HTML container or the document body and an object with configuration properties.

~~~js
var editor = new dhx.DiagramEditor(document.body, {
    type: "org"
});
~~~

- [Methods](orgchart_guides/editor_mode.md#editorapimethods)
- [Events](orgchart_guides/editor_mode.md#editorapievents)
- [Properties](orgchart_guides/editor_mode.md#configurationproperties)

Mind Map Editor API
----------------------

### Constructor

The constructor function takes as parameters either an HTML container or the document body and an object with configuration properties.

~~~js
var editor = new dhx.DiagramEditor(document.body, {
    type: "mindmap"
});
~~~

- [Methods](mindmap_guides/editor_mode.md#editorapimethods)
- [Events](mindmap_guides/editor_mode.md#editorapievents)
- [Properties](mindmap_guides/editor_mode.md#configurationproperties)