afterCollapse
=============


@short:
	fires after an item has been collapsed

@params:
- id		string,number		the id of an item which has been collapsed
- dir       string              optional, the side the children were hidden in relation to the parent shape <br>("left" or "right" for <i>type:"topic"</i>, otherwise - undefined)

@example:
diagram.events.on("afterCollapse", function(id, dir) {
    console.log(diagram.data.getItem(id).text + " was collapsed", dir);
});

// For editor
editor.diagram.events.on("afterCollapse", function(id, dir) {
    console.log(editor.diagram.data.getItem(id).text + " was collapsed", dir);
});

@template:	api_event
@descr:

**Related sample**:
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@relatedapi:
api/diagram_onbeforecollapse_event.md

@changelog: The **dir** parameter was added in v3.1.