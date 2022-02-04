---
sidebar_label: lineClick
title: lineClick Event
description: You can learn about the lineClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineClick

### Description

@short: fires on clicking a connector line

### Usage

~~~js
lineClick: (
    id: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of a connector line
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
diagram.events.on("lineClick", function(id, events) {
    console.log(id);
});
~~~

**Change log**: Added in v3.0

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

