beforeExpand
=============


@short:
	fires before expanding an item

@params:
- id		string,number		the id of an item 
- dir       string              optional, the side the children will be shown in relation to the parent shape <br>("left" or "right" for <i>type:"topic"</i>, otherwise - undefined)
  
@example:
diagram.events.on("beforeExpand", function(id, dir) {
    console.log("Expanding " + diagram.data.getItem(id).text, dir);
    return true;
});

// For editor
editor.diagram.events.on("beforeExpand", function(id, dir) {
    console.log("Expanding " + editor.diagram.data.getItem(id).text, dir);
    return true;
});

@template:	api_event
@descr:
Returning *false* from the handler will block the selection.

@relatedsample:
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events

@relatedapi:
api/diagram_onafterexpand_event.md

@changelog: The **dir** parameter was added in v3.1.