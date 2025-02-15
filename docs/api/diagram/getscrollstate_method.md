---
sidebar_label: getScrollState()
title: getScrollState Method
description: You can learn about the getScrollState method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getScrollState()

### Description

@short: Returns the position of the diagram inner scroll

### Usage

~~~jsx
getScrollState(): object;
~~~

### Returns

The method returns an object which stores positions of scrolls. It includes two properties:

- `x` - horizontal scroll position
- `y` - vertical scroll position

### Example

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );
~~~

**Related articles**: [Scrolling Diagram](../../../guides/diagram/scrolling_diagram/)

**Related sample**: [Diagram. Scroll content](https://snippet.dhtmlx.com/f970hbym)
