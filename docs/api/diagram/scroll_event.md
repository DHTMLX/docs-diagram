---
sidebar_label: scroll
title: scroll Event
description: You can learn about the scroll event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# scroll

### Description

@short: fires when a diagram is being scrolled
@descr:


### Usage

~~~js
scroll: (position: object) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `position` - (mandatory) the position of a scroll. The object contains x and y coordinates of the current scroll position, e.g.: {x: 67, y: 130}

### Example

~~~js {10-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", { 
	type: "org", 
    scroll: true 		
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("scroll", function(pos){
	console.log("The diagram has been scrolled")
});
~~~

**Related articles**: 
- [Scrolling Diagram](../../../guides/diagram/scrolling_diagram/)
- [Event Handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

