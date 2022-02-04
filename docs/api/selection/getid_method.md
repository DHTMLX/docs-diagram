---
sidebar_label: getId()
title: getId Method of Selection
description: You can learn about the getId method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getId()

### Description

@short: returns the id of the selected item

### Usage

~~~js
getId(): string | number;
~~~

### Returns

The method returns the id of the selected item

### Example

~~~js {7}
// diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

const id = diagram.selection.getId(); // -> "2"
~~~

**Related articles**:  
- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)