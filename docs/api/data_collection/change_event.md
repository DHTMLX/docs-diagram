---
sidebar_label: change
title: change Event of Data Collection
description: You can learn about the change event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# change

### Description

@short: Fires on changes in the dataset of the diagram

### Usage

~~~js
change: (
	id?: string, 
	status?: "add" | "update" | "delete", 
	updatedItem?: object
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (optional) the id of the changed item
- `status` - (optional) the status of the change: "add", "update", "delete"
- `updatedItem` - (optional) the object of the changed item

:::info
There are cases when the handler function doesn't take any parameters, e.g. while a data set is parsed into the diagram where all shapes are removed
:::

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("change", function (id, status, shape) {
	console.log("The " + id + " has been " + status);
});
~~~
