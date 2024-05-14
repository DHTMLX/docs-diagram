---
sidebar_label: load
title: load Event of Data Collection
description: You can learn about the load event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# load

### Description

@short: Fires when data is loaded into the diagram

### Usage

~~~jsx
load: () => void;
~~~

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("load", function(){
    // some logic here
});
~~~
