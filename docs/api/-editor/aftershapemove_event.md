---
sidebar_label: afterShapeMove
title: afterShapeMove Event of Editor
description: You can learn about the afterShapeMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShapeMove

### Description

@short: Fires when a shape is moved one grid step

### Usage

~~~js
afterShapeMove: (
    event: MouseEvent, 
    id: string | number, 
    coord: object
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (required) a native HTML event object
- `id` - (required) the id of a shape
- `coord` - (required) an object with the x and y coordinates of the shape position after movement

### Example

~~~jsx {7-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterShapeMove", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: 

- The **id** and **coordinates** parameters are added in v4.0
- Added in v3.1