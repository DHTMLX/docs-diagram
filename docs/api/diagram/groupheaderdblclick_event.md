---
sidebar_label: groupHeaderDblClick
title: groupHeaderDblClick
description: text
---

# groupHeaderDblClick

@short: fires on double-clicking a header of a group

@signature: {`groupHeaderDblClick: (id: Id, event: MouseEvent, subHeaderId?: string) => void;`}

@params:
- `id: string | number` - the id of a group
- `event: MouseEvent` - a native HTML event object
- `subHeaderId: string` - optional, the id of a subheader of a swimlane

@example:
diagram.events.on("groupHeaderDblClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
// For diagram editor
editor.diagram.events.on("groupHeaderDblClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});

@descr:
If a double-click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane.

@changelog:
Added in v4.0
