---
sidebar_label: shapeMoveEnd
title: shapeMoveEnd Event of Editor
description: You can learn about the shapeMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeMoveEnd

### Description

@short: Fires after a shape is moved

### Usage

~~~js
shapeMoveEnd: (
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
editor.events.on("shapeMoveEnd", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.0
