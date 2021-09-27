---
sidebar_label: shapeMoveEnd
title: shapeMoveEnd
description: text
---

# shapeMoveEnd

@short: fires after a shape has been moved

@signature: {`shapeMoveEnd: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;
`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of a shape
- `coord: number` - the x and y coordinates of the shape position before movement

@example:
editor.events.on("shapeMoveEnd", (event, id, coordinates) => {
    console.log(`
        Shape ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});

@descr:

@changelog:
Added in v4.0.