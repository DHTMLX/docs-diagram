---
sidebar_label: includes()!!
title: includes Method of Selection
description: You can learn about the includes method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# includes()

### Description

@short: Checks whether an element is in the selection list

### Usage

~~~js
includes({
    id: string | number
}): boolean;
~~~

### Parameters

The method takes as an argument an object with the following parameters:

- `id` - (required) the id of the checked item

### Returns

The method returns `true` if the element is in the selected list, otherwise `false`

### Example

~~~jsx {9-10}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
// loading data
diagram.data.parse(data);

diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // returns true
diagram.selection.includes({ id: "4" }) // returns false
~~~

**Change log**: 

The method was added in v6.0

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related samples**:

TODO - check links to snippets

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)