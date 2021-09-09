shapeDblClick
=============

@short:
	fires on double-clicking a shape

@params:
- id	 	string,number		the shape id


@example:
diagram.events.on("shapeDblClick", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '"double-clicked');
});

// For editor
editor.diagram.events.on("shapeDblClick", function(id) {
    console.log('An item"' + editor.diagram.data.getItem(id).text + '"double-clicked');
});

@template:	api_event
@descr:

@relatedapi:
api/diagram_onshapeclick_event.md
api/diagram_shapeiconclick_event.md
api/diagram_shapemousedown_event.md

@relatedsample:
https://snippet.dhtmlx.com/7h2hgb3g	Diagram. Events
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events