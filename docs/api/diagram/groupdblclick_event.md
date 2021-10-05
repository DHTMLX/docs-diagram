---
sidebar_label: groupDblClick
title: groupDblClick
description: text
---

# groupDblClick

@short: fires on double-clicking a group

@signature: {`groupDblClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a group
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("groupDblClick", (id, event) => {
    console.log(id, event);
});

@descr:
If a double-click is done over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
