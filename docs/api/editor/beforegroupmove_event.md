---
sidebar_label: beforeGroupMove
title: beforeGroupMove Event of Editor
description: text
---

# beforeGroupMove

@short: fires before a group or swimlane is moved

@signature: {`beforeGroupMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => boolean | void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: object` - am object with the x and y coordinates of the group or swimlane position before movement

@returns:
Return `false` to prevent the group or swimlane from being moved; otherwise, `true`.

@example:
editor.events.on("beforeGroupMove", (event, id, coordinates) => {
    console.log(`
        Group ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
    return true;
});

@descr:

@changelog:
Added in v4.0.
