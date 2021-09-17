---
sidebar_label: remove()
title: remove
description: text
---

# remove()

@short: deletes the specified item from the diagram

@params:
- id 		string,number			the id of the item that should be deleted

@example:

diagram.data.remove("2");


@template: api_method
@descr:
In case of organogram, deleting a shape will remove the link to this shape and all child shapes as well.

@relatedsample:	https://snippet.dhtmlx.com/8wi20uop	Diagram. Org chart add/delete item

@relatedapi:
api/data/methods/add.md
api/data/methods/removeall.md

@related:
    common_guides/manipulating_shapes.md#deletingshapes