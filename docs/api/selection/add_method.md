---
sidebar_label: add()
title: add
description: text
---

# add

@short: selects the specified item

@signature: {``}

@params:
- id		string,number		the item id


@example:
// diagram must be created with the "select:true" option
var diagram = new dhx.Diagram("diagram_container", { select: true });
diagram.data.parse(data);

diagram.selection.add("2");


@descr:


@relatedapi:
	api/selection/methods/remove.md
	api/selection/methods/getid.md
    api/selection/methods/getitem.md
	
@relatedsample:	https://snippet.dhtmlx.com/jyoxn5h7	Diagram. Org chart item selection

@related:
	common_guides/manipulating_shapes.md#selectingshapes
	common_guides/configuration.md#selectingshapes