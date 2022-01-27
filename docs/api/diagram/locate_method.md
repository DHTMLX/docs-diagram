---
sidebar_label: locate()
title: locate Method
description: You can learn about the locate method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# locate()

### Description

@short: gets the ID of an item from the specified HTML event or tag
@descr:


### Usage

~~~jsx
locate(event: object): any;
~~~

### Parameters

- `event: object` - (mandatory) a native event object

### Returns

The method returns the ID of the shape that the event/tag relates to

### Example

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.parse(data);

const id = diagram.locate(event);
~~~