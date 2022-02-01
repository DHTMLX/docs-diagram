---
sidebar_label: zoomOut
title: zoomOut Event of Editor
description: You can learn about the zoomOut event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# zoomOut

### Description

@short: fires after the Zoom Out button has been clicked

@descr:

### Usage

~~~js
zoomOut: () => void;
~~~

### Example

~~~js {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("zoomOut", function() {
    console.log("The diagram in the editor is zoomed out");
});
~~~
