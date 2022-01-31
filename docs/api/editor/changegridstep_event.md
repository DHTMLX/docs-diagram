---
sidebar_label: changeGridStep
title: changeGridStep Event of Editor
description: You can learn about the changeGridStep event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# changeGridStep

### Description

@short: fires after the value of the grid step has been changed

@descr:

### Usage

~~~js
changeGridStep: (step: number) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `step` - (required) the current value of the grid step

### Example

~~~js
editor.events.on("changeGridStep", function(step) {
    console.log("The grid step is changed to:", step);
});
~~~
