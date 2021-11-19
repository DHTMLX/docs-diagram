---
sidebar_label: itemClick
title: itemClick Event
description: You can learn about the itemClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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


@descr:
#### Related samples:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

If a click is done over a swimlane, the event will be fired on the cell of the swimlane.

@changelog:
Added in v4.0
