---
sidebar_label: collapseItem()
title: collapseItem
description: text
---

# collapseItem()

@short: hides all children of the target shape or collapses the group/swimlane

@signature: {`collapseItem(id: Id, dir?: TreeDirection): void;`}

@params:
- `id: string | number` - the id of the item
- `dir: string` - optional, defines the side the children will be hidden in relation to the parent shape: "left", "right"

@example:
diagram.collapseItem(123);

@descr:
**Note**, that the **dir** parameter can be used only in the diagram that is initialized in the mindmap mode (type:"mindmap").

~~~js
var diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.parse(data);

diagram.collapseItem("main", "left");
~~~

**Related articles**

common_guides/manipulating_shapes.md

@changelog:
The **dir** parameter has been added in v3.1.