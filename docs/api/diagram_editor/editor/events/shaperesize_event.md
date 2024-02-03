---
sidebar_label: shapeResize!!
title: shapeResize Event of Editor
description: You can learn about the shapeResize event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeResize

### Description

@short: Fires after a shape has been resized

### Usage

~~~js
"shapeResize": () => void;
~~~

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~js {6-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("shapeResize", function() {
    console.log("The shape has been resized");
});
~~~
