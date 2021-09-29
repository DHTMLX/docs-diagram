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
  
@example:
diagram.events.on("beforeCollapse", function(id, dir) {
    console.log("Collapsing " + diagram.data.getItem(id).text, dir);
    return true;
});

// For editor
editor.diagram.events.on("beforeCollapse", function(id, dir) {
    console.log("Collapsing " + editor.diagram.data.getItem(id).text, dir);
    return true;
});

@relatedsample:
**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@descr:

Returning *false* from the handler will block the selection.

@changelog: The **dir** parameter was added in v3.1.
