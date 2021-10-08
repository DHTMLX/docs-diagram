---
sidebar_label: remove()
title: remove
description: text
---

# remove()

@short: deletes the specified item from the diagram

@signature: {`remove(id: Id | Id[]): void;`}

@params:
- `id: string | number | array` - the ids of the items that should be deleted

@example:

diagram.data.remove("2");

@relatedsample:
**Related sample**: [Diagram. Org chart add/delete item](https://snippet.dhtmlx.com/8wi20uop)

@descr:
If the diagram is initialized in the org (*type: "org"*) or mindmap (*type: "mindmap"*) mode, deleting a shape will remove the link to this shape and all child shapes as well.

#### Related articles

[Deleting items](../../../guides/manipulating_items/#deleting-items)
