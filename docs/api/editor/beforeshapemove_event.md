---
sidebar_label: beforeShapeMove
title: beforeShapeMove Event of Editor
description: You can learn about the beforeShapeMove event in of editor the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeMove

@short: fires before a shape is moved

@signature: {`beforeShapeMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => boolean | void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of a shape
- `coord: object` - an object with the x and y coordinates of the shape position before movement

@returns:
Return `false` to prevent the shape from being moved; otherwise, `true`.

@example:
editor.events.on("beforeShapeMove", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
    return true;
});

@descr:

@changelog:
- The **id** and **coordinates** parameters are added in v4.0.
- Added in v3.1.
