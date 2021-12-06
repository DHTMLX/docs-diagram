---
sidebar_label: groupDblClick
title: groupDblClick Event
description: You can learn about the groupDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

@changelog:
Added in v4.0
