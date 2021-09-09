afterExpand
=============

@short:
	fires after an item has been expanded

@params:
- id		string,number		the id of an item which has been expanded
- dir       string              optional, the side the children were shown in relation to the parent shape <br>("left" or "right" for <i>type:"topic"</i>, otherwise - undefined)

@example:
diagram.events.on("afterExpand", function(id, dir) {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});

// For editor
editor.diagram.events.on("afterExpand", function(id,dir) {
    console.log(editor.diagram.data.getItem(id).text + " was expanded", dir);
});

@template:	api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events

@relatedapi:
api/diagram_onbeforeexpand_event.md

@changelog: The **dir** parameter was added in v3.1.