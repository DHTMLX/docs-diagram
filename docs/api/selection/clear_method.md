---
sidebar_label: clear()!!
title: clear Method of Selection
description: You can learn about the clear method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# clear()

### Description

@short: Clears the selection list without invoking events

### Usage

~~~jsx
clear(): void;
~~~

### Example

~~~jsx {8}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
// loading data
diagram.data.parse(data);

diagram.selection.clear();
// the Selection events are not fired
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