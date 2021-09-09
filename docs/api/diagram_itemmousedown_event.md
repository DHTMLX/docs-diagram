itemMouseDown
=============

@short: fires when a pointing device button is pressed while the pointer is over an item

@params:
- id        string|number   the id of an item
- event     MouseEvent      a native HTML event object

@example:
diagram.events.on("itemMouseDown", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemMouseDown", (id, event) => {
    console.log(id, event);
});

@template: api_event
@descr:
If a pointing device button is pressed while the pointer is over a swimlane, the event will be fired on the cell of the swimlane.

@relatedapi:
api/diagram_itemclick_event.md
api/diagram_itemdblclick_event.md
api/diagram_itemmouseout_event.md
api/diagram_itemmouseover_event.md

@relatedsample:
https://snippet.dhtmlx.com/7h2hgb3g	Diagram. Events
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events

@changelog:
Added in v4.0
