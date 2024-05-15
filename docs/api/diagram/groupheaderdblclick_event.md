---
sidebar_label: groupHeaderDblClick
title: groupHeaderDblClick Event
description: You can learn about the groupHeaderDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupHeaderDblClick

### Description

@short: Fires on double-clicking a header of a group

If a double-click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane

### Usage

~~~jsx
groupHeaderDblClick: (
    id: string | number, 
    event: MouseEvent, 
    subHeaderId?: string
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the id of a group
- `event` - (required) a native HTML event object
- `subHeaderId` - (optional) the id of a subheader of a swimlane

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("groupHeaderDblClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event handling](../../../guides/event_handling/)
