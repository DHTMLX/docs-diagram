---
sidebar_label: lineTitleMouseDown
title: lineTitleMouseDown Event
description: You can learn about the lineTitleMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineTitleMouseDown

### Description

@short: fires when a pointing device button is pressed while the pointer is over a text element of a line
### Usage

~~~js
lineTitleMouseDown: ( 
	lineId: string | number, 
	titleId: string | number, 
	event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `lineId` - (mandatory) the id of a line
- `titleId` - (mandatory) the id of a text element of a line
- `event` - (mandatory) a native HTML event object

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("lineTitleMouseDown", (lineId, titleId, event) => {
	console.log("lineTitleMouseDown");
});
~~~

**Change log**: Added in v4.1

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)