---
sidebar_label: collapseItem()
title: collapseItem
description: text
---

# collapseItem()

@short:
hides all children of the target shape or collapses the group/swimlane

@params:
- id		string,number		the id of the item
- dir		string				optional, defines the side the children will be hidden in relation to the parent shape: "left", "right"

@example:
diagram.collapseItem(123);


@template:	api_method
@descr:
**Note**, that the **dir** attribute can be used only in Mind Maps (type:"mindmap").

~~~js
var diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.parse(data);

diagram.collapseItem("main", "left");
~~~

@relatedapi:
	api/diagram_expanditem.md
@related:
common_guides/manipulating_shapes.md

@changelog:
The **dir** parameter was added in v3.1.