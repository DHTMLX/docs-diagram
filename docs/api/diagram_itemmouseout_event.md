itemMouseOut
============

@short: fires when a pointing device is out of an item

@params:
- id        string|number   the id of an item
- event     MouseEvent      a native HTML event object

@example:
diagram.events.on("itemMouseOut", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemMouseOut", (id, event) => {
    console.log(id, event);
});

@template: api_event
@descr:

@relatedapi:
api/diagram_itemclick_event.md
api/diagram_itemdblclick_event.md
api/diagram_itemmousedown_event.md
api/diagram_itemmouseover_event.md

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
