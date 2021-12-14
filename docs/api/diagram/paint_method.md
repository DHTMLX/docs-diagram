---
sidebar_label: paint()!
title: paint Method
description: You can learn about the paint method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# paint()

### Description

Repaints the diagram

### Usage

~~~jsx
paint: () => void;
~~~

### Example

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.parse(data);

diagram.paint();
~~~