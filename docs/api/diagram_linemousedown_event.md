lineMouseDown
=============

@short: fires when a pointing device button is pressed while the pointer is over a connector line

@params:
- id		    string|number		the id of a connector
- e     	    MouseEvent		    a native HTML event object

@example:
diagram.events.on("lineMouseDown", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("lineMouseDown", (id, event) => {
    console.log(id, event);
});

@template: api_event
@descr:

@relatedapi:
api/diagram_lineclick_event.md
api/diagram_linedblclick_event.md

@relatedsample:
https://snippet.dhtmlx.com/7h2hgb3g	Diagram. Events
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events


@changelog:
Added in v4.0
