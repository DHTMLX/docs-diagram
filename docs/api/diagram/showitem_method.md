---
sidebar_label: showItem()!
title: showItem Method
description: You can learn about the showItem method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# showItem()

### Description

Adjusts scroll to make the target item visible

### Usage

~~~jsx
showItem: (id: string | number) => void;
~~~

### Parameters

`id: string | number` - the **ID** of the target item

### Example

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.parse(data);

diagram.showItem(123);
~~~

**Related sample:** [Diagram. Shape search](https://snippet.dhtmlx.com/d7kvzq4r)
