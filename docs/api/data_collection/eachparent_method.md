---
sidebar_label: eachParent()
title: eachParent Method of Data Collection
description: You can learn about the eachParent method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# eachParent()

### Description

@short: iterates through all parents of the specified item

### Usage

~~~js
eachParent(
    id: string | number, 
    callback: function, 
    self?: boolean
): void
~~~

### Parameters

- `id` - (mandatory) the id of the item
- `callback` - (mandatory) a callback function that will be applied to each parent of the item
- `self` - (optional) defines whether the callback function should iterate over the specified item itself; *false* by default

### Example

~~~js {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachParent("id_1.1.1", (item) => {
    console.log(item);
}, false);
~~~

**Change log**: Added in v4.0
