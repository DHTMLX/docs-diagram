---
sidebar_label: beforeAdd
title: beforeAdd Event of Data Collection
description: You can learn about the beforeAdd event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeAdd

### Description

@short: fires before adding an item

### Usage

~~~js
beforeAdd: (newItem: object) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `newItem` - (mandatory) the object of an added item

### Returns

Return `false` to prevent adding an item into a data collection; otherwise, `true`

### Example

~~~js {9-13}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeAdd", function(newItem){
	if (some_check)
		return false;
	return true;
});
~~~