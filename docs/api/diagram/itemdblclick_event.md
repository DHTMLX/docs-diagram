---
sidebar_label: itemDblClick
title: itemDblClick Event
description: text
---

# itemDblClick

@short: fires on double-clicking an item

@signature: {`itemDblClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of an item
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("itemDblClick", (id, event) => {
    console.log(id, event);
});

@relatedsample:
**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@descr:
If a double-click is done over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
