---
sidebar_label: afterShapeMove
title: afterShapeMove Event of Editor
description: text
---

# afterShapeMove

@short: fires when a shape is moved one grid step

@signature: {`afterShapeMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of a shape
- `coord: object` - an object with the x and y coordinates of the shape position after movement

@example:
editor.events.on("afterShapeMove", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});

@descr:

@changelog:
- The **id** and **coordinates** parameters are added in v4.0.
- Added in v3.1.