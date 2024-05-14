---
sidebar_label: groupMouseDown
title: groupMouseDown Event
description: You can learn about the groupMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupMouseDown

### Description

@short: Fires when a pointing device button is pressed while the pointer is over a group

If a pointing device button is pressed while the pointer is over a swimlane, the event will be fired on the cell of the swimlane

### Usage

~~~js
groupMouseDown: (
    id: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the id of a group
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
diagram.events.on("groupMouseDown", (id, event) => {
    console.log(id, event);
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event handling](../../../guides/event_handling/)

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

