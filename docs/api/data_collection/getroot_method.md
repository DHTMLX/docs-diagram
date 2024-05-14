---
sidebar_label: getRoot()
title: getRoot Method of Data Collection
description: You can learn about the getRoot method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getRoot()

### Description

@short: Returns the id of the root item by the id of its child

### Usage

~~~js
getRoot(id: string | number): string | number;
~~~

### Parameters

- `id` - (required) the id of the child item

### Returns

The method returns the id of the root item. The root item is the first item of a tree structure

### Example

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoot("id_1.1.1"); // -> "id_1"
~~~

**Change log**: Added in v4.0
