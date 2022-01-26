---
sidebar_label: update()
title: update Method of Data Collection
description: You can learn about the update method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# update()

### Description

@short: updates properties of the item

### Usage

~~~js
updateUrl?: (id: string | number, newItem: IUpdateObject) => void;
~~~

### Parameters


- `id: string | number` - the id of the item which needs to be updated
- `newItem: object` - a hash of properties which need to be updated

### Example

~~~js
diagram.data.update(123, { text:"New text" });
~~~

The command can't be used to change the *id* or *type* of the item.

**Related articles**:  [Updating an item](../../../guides/manipulating_items/#updating-an-item)
