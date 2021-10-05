---
sidebar_label: itemClick
title: itemClick
description: text
---

# itemClick

@short: fires on clicking an item

@signature: {`itemClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of an item
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});

@relatedsample:
**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@descr:
If a click is done over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
