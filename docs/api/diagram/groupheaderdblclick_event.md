---
sidebar_label: groupHeaderDblClick
title: groupHeaderDblClick Event
description: You can learn about the groupHeaderDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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

@descr:
If a double-click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane.

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

@changelog:
Added in v4.0
