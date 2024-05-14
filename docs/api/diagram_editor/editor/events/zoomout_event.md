---
sidebar_label: zoomOut
title: zoomOut Event of Editor
description: You can learn about the zoomOut event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# zoomOut

### Description

@short: Fires after the Zoom Out button is clicked or the `zoomOut()` method is called

### Usage

~~~jsx
"zoomOut": (step) => void;
~~~

### Parameters

The callback of the **zoomOut** event is called with the following parameter:

- `step` - (required) a value that displays the change step of the [`scale`](api/diagram_editor/editor/config/scale_property.md) property.

:::info
For handling the inner events of Diagram Editor you can use the **on()** method.
:::

### Example

~~~jsx {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("zoomOut", function(step) {
    console.log("The diagram in the editor is zoomed out");
});
~~~

**Change log**: The ***step*** parameter was added in v6.0
