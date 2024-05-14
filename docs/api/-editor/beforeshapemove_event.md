---
sidebar_label: beforeShapeMove
title: beforeShapeMove Event of Editor
description: You can learn about the beforeShapeMove event in of editor the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeMove

### Description

@short: Fires before a shape is moved

### Usage

~~~js
beforeShapeMove: (
    event: MouseEvent, 
    id: string | number, 
    coord: object
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (required) a native HTML event object
- `id` - (required) the id of a shape
- `coord` - (required) an object with the x and y coordinates of the shape position before movement

### Returns

Return `false` to prevent the shape from being moved; otherwise, `true`

### Example

~~~jsx {7-14}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeShapeMove", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
    return true;
});
~~~

**Change log**: 

- The **id** and **coordinates** parameters are added in v4.0
- Added in v3.1
