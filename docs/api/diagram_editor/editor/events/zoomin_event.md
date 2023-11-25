---
sidebar_label: zoomIn!!
title: zoomIn Event of Editor
description: You can learn about the zoomIn event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# zoomIn

### Description

@short: Fires after the Zoom In button was clicked

### Usage

~~~js
    "zoomIn": (step: number) => void;
~~~

### Parameters

The callback of the **zoomIn** event can take an object with the following parameter:

- `step` - (required) a value that displays the change step of the [`scale`](api/diagram_editor/editor/config/scale_property.md) property.

:::info
For handling the inner events of Diagram Editor you can use the **Event Bus methods** TODO / DISCUSS WITH DEVELOPER!
:::

### Example

~~~js {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("zoomIn", function(step) {
    console.log("The diagram in the editor is zoomed in. The step is" + step);
});
~~~

**Change log**: The ***step*** parameter was added in v6.0
