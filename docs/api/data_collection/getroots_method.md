---
sidebar_label: getRoots()
title: getRoots Method of Data Collection
description: You can learn about the getRoots method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getRoots()

### Description

@short: returns an array with ids of all root items of the diagram

@descr:

### Usage

~~~js
getRoots(): array
~~~

### Returns

An array with the ids of the root items

### Example

~~~js {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoots();
~~~

**Change log**: Added in v4.0
