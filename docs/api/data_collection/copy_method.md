---
sidebar_label: copy()
title: copy Method of Data Collection
description: You can learn about the copy method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# copy()

### Description

@short: Creates a copy of an item at the defined position

### Usage

~~~jsx
copy(
    id: string | number | array,
    index: number, 
    target?: object
): string | number | array;
~~~

### Parameters

- `id` - (required) the id(s) of an item(s) to copy
- `index` - (required) the index to create a copy at
- `target` - (optional) the target data collection object

### Returns

The method returns the item's id or an array with ids of items

### Example

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.copy("4",5); // copies the shape with id=4 to the position with index 5
~~~
