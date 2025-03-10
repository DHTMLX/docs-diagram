---
sidebar_label: emptyAreaClick
title: emptyAreaClick Event
description: You can learn about the emptyAreaClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# emptyAreaClick

### Description

@short: Fires on clicking an empty space in the current diagram area

### Usage

~~~jsx
emptyAreaClick: (event: MouseEvent) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `event` - (required) a native HTML event object

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("emptyAreaClick", () => {
    console.log("An empty space has been clicked");
});
~~~

**Related article**: [Event handling](../../../guides/event_handling/)
