---
sidebar_label: expandItem()
title: expandItem
description: text
---

# expandItem()

@short: shows all children of the target shape or expands the group/swimlane

@signature: {`expandItem(id: string, dir?: TreeDirection): void;`}

@params:
- `id: string | number` - the id of the item
- `dir: string` - optional, defines the side the children will be shown in relation to the parent shape: "left", "right"

@example:
diagram.expandItem(123);

@descr:
**Note**, that the **dir** attribute can be used only in Mind Maps (type:"mindmap").

~~~js
var diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.parse(data);

diagram.expandItem("main", "left");
~~~

@relatedapi:
api/diagram_collapseitem.md

@related:
common_guides/manipulating_shapes.md

@changelog: The **dir** parameter was added in v3.1.