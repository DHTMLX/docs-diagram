---
sidebar_label: afterAdd
title: afterAdd Event of Data Collection
description: You can learn about the afterAdd event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterAdd

### Description

@short: Fires after adding an item

### Usage

~~~js
afterAdd: (newItem: object) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `newItem` - (required) the object of an added item

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterAdd", function(newItem){
	console.log("A new item is added");
});
~~~

The event can be used to provide default values or a default formatting for the item's data