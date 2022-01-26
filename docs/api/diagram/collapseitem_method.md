---
sidebar_label: collapseItem()
title: collapseItem Method
description: You can learn about the collapseItem method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# collapseItem()

### Description

@short: hides all children of the target shape or collapses the group/swimlane
@descr:

### Usage

~~~jsx
collapseItem(
	id: string | number, 
	dir?: string
): void;
~~~

### Parameters

- `id` - (mandatory) the **ID** of the item
- `dir` - (optional) defines the side, the children will be hidden in relation to the root shape: **"left"**, or **"right"**. The parameter can be used only when the diagram is initialized in the mindmap mode (**type:"mindmap"**)

### Example

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.parse(data);

diagram.collapseItem(123);
~~~

or

~~~js {2,6}
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.parse(data);

diagram.collapseItem("main", "left");
~~~


**Change log**: The **dir** parameter has been added in v3.1

**Related articles**: [Expanding/collapsing items](../../../guides/manipulating_items/#expandingcollapsing-items)