---
sidebar_label: lineTitleMouseDown
title: lineTitleMouseDown Event
description: You can learn about the lineTitleMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineTitleMouseDown

@short: fires when a pointing device button is pressed while the pointer is over a text element of a line

@signature: {`lineTitleMouseDown: ( lineId: Id, titleId: Id, event: MouseEvent) => void;`}

@params:
- `lineId: string | number` - the id of a line
- `titleId: string | number` - the id of a text element of a line
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("lineTitleMouseDown", (lineId, titleId, event) => {
	console.log("lineTitleMouseDown");
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:

Added in v4.1.
