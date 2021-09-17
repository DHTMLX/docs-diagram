---
sidebar_label: afterShapeMove
title: afterShapeMove
description: text
---

# afterShapeMove

@short: fires when a shape is moving

@params:
- `events: Event` - a native event object
- `id: string | number` - the id of a shape
- `coordinates: number` - the x and y coordinates of the shape position before movement

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