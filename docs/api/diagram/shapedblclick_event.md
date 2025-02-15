---
sidebar_label: shapeDblClick
title: shapeDblClick Event
description: You can learn about the shapeDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeDblClick

### Description

@short: Fires on double-clicking a shape

### Usage

~~~jsx
shapeDblClick: (
    id: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the shape id
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
diagram.events.on("shapeDblClick", (id) => {
    console.log('An item "' + diagram.data.getItem(id).text + '"double-clicked');
});
~~~

**Related article**: [Event handling](../../../guides/event_handling/)
