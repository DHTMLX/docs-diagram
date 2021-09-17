---
sidebar_label: itemClick
title: itemClick
description: text
---

# itemClick

@short: fires on clicking an item

@params:
- `id: string | number` - the id of an item
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});

@template: api_event
@descr:
If a click is done over a swimlane, the event will be fired on the cell of the swimlane.

@relatedapi:
api/diagram_itemdblclick_event.md
api/diagram_itemmousedown_event.md
api/diagram_itemmouseout_event.md
api/diagram_itemmouseover_event.md

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
