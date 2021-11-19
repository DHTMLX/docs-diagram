---
sidebar_label: getScrollState()
title: getScrollState Method
description: You can learn about the getScrollState method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getScrollState()

@short: returns the position of the diagram inner scroll

@signature: {`getScrollState(): ICoords;`}

@returns:
An object which stores positions of scrolls.

@example:

const state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );

@relatedsample:
**Related sample**: [Diagram. Scroll content](https://snippet.dhtmlx.com/f970hbym)

@descr:

A resulting object has two properties:

- **x**	- horizontal scroll position
- **y** - vertical scroll position

#### Related articles

[Scrolling Diagram](../../../guides/diagram/scrolling_diagram/)
