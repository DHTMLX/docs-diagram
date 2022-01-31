---
sidebar_label: add()
title: add Method of Selection
description: You can learn about the add method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# add

### Description

@short: selects the specified item

@descr:

### Usage

~~~js
add(
    id: string | number, 
    subId?: string | number
): void;
~~~

### Parameters

- `id` - (mandatory) the item id
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Example

~~~js
// diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

diagram.selection.add("2");
~~~

**Related articles**:  
- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related samples**:

- [Diagram. Org chart mode. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)