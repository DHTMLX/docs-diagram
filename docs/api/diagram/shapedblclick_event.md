---
sidebar_label: shapeDblClick
title: shapeDblClick Event
description: You can learn about the shapeDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeDblClick

### Description

@short: Fires on double-clicking a shape

### Usage

~~~js
shapeDblClick: (
	id: string | number, 
	event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the shape id
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
diagram.events.on("shapeDblClick", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '"double-clicked');
});
~~~

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
