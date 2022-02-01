---
sidebar_label: afterCollapse
title: afterCollapse Event
description: You can learn about the afterCollapse event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCollapse

### Description

@short: fires after an item has been collapsed
@descr:


### Usage

~~~js
afterCollapse: (
    id: string | number, 
    dir?: string
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of an item which has been collapsed
- `dir` - (optional) the side the children were hidden in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterCollapse", function(id, dir) {
    console.log(diagram.data.getItem(id).text + " was collapsed", dir);
});
~~~

**Change log**: The **dir** parameter has been added in v3.1

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)