---
sidebar_label: remove()
title: remove Method of Data Collection
description: You can learn about the remove method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# remove()

### Description

@short: deletes the specified item from the diagram

### Usage

~~~js
remove(id: Id | Id[]): void;
~~~

### Parameters

- `id: string | number | array` - the ids of the items that should be deleted

### Example

~~~js
diagram.data.remove("2");
~~~


**Related sample**: [Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)

@descr:
If the diagram is initialized in the org (*type: "org"*) or mindmap (*type: "mindmap"*) mode, deleting a shape will remove the link to this shape and all child shapes as well.

**Related articles**:  [Deleting items](../../../guides/manipulating_items/#deleting-items)
