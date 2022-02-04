---
sidebar_label: groupHeaderClick
title: groupHeaderClick Event
description: You can learn about the groupHeaderClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupHeaderClick

### Description

@short: fires on clicking a header of a group

If a click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane

### Usage

~~~js
groupHeaderClick: (
    id: string | number,
    event: MouseEvent, 
    subHeaderId?: string
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of a group
- `event` - (mandatory) a native HTML event object
- `subHeaderId` - (optional) the id of a subheader of a swimlane

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("groupHeaderClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

