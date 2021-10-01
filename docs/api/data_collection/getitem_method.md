---
sidebar_label: getItem()
title: getItem
description: text
---

# getItem()

@short: returns the object of an item by its id

@signature: {`getItem(id: Id): T;`}

@params:
`id: string | number` - the id of a selected item

@returns:
The object of an item.

@example:
var shape = diagram.data.getItem(123);

@descr:

You can access the original properties of an item like this:

~~~js
// accessing the properties of the shape
var shape = diagram.data.getItem(123);
var text = shape.text;
~~~

@related:
common_guides/manipulating_shapes.md#gettingshape