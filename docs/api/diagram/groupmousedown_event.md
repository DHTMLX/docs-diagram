---
sidebar_label: groupMouseDown
title: groupMouseDown
description: text
---

# groupMouseDown

@short: fires when a pointing device button is pressed while the pointer is over a group

@params:
- `id: string | number` - the id of a group
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("groupMouseDown", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("groupMouseDown", (id, event) => {
    console.log(id, event);
});

@template: api_event
@descr:
If a pointing device button is pressed while the pointer is over a swimlane, the event will be fired on the cell of the swimlane.

@relatedapi:
api/diagram_groupclick_event.md
api/diagram_groupdblclick_event.md
api/diagram_groupheaderclick_event.md
api/diagram_groupheaderdblclick_event.md

@changelog:
Added in v4.0
