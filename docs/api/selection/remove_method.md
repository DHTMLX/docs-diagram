---
sidebar_label: remove()
title: remove Method of Selection
description: You can learn about the remove method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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
**Related samples**: 

- [Diagram. Org chart mode. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)

{{note Please note that you need to call the paint() method to repaint the diagram after removing selection.}}

#### Related articles

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
