---
sidebar_label: afterExpand
title: afterExpand Event
description: text
---

# afterExpand

@short: fires after an item has been expanded

@signature: {`afterExpand: (id: Id, dir?: TreeDirection) => void;`}

@params:
- `id: string | number` - the id of an item which has been expanded
- `dir: string` - optional, the side the children were shown in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

@example:
diagram.events.on("afterExpand", function(id, dir) {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});

@descr:

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
The **dir** parameter has been added in v3.1.
