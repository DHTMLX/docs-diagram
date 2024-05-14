---
sidebar_label: afterExpand
title: afterExpand Event
description: You can learn about the afterExpand event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterExpand

### Description

@short: Fires after an item has been expanded

### Usage

~~~jsx
afterExpand: (
    id: string | number, 
    dir?: string
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the id of an item which has been expanded
- `dir` - (optional) the side the children were shown in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterExpand", function(id, dir) {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});
~~~

**Change log**: The **dir** parameter was added in v3.1

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
