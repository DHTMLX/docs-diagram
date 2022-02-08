---
sidebar_label: shapeIconClick
title: shapeIconClick Event
description: You can learn about the shapeIconClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeIconClick

### Description

@short: Fires on clicking a toolbar icon

### Usage

~~~js
shapeIconClick: (
	id: string | number, 
	event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of the icon
- `event` - (mandatory) a native HTML event object

### Example

~~~js {18-21}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", { 
	toolbar: [
      	{
			id: "download",
            content: "<i class='dxi dxi-download'></i>"
	  	},
	  	{
			id: "info",
            content: "<i class='dxi dxi-information-outline'></i>"
	  	}
    ]
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("shapeIconClick", function(icon){
	const id = diagram.selection.getId();
	alert(icon + " was clicked for id = " + id);
});
~~~

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related sample**: [Diagram. Configuration. Per-shape toolbar](https://snippet.dhtmlx.com/4if395hd)