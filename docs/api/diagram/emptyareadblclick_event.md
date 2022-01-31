---
sidebar_label: emptyAreaDblClick
title: emptyAreaDblClick Event
description: You can learn about the emptyAreaDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# emptyAreaDblClick

### Description

@short: fires on double-clicking an empty space in the current diagram area
@descr:


### Usage

~~~js
emptyAreaDblClick: (event: MouseEvent) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("emptyAreaDblClick", () => {
	console.log("emptyAreaDblClick");
});
~~~

**Change log**: Added in v4.1

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

