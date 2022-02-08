---
sidebar_label: scrollTo()
title: scrollTo Method
description: You can learn about the scrollTo method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# scrollTo()

### Description

@short: Sets the inner scroll of the diagram to the specified position

### Usage

~~~jsx
scrollTo(x: number, y: number): void;
~~~

### Parameters

- `x` - (mandatory) horizontal scroll position
- `y` - (mandatory) vertical scroll position

### Example

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.scrollTo(100, 80);
~~~

**Related articles:** [Scrolling Diagram](../../../guides/diagram/scrolling_diagram/)
