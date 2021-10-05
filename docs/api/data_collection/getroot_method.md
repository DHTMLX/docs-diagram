---
sidebar_label: getRoot()
title: getRoot
description: text
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
