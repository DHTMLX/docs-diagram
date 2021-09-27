---
sidebar_label: getId()
title: getId
description: text
---

# getId()

@short: returns the id of a selected item

@signature: {`getId(): Id;`}

@returns:

- id	string,number	the id of a selected item

@example:

var id = diagram.selection.getId(); // -> "2"


@descr:

@relatedapi:
	api/selection/methods/add.md
    api/selection/methods/getitem.md
	api/selection/methods/remove.md
    
@related:
	common_guides/manipulating_shapes.md#selectingshapes
	common_guides/configuration.md#selectingshapes