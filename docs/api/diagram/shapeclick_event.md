---
sidebar_label: shapeClick
title: shapeClick Event
description: text
---

# shapeClick

@short: fires on clicking a shape

@signature: {`shapeClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the shape id
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("shapeClick", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '" is clicked');
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
