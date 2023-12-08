---
sidebar_label: getSubId()
title: getSubId Method of Selection
description: You can learn about the getSubId method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getSubId()

### Description

@short: Returns the subId (if any) of the selected item

### Usage

~~~js
getSubId(): string | number;
~~~

### Returns

The method returns the subId (if any) of the selected item

### Example

~~~js {7}
// diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

const subid = diagram.selection.getSubId(); // -> "2"
~~~

**Change log**: Added in v4.1

**Related articles**:  [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)