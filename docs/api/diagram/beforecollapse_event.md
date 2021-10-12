---
sidebar_label: beforeCollapse
title: beforeCollapse
description: text
---

# beforeCollapse

@short: fires before collapsing an item

@signature: {`beforeCollapse: (id: Id, dir?: TreeDirection) => boolean | void;`}

@params:
- `id: string | number` - the id of an item 
- `dir: string` - optional, the side the children will be hidden in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

@returns:
Return `false` to block collapsing an item; otherwise, `true`.

@example:
diagram.events.on("beforeCollapse", function(id, dir) {
    console.log("Collapsing " + diagram.data.getItem(id).text, dir);
    return true;
});

@relatedsample:
**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@descr:

@changelog:
The **dir** parameter has been added in v3.1.
