---
sidebar_label: itemMouseDown
title: itemMouseDown Event
description: You can learn about the itemMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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

@relatedsample:
**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@descr:

If a pointing device button is pressed while the pointer is over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
