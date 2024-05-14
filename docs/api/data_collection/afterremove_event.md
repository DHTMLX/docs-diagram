---
sidebar_label: afterRemove
title: afterRemove Event of Data Collection
description: You can learn about the afterRemove event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterRemove

### Description

@short: Fires after removing an item from a data collection

### Usage

~~~jsx
afterRemove: (removedItem: object) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `removedItem` - (required) the object of a removed item

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterRemove", function(newItem){
    console.log("afterRemove "+ item);
});
~~~
