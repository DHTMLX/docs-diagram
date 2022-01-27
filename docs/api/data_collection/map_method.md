---
sidebar_label: map()
title: map Method of Data Collection
description: You can learn about the map method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# map()

### Description

@short: iterates through all items of the diagram

@descr:

### Usage

~~~js
map(callback: DataCallback<T>): T[];
~~~

### Parameters

- `callback` - (mandatory) a callback function that will be called for each item of a diagram

### Returns

A new array of items where each item is the result of the callback function.

### Example

~~~js
//getting ids of all items of the diagram (shapes, links, groups, swimlanes)
diagram.data.map(function(item){
    console.log(item.id);
});
~~~
