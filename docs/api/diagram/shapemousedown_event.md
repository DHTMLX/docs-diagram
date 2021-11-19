---
sidebar_label: shapeMouseDown
title: shapeMouseDown Event
description: You can learn about the shapeMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeMouseDown

@short: fires when a pointing device button is pressed while the pointer is over a shape

@signature: {`shapeMouseDown: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a shape
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("shapeMouseDown", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '"will be clicked');
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
