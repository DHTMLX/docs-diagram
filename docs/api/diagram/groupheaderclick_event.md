---
sidebar_label: groupHeaderClick
title: groupHeaderClick
description: text
---

# groupHeaderClick

@short: fires on clicking a header of a group

@signature: {``}

@params:
- `id: string | number` - the id of a group
- `event: MouseEvent` - a native HTML event object
- `subHeaderId: string` - optional, the id of a subheader of a swimlane

@example:
diagram.events.on("groupHeaderClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
// For diagram editor
editor.diagram.events.on("groupHeaderClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});


@descr:
If a click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane.

@relatedapi:
api/diagram_groupclick_event.md
api/diagram_groupdblclick_event.md
api/diagram_groupheaderdblclick_event.md
api/diagram_groupmousedown_event.md

@changelog:
Added in v4.0
