---
sidebar_label: groupMouseDown
title: groupMouseDown Event
description: text
---

# groupMouseDown

@short: fires when a pointing device button is pressed while the pointer is over a group

@signature: {`groupMouseDown: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a group
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("groupMouseDown", (id, event) => {
    console.log(id, event);
});

@descr:
If a pointing device button is pressed while the pointer is over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
