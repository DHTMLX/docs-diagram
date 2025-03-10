---
sidebar_label: getId()
title: getId Method of Data Collection
description: You can learn about the getId method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getId()

### Description

@short: Returns the id of the item by its index

### Usage

~~~jsx
getId(index: number): string | number;
~~~

### Parameters

- `index` - (required) the index of the item

### Returns

The method returns the id of the item

### Example

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const id = diagram.data.getId(0); // -> returns "1"
~~~
