---
sidebar_label: getItem()
title: getItem Method of Selection
description: You can learn about the getItem method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getItem()

### Description

@short: returns the object of the selected item

@descr:

### Usage

~~~js
getItem(): any;
~~~

### Returns

The object of a selected item.

### Example

~~~js
const shape = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner", …}
~~~

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
