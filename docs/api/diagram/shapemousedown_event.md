---
sidebar_label: shapeMouseDown
title: shapeMouseDown
description: text
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
