---
sidebar_label: filter
title: filter Event of Data Collection
description: You can learn about the filter event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# filter

### Description

@short: fires after filtering a data collection 

### Usage

~~~jsx
filter: (filter?: object) => void;
~~~

### Parameters

The callback of the **filter** event is called with the following parameter:

- `object: {key: object }` - an object with all the active filters, where
    - `key` - the id of an active filter
    - `object` - an object with the [**rule** and **config** properties](api/data_collection/filter_method.md#parameters)

:::info
For handling the inner events of Diagram Data Collection you can use the **on()** method.
:::

### Example

~~~jsx {7-9}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.events.on("filter", (filter) => {
    console.log("Items were filtered");
});
~~~
