---
sidebar_label: beforeGroupMove
title: beforeGroupMove
description: text
---

# beforeGroupMove

@short: fires before a group or swimlane is moved

@signature: {``}

@params:
- `events: Event` - a native event object
- `id: string | number` - the id of an item
- `coordinates: number` - the x and y coordinates of the group or swimlane position before movement

@returns:
Return false to prevent the group or swimlane from being moved; otherwise, `true`.

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