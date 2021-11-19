---
sidebar_label: groupHeaderClick
title: groupHeaderClick Event
description: You can learn about the groupHeaderClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupHeaderClick

@short: fires on clicking a header of a group

@signature: {`groupHeaderClick: (id: Id, event: MouseEvent, subHeaderId?: string) => void;`}

@params:
- `id: string | number` - the id of a group
- `event: MouseEvent` - a native HTML event object
- `subHeaderId: string` - optional, the id of a subheader of a swimlane

@example:
diagram.events.on("groupHeaderClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});

@descr:
If a click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane.

@changelog:
Added in v4.0
