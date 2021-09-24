---
sidebar_label: getScrollState()
title: getScrollState
description: text
---

# getScrollState()

@short: returns the position of the diagram inner scroll

@signature: {``}

@returns:
An object which stores positions of scrolls.

@example:

var state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );


@descr:

A resulting object has two properties:

- **x**	- horizontal scroll position
- **y** - vertical scroll position

@relatedapi:
	api/diagram_scrollto.md
	api/diagram_showitem.md


@relatedsample:
https://snippet.dhtmlx.com/f970hbym	Diagram. Scroll content


@related:
common_guides/configuration.md#scrollingdiagram