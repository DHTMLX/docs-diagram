---
sidebar_label: lineTitleDblClick
title: lineTitleDblClick Event
description: You can learn about the lineTitleDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineTitleDblClick

### Description

@short: Fires on double-clicking a text element of a line

### Usage

~~~js
lineTitleDblClick: (
    lineId: string | number, 
    titleId: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `lineId` - (required) the id of a line
- `titleId` - (required) the id of a text element of a line
- `event` - (required) a native HTML event object

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("lineTitleDblClick", (lineId, titleId, event) => {
    console.log("lineTitleDblClick");
});
~~~

**Change log**: Added in v4.1

**Related article**: [Event handling](../../../guides/event_handling/)

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

