---
sidebar_label: getItem()
title: getItem Method of Selection
description: You can learn about the getItem method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getItem()

### Description

@short: Returns the object of the selected item

### Usage

~~~js
getItem(): object;
~~~

### Returns

The method returns the object of a selected item

### Example

~~~js {7-8}
// diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

const shape = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner", …}
~~~

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)