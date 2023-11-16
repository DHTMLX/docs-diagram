---
sidebar_label: exportData
title: exportData Event of Editor
description: You can learn about the exportData event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# exportData

### Description

@short: Fires after the Export Data button has been clicked

### Usage

~~~js
exportData: () => void;
~~~

### Example

~~~js {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("exportData", function() {
    console.log("The data are exported to the JSON format");
});
~~~
