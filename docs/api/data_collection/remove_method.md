---
sidebar_label: remove()
title: remove Method of Data Collection
description: You can learn about the remove method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# remove()

### Description

@short: Deletes the specified item from the diagram

:::note
If the diagram is initialized in the org (*type: "org"*) or mindmap (*type: "mindmap"*) mode, deleting a shape will remove the link to this shape and all child shapes as well
:::

### Usage

~~~js
remove(id: string | number | array): void;
~~~

### Parameters

- `id` - (mandatory) the id(s) of the items that should be deleted

### Example

~~~js {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.remove("2");
~~~

**Related articles**:  [Deleting items](../../../guides/manipulating_items/#deleting-items)

**Related sample**: [Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)