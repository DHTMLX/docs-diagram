---
sidebar_label: scroll
title: scroll Event
description: You can learn about the scroll event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# scroll

### Description

@short: Fires when a diagram is being scrolled

### Usage

~~~jsx
scroll: (position: object) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `position` - (required) the position of a scroll. The object contains x and y coordinates of the current scroll position, e.g.: `{x: 67, y: 130}`

### Example

~~~jsx {10-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    scroll: true         
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("scroll", () => {
    console.log("The diagram has been scrolled")
});
~~~

**Related articles**:

- [Scrolling Diagram](../../../guides/diagram/scrolling_diagram/)
- [Event handling](../../../guides/event_handling/)
