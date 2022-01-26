---
sidebar_label: afterShapeMove
title: afterShapeMove Event of Editor
description: You can learn about the afterShapeMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShapeMove

### Description

@short: fires when a shape is moved one grid step

### Usage

~~~js
afterShapeMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;
~~~

### Parameters

- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of a shape
- `coord: object` - an object with the x and y coordinates of the shape position after movement

### Example

~~~js
editor.events.on("afterShapeMove", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: 

- The **id** and **coordinates** parameters are added in v4.0.
- Added in v3.1.