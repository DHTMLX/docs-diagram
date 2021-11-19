---
sidebar_label: shapeDblClick
title: shapeDblClick Event
description: You can learn about the shapeDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeDblClick

@short: fires on double-clicking a shape

@signature: {`shapeDblClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the shape id
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("shapeDblClick", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '"double-clicked');
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
