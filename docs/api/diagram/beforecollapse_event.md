---
sidebar_label: beforeCollapse
title: beforeCollapse Event
description: You can learn about the beforeCollapse event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCollapse

### Description

@short: Fires before collapsing an item

### Usage

~~~jsx
beforeCollapse: (
    id: string | number, 
    dir?: string
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the id of an item
- `dir` - (optional) the side the children will be hidden in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

### Returns

Return `false` to block collapsing an item; otherwise, `true`

### Example

~~~jsx {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeCollapse", (id, dir) => {
    console.log("Collapsing " + diagram.data.getItem(id).text, dir);
    return true;
});
~~~

**Change log**: The **dir** parameter was added in v3.1

**Related article**: [Event handling](../../../guides/event_handling/)
