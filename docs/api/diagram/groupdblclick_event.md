---
sidebar_label: groupDblClick
title: groupDblClick
description: text
---

# groupDblClick

@short: fires on double-clicking a group

@params:
- id        string|number   the id of a group
- event     MouseEvent      a native HTML event object

@example:
diagram.events.on("groupDblClick", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("groupDblClick", (id, event) => {
    console.log(id, event);
});

@template: api_event
@descr:
If a double-click is done over a swimlane, the event will be fired on the cell of the swimlane.

@relatedapi:
api/diagram_groupclick_event.md
api/diagram_groupheaderclick_event.md
api/diagram_groupheaderdblclick_event.md
api/diagram_groupmousedown_event.md

@changelog:
Added in v4.0
