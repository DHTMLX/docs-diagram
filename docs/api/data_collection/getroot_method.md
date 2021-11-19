---
sidebar_label: getRoot()
title: getRoot Method of Data Collection
description: You can learn about the getRoot method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getRoot()

@short: returns the id of the root item by the id of its child

@signature: {`getRoot(id: Id): Id;`}

@params:
`id: string | number` - the id of the child item

@returns:
The id of the root item.

@example:
diagram.data.getRoot("id_1.1.1"); -> "id_1"

@descr:

The root item is the first item of a tree structure.

@changelog:
Added in v4.0
