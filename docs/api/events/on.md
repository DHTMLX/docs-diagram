on
==========

@short:attaches a handler to an inner event of Diagram

@signature: {``}

@params: 
- name			string			the event's name, case-insensitive
- handler		function		the handler function 
* context		any				the value will be accessible as "this" inside of the event handler

@example: 
diagram.events.on("ShapeClick", function(id) {
	alert("You've just clicked an item with id="+id);
});

// For editor
editor.diagram.events.on("ShapeClick", function(id) {
	alert("You've just clicked an item with id="+id);
})


@relatedapi:
	api/events/detach.md
	api/events/fire.md

@relatedsample:
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events

@related:
api/refs/diagram_events.md
    
@descr:

[See the list of Diagram events](api/refs/diagram_events.md).

You can attach several handlers to the same event and all of them will be executed.
If some of handlers return *false*, the related operations will be blocked.
Event handlers are processed in the same order that they are attached.
