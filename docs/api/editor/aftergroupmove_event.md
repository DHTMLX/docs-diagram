---
sidebar_label: afterGroupMove
title: afterGroupMove
description: text
---

# afterGroupMove

@short: fires when a group or swimlane is moving

@signature: {`afterGroupMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: number` - the x and y coordinates of the group or swimlane position before movement

@example:
editor.events.on("afterGroupMove", (event, id, coordinates) => {
    console.log(`
        Group ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});

@descr:

@changelog:
Added in v4.0.
