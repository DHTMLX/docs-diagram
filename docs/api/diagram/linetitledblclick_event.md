---
sidebar_label: lineTitleDblClick
title: lineTitleDblClick Event
description: You can learn about the lineTitleDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineTitleDblClick

@short: fires on double-clicking a text element of a line
@descr:

### Usage

~~~js
lineTitleDblClick: (
	lineId: string | number, 
	titleId: string | number, 
	event: MouseEvent
) => void;
~~~

### Parameters

- `lineId` - (mandatory) the id of a line
- `titleId` - (mandatory) the id of a text element of a line
- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("lineTitleDblClick", (lineId, titleId, event) => {
	console.log("lineTitleDblClick");
});
~~~

**Change log**: Added in v4.1

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

