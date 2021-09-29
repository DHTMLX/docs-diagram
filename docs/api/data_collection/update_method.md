---
sidebar_label: update()
title: update
description: text
---

# update()

@short: updates properties of the item

@signature: {`update(id: Id, newItem: IUpdateObject, silent?: boolean): void;`}

@params:

- id			string,number		the id of the item which needs to be updated
- config		hash				a hash of properties which need to be updated

@example:
diagram.data.update(123, { text:"New text" });


@descr:

The command can't be used to change the *id* or *type* of the shape.

@relatedapi:
	api/data/methods/add.md
	api/data/methods/remove.md
    api/data/methods/getitem.md
    
@related:
common_guides/manipulating_shapes.md#updatingshape