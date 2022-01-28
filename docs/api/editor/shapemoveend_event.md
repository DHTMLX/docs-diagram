---
sidebar_label: shapeMoveEnd
title: shapeMoveEnd Event of Editor
description: You can learn about the shapeMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeMoveEnd

### Description

@short: fires after a shape is moved

@descr:

### Usage

~~~js
shapeMoveEnd: (
    event: MouseEvent, 
    id: string | number, 
    coord: object
) => void;
~~~

### Parameters

- `event` - (mandatory) a native HTML event object
- `id` - (mandatory) the id of a shape
- `coord` - (mandatory) an object with the x and y coordinates of the shape position after movement

### Example

~~~js
editor.events.on("shapeMoveEnd", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.0
