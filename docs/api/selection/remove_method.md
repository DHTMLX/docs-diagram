---
sidebar_label: remove()
title: remove Method of Selection
description: You can learn about the remove method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# remove()

### Description

@short: Unselects a previously selected item

### Usage

~~~js
remove(
    id?: string | number, 
    subId?: string | number
): boolean
~~~

### Parameters

- `id` - (optional) the item id
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Returns

The method returns `true` if the item is unselected, otherwise `false`

### Example

~~~js {7-8}
// diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

diagram.selection.remove("1"); // -> true
diagram.paint();
~~~

{{note Please note that you need to call the **paint()** method to repaint the diagram after removing selection.}}

**Related articles**:  
- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)