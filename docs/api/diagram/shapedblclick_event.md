---
sidebar_label: shapeDblClick
title: shapeDblClick Event
description: You can learn about the shapeDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeDblClick

### Description

@short: fires on double-clicking a shape
@descr:

### Usage

~~~js
shapeDblClick: (
	id: string | number, 
	event: MouseEvent
) => void;
~~~

### Parameters

- `id` - (mandatory) the shape id
- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("shapeDblClick", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '"double-clicked');
});
~~~

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
