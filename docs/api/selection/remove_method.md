---
sidebar_label: remove()
title: remove
description: text
---

# remove()

@short: unselects a previously selected item

@signature: {`remove(id?: Id): boolean`}

@params:
- `id: string | number` - optional, the item id

@returns:
`True` if the item is unselected, otherwise `false`.

@example:
diagram.selection.remove("1"); // -> true
diagram.paint();

@descr:
**Related sample**: [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)

{{note Please note that you need to call the paint() method to repaint the diagram after removing selection.}}

#### Related articles

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
