---
sidebar_label: add()
title: add Method of Data Collection
description: You can learn about the add method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# add()

@short: adds a new item to the diagram

@signature: {`add(new_item: IDataItem | IDataItem[]): Id | Id[];`}

@params:
`new_item: object | array` - the object of a new item or an array of item objects

@returns: 
Either a string with the item's id or an array of string values with ids of items.

@example:
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" });

@relatedsample:
**Related sample**: [Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)

@descr:

## Details

There are two ways to link shapes, you can add a shape with a parent ID defined:

~~~js
diagram.data.add({ id: "3.2", text: "New Item", type: "card", parent: "3" });
~~~

or you can add a shape and a connector line objects:

~~~js
diagram.data.add({ type: "card", id: "3.2", text: "New Item" });
diagram.data.add({ type: "line",  from: "3", to: "3.2" });
~~~


#### Related articles

[Adding an item](../../../guides/manipulating_items/#adding-an-item)
