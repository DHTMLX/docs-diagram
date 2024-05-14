---
sidebar_label: eachChild()
title: eachChild Method of Data Collection
description: You can learn about the eachChild method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# eachChild()

### Description

@short: Iterates through the children of the specified item

### Usage

~~~js
eachChild(
    id: string | number, 
    callback: function, 
    isTree?: boolean
): void;
~~~

### Parameters

- `id` - (required) the id of the item
- `callback` - (required) a callback function that will be applied to each child of the item
- `isTree` - (optional) defines, whether the function should iterate through all children (of any level) of the specified item. If *false*, the function will iterate only through the first-level children of the item; *true* by default.

### Example

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachChild("id_1", (item) => {
    console.log(item);
}, true);
~~~

**Change log**: Added in v4.0
