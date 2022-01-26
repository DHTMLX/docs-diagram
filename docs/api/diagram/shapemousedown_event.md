---
sidebar_label: shapeMouseDown
title: shapeMouseDown Event
description: You can learn about the shapeMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeMouseDown

### Description

@short: fires when a pointing device button is pressed while the pointer is over a shape
@descr:

### Usage

~~~js
shapeMouseDown: (
	id: string | number, 
	event: MouseEvent
) => void;
~~~

### Parameters

- `id` - (mandatory) the id of a shape
- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("shapeMouseDown", function(id, event) {
	console.log('An item "' + diagram.data.getItem(id).text + '"will be clicked');
});
~~~

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
