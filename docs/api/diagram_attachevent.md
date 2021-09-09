attachEvent
=============

@short:attaches a handler to an inner event of Diagram
	

@params: 
- name			EventName		the event's name, case-insensitive
- handler		function		the handler function 
* context		any				the value will be accessible as "this" inside of the event handler

@example: 
diagram.attachEvent("onShapeClick", function(id) {
	alert("You've just clicked an item with id="+id);
});


@template:	api_method
@relatedapi:
	api/diagram_detachevent.md
	api/diagram_callevent.md
@relatedsample:
	diagram/01_organogram/04_events.html
@descr:

You can attach several handlers to the same event and all of them will be executed.
If some of handlers return *false*, the related operations will be blocked.
Event handlers are processed in the same order that they are attached.