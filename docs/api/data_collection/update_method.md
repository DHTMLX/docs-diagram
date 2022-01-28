---
sidebar_label: update()
title: update Method of Data Collection
description: You can learn about the update method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# update()

### Description

@short: updates properties of the item

@descr:

:::note
The method can't be used to change the *id* or *type* of the item
:::

### Usage

~~~js
update(
    id: string | number, 
    newItem: object
): void;
~~~

### Parameters

- `id` - (mandatory) the id of the item which needs to be updated
- `newItem` - (mandatory) a hash of properties which need to be updated

### Example

~~~js
diagram.data.update(123, { text:"New text" });
~~~

**Related articles**:  [Updating an item](../../../guides/manipulating_items/#updating-an-item)
