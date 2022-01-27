---
sidebar_label: shapeResize
title: shapeResize Event of Editor
description: You can learn about the shapeResize event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeResize

### Description

@short: fires after a shape has been resized

@descr:

### Usage

~~~js
shapeResize: () => void;
~~~

### Example

~~~js
editor.events.on("shapeResize", function() {
    console.log("The shape is resized");
});
~~~
