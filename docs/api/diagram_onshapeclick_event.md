shapeClick
=============

@short:
	fires on clicking a shape

@params:
- id	 	string,number 		the shape id

@example:
diagram.events.on("shapeClick", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '" is clicked');
});

// For editor
editor.diagram.events.on("shapeClick", function(id) {
    console.log('An item "' + editor.diagram.data.getItem(id).text + '" is clicked');
});

@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/7h2hgb3g	Diagram. Events
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events

@relatedapi:
api/diagram_onshapedblclick_event.md
api/diagram_shapeiconclick_event.md
api/diagram_shapemousedown_event.md