---
sidebar_label: lineMouseDown
title: lineMouseDown Event
description: You can learn about the lineMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineMouseDown

@short: fires when a pointing device button is pressed while the pointer is over a connector line

@signature: {`lineMouseDown: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a connector line
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("lineMouseDown", (id, event) => {
    console.log(id, event);
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

@changelog:
Added in v4.0
