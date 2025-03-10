---
sidebar_label: emptyAreaDblClick
title: emptyAreaDblClick Event
description: You can learn about the emptyAreaDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# emptyAreaDblClick

### Description

@short: Fires on double-clicking an empty space in the current diagram area

### Usage

~~~jsx
emptyAreaDblClick: (event: MouseEvent) => void;
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
diagram.events.on("emptyAreaDblClick", (e) => {
    console.log("emptyAreaDblClick");
});
~~~

**Change log**: Added in v4.1

**Related article**: [Event handling](../../../guides/event_handling/)
