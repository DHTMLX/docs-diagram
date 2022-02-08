---
sidebar_label: importData
title: importData Event of Editor
description: You can learn about the importData event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# importData

### Description

@short: Fires after the Import Data button has been clicked

### Usage

~~~js
importData: (data: any) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `data` - (mandatory) the imported data

### Example

~~~js {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("importData", function(data) {
    console.log("The data are imported from the JSON file");
});
~~~
