---
sidebar_label: expandItem()
title: expandItem Method
description: text
---

# expandItem()

@short: shows all children of the target shape or expands the group/swimlane

@signature: {`expandItem(id: Id, dir?: TreeDirection): void;`}

@params:
- `id: string | number` - the id of the item
- `dir: string` - optional, defines the side the children will be shown in relation to the root shape: "left", "right"

@example:
diagram.expandItem(123);

@descr:

**Note**, that the **dir** parameter can be used only in the diagram that is initialized in the mindmap mode (type:"mindmap").

~~~js
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.parse(data);

diagram.expandItem("main", "left");
~~~

@changelog:
The **dir** parameter was added in v3.1.


#### Related articles

[Expanding/collapsing items](../../../guides/manipulating_items/#expandingcollapsing-items)

