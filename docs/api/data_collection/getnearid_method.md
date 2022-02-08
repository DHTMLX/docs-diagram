---
sidebar_label: getNearId()
title: getNearId Method of Data Collection
description: You can learn about the getNearId method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getNearId()

### Description

@short: Looks for a nearest item relative to the specified one

### Usage

~~~js
getNearId(id: string | number): string | number;
~~~

### Parameters

- `id` - (mandatory) the id of an item

### Returns

The method returns the id of the nearest item

### Example

~~~js {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const nearId = diagram.data.getNearId(id);
~~~
