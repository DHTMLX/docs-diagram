---
sidebar_label: exists()
title: exists Method of Data Collection
description: You can learn about the exists method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# exists()

### Description

@short: checks whether the specified item exists in the diagram

@descr:

### Usage

~~~js
exists(id: string | number): boolean;
~~~

### Parameters

- `id` - (mandatory) the id of the item in question

### Returns

The method returns `true` if the item exists, otherwise `false`

### Example

~~~js {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.exists("1"); 
~~~

