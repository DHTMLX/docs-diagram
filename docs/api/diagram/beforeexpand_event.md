---
sidebar_label: beforeExpand
title: beforeExpand
description: text
---

# beforeExpand

@short: fires before expanding an item

@signature: {`beforeExpand: (id: Id, dir?: TreeDirection) => boolean | void;`}

@params:
- `id: string | number` - the id of an item 
- `dir: string` - optional, the side the children will be shown in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)
  
@example:
diagram.events.on("beforeExpand", function(id, dir) {
    console.log("Expanding " + diagram.data.getItem(id).text, dir);
    return true;
});

// For editor
editor.diagram.events.on("beforeExpand", function(id, dir) {
    console.log("Expanding " + editor.diagram.data.getItem(id).text, dir);
    return true;
});

@relatedsample:
**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@descr:
Returning *false* from the handler will block the selection.

@changelog: The **dir** parameter was added in v3.1.