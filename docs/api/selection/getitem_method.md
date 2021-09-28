---
sidebar_label: getItem()
title: getItem
description: text
---

# getItem()

@short: returns the object of the selected item

@signature: {`getItem(): any;`}

@returns:
The object of a selected item.

@example:
var shape = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner", …}

@descr:
Check all available properties of shapes, groups and swimlanes objects in [Diagram](diagram_guides/shapes_arrows_list.md#shapeattrs) and in [Org Chart](orgchart_guides/orgchart_shapes_types.md#shapeattrs).

@relatedapi:
- api/selection/methods/add.md
- api/selection/methods/getid.md
- api/selection/methods/remove.md

@related:
common_guides/manipulating_shapes.md#selectingshapes
common_guides/configuration.md#selectingshapes
