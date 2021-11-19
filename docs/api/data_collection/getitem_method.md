---
sidebar_label: getItem()
title: getItem Method of Data Collection
description: You can learn about the getItem method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getItem()

@short: returns the object of an item by its id

@signature: {`getItem(id: Id): T;`}

@params:
`id: string | number` - the id of a selected item

@returns:
The object of an item.

@example:
const shape = diagram.data.getItem(123);

@descr:

You can access the original properties of an item like this:

~~~js
// accessing the properties of the shape
const shape = diagram.data.getItem(123);
const text = shape.text;
~~~

#### Related articles

[Getting an item](../../../guides/manipulating_items/#getting-an-item)
