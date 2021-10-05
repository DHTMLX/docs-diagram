---
sidebar_label: shapeDblClick
title: shapeDblClick
description: text
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
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)
