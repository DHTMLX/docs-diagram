---
sidebar_label: afterCollapse
title: afterCollapse
description: text
---

# afterCollapse

@short: fires after an item has been collapsed

@signature: {`afterCollapse: (id: Id, dir?: TreeDirection) => void;`}

@params:
- `id: string | number` - the id of an item which has been collapsed
- `dir: string` - optional, the side the children were hidden in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

@example:
diagram.events.on("afterCollapse", function(id, dir) {
    console.log(diagram.data.getItem(id).text + " was collapsed", dir);
});

@descr:

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
The **dir** parameter has been added in v3.1.
