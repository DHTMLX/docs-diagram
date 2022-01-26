---
sidebar_label: autoLayout
title: autoLayout Event of Editor
description: You can learn about the autoLayout event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# autoLayout

### Description

@short: fires after the Auto Layout button has been clicked

### Usage

~~~js
autoLayout: () => void;
~~~

### Example

~~~js
editor.events.on("autoLayout", function() {
    console.log("The shapes are arranged automatically");
});
~~~