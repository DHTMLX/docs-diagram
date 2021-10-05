---
sidebar_label: groupClick
title: groupClick
description: text
---

# groupClick

@short: fires on clicking a group

@signature: {`groupClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a group
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("groupClick", (id, event) => {
    console.log(id, event);
});

@descr:
If a click is done over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
