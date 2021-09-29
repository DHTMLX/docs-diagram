---
sidebar_label: remove()
title: remove
description: text
---

# remove()

@short: unselects a previously selected item

@signature: {`remove(id?: Id, subId?: Id): boolean`}

@params:
- `id: string | number` - optional, the item id

@returns:
`True` if the item is unselected, otherwise `false`.

@example:
diagram.selection.remove("1"); // -> true
diagram.paint();

@descr:
{{note Please note that you need to call the paint() method to repaint the diagram after removing selection.}}

@relatedapi:
api/selection/methods/add.md
api/selection/methods/getid.md
api/selection/methods/getitem.md

**Related sample**: [Diagram. Org chart item selection](https://snippet.dhtmlx.com/jyoxn5h7)

@related:
common_guides/manipulating_shapes.md#selectingshapes
common_guides/configuration.md#selectingshapes
