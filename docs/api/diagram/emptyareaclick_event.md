---
sidebar_label: emptyAreaClick
title: emptyAreaClick Event
description: You can learn about the emptyAreaClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# emptyAreaClick

### Description

@short: fires on clicking an empty space in the current diagram area
@descr:


### Usage

~~~js
emptyAreaClick: (event: MouseEvent) => void;
~~~

### Parameters

- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("emptyAreaClick",function(e){
	console.log("An empty space has been clicked");
});
~~~

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
