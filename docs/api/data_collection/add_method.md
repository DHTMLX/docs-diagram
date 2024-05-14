---
sidebar_label: add()
title: add Method of Data Collection
description: You can learn about the add method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# add()

### Description

@short: Adds a new item to the diagram

### Usage

~~~jsx
add(new_item: object | array): string | number | array;
~~~

### Parameters

- `new_item` - (required) the object of a new item or an array of item objects

### Returns
 
The method returns the item's id or an array with ids of items

### Example

There are two ways to link shapes. You can add a shape with a parent ID defined:

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});
diagram.data.parse(data);

diagram.data.add({ id: "3.2", text: "New Item", type: "card", parent: "3" });
~~~

or you can add a shape and a connector line objects:

~~~jsx {2,6-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.add({ type: "card", id: "3.2", text: "New Item" });
diagram.data.add({ type: "line",  from: "3", to: "3.2" });
~~~

**Related articles**:  [Adding an item](../../../guides/manipulating_items/#adding-an-item)

**Related sample**: [Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)