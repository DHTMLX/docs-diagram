---
sidebar_label: getIndex()
title: getIndex Method of Data Collection
description: You can learn about the getIndex method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getIndex()

### Description

@short: Returns the index of the item by its id

### Usage

~~~js
getIndex(id: string | number): number;
~~~

### Parameters

- `id` - (mandatory) the id of the item

### Returns

The index of the item

### Example

~~~js {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const index = diagram.data.getIndex("1"); // -> returns 0
~~~