---
sidebar_label: lineTitleDblClick
title: lineTitleDblClick
description: text
---

# lineTitleDblClick

@short: fires on double-clicking a text element of a line

@signature: {`lineTitleDblClick: (lineId: Id, titleId: Id, event: MouseEvent) => void;`}

@params:
- `lineId: string | number` - the id of a line
- `titleId: string | number` - the id of a text element of a line
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("lineTitleDblClick", (lineId, titleId, event) => {
	console.log("lineTitleDblClick");
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:

Added in v4.1.
