---
sidebar_label: emptyAreaMouseDown
title: emptyAreaMouseDown Event
description: You can learn about the emptyAreaMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# emptyAreaMouseDown

@short: fires when a pointing device button is pressed while the pointer is over an empty space in the current diagram area

@signature: {`emptyAreaMouseDown: (event: MouseEvent) => void;`}

@params:
`event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("emptyAreaMouseDown", () => {
	console.log("emptyAreaMouseDown");
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:

Added in v4.1.
