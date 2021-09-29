---
sidebar_label: itemMouseOver
title: itemMouseOver
description: text
---

# itemMouseOver

@short: fires when a pointing device is onto an item

@signature: {`itemMouseOver: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of an item
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});

@descr:

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
