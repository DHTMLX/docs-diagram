---
sidebar_label: expandItem()
title: expandItem Method
description: You can learn about the expandItem method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# expandItem()

### Description

@short: Shows all children of the target shape or expands the group/swimlane

### Usage

~~~jsx
expandItem(
	id: string | number, 
	dir?: string
): void;
~~~

### Parameters

- `id` - (required) the ID of the item
- `dir` - (optional) defines the side the children will be shown in relation to the root shape: **"left"**, **"right"** 
  :::note
  The **dir** parameter can be used only when the diagram is initialized in the mindmap mode (*type:"mindmap"*)
  :::

### Example

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.expandItem(123);
~~~

or

~~~js {2,6}
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.data.parse(data);

diagram.expandItem("main", "left");
~~~

**Change log:** The **dir** parameter was added in v3.1

**Related articles:** [Expanding/collapsing items](../../../guides/manipulating_items/#expandingcollapsing-items)
