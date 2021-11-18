---
sidebar_label: afterGroupMove
title: afterGroupMove Event of Editor
description: text
---

# afterGroupMove

@short: fires when a group or swimlane is moved one grid step

@signature: {`afterGroupMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: object` - an object with the x and y coordinates of the group or swimlane position after movement

@example:
editor.events.on("afterGroupMove", (event, id, coordinates) => {
    console.log(`
        Group ${id} position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});

@descr:

@changelog:
Added in v4.0.
