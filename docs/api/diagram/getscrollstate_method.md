---
sidebar_label: getScrollState()
title: getScrollState
description: text
---

# getScrollState()

@short: returns the position of the diagram inner scroll

@signature: {`getScrollState(): ICoords;`}

@returns:
An object which stores positions of scrolls.

@example:

var state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );

@relatedsample:
**Related sample**: [Diagram. Scroll content](https://snippet.dhtmlx.com/f970hbym)

@descr:

A resulting object has two properties:

- **x**	- horizontal scroll position
- **y** - vertical scroll position

**Related articles**

common_guides/configuration.md#scrollingdiagram
