---
sidebar_label: remove()
title: remove
description: text
---

# remove()

@short: unselects a previously selected item

@params:
- id		string,number		optional, the item id

@returns:
- result		boolean			<i>true</i> if the item is unselected, otherwise <i>false</i>

@example:
diagram.selection.remove("1"); // -> true
diagram.paint();


@template:	api_method
@descr:
{{note Please note that you need to call the paint() method to repaint the diagram after removing selection.}}

@relatedapi:
	api/selection/methods/add.md
	api/selection/methods/getid.md
    api/selection/methods/getitem.md

@relatedsample:	https://snippet.dhtmlx.com/jyoxn5h7	Diagram. Org chart item selection

@related:
	common_guides/manipulating_shapes.md#selectingshapes
	common_guides/configuration.md#selectingshapes

