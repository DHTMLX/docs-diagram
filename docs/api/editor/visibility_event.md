---
sidebar_label: visibility
title: visibility Event of Editor
description: You can learn about the visibility event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# visibility

### Description

@short: Fires after the Visibility button has been clicked

### Usage

~~~js
visibility: () => void;
~~~

### Example

~~~js {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("visibility", function() {
    console.log("The side panels are hidden");
});
~~~
