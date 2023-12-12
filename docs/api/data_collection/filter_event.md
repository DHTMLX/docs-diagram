---
sidebar_label: filter!!
title: filter Event of Data Collection
description: You can learn about the filter event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!filter

### Description

@short: fires after filtering a data collection 

### Usage

~~~js
filter: (filter?: object) => void;
~~~

### Parameters

- `object: { [key: string]: object }` - an object with all the active filters, where
	- `key: string` - the id of an active filter
	- `object` - an object with the [**rule** and **config** properties](api/data_collection/filter_method.md#parameters)

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});

// loading data
diagram.data.parse(data);

diagram.events.on("filter", function(filter) {
    console.log("Items were filtered");
});
~~~