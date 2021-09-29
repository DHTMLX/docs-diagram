---
sidebar_label: itemMouseDown
title: itemMouseDown
description: text
---

# itemMouseDown

@short: fires when a pointing device button is pressed while the pointer is over an item

@signature: {`itemMouseDown: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of an item
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("itemMouseDown", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemMouseDown", (id, event) => {
    console.log(id, event);
});

@relatedsample:
**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@descr:

If a pointing device button is pressed while the pointer is over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
