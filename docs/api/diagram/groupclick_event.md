---
sidebar_label: groupClick
title: groupClick Event
description: You can learn about the groupClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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
