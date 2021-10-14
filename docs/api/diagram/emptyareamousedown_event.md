---
sidebar_label: emptyAreaMouseDown
title: emptyAreaMouseDown
description: text
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
