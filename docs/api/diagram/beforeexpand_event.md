---
sidebar_label: beforeExpand
title: beforeExpand Event
description: text
---

# beforeExpand

@short: fires before expanding an item

@signature: {`beforeExpand: (id: Id, dir?: TreeDirection) => boolean | void;`}

@params:
- `id: string | number` - the id of an item 
- `dir: string` - optional, the side the children will be shown in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

@returns:
Return `false` to block expanding an item; otherwise, `true`.

@example:
diagram.events.on("beforeExpand", function(id, dir) {
    console.log("Expanding " + diagram.data.getItem(id).text, dir);
    return true;
});

@relatedsample:
**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@descr:

@changelog:
The **dir** parameter has been added in v3.1.