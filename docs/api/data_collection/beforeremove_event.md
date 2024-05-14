---
sidebar_label: beforeRemove
title: beforeRemove Event of Data Collection
description: You can learn about the beforeRemove event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeRemove

### Description

@short: Fires after removing an item from a data collection

### Usage

~~~jsx
beforeRemove: (removedItem: any) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `removedItem` - (required)  the object of an item to remove

### Returns

Return `false` to block removing an item from a data collection; otherwise, `true`.

### Example

~~~jsx {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeRemove", function(newItem){
    console.log("beforeRemove "+ item);
    return true;
});
~~~