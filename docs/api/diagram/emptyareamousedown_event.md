---
sidebar_label: emptyAreaMouseDown
title: emptyAreaMouseDown Event
description: You can learn about the emptyAreaMouseDown event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# emptyAreaMouseDown

### Description

@short: Fires when a pointing device button is pressed while the pointer is over an empty space in the current diagram area

### Usage

~~~jsx
emptyAreaMouseDown: (event: MouseEvent) => void;
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
diagram.events.on("emptyAreaMouseDown", (e) => {
    console.log("emptyAreaMouseDown");
});
~~~

**Change log**: Added in v4.1

**Related article**: [Event handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

