---
sidebar_label: afterGroupMove
title: afterGroupMove
description: text
---

# afterGroupMove

@short: fires when a group or swimlane is moving

@params:
- `events: Event` - a native event object
- `id: string | number` - the id of an item
- `coordinates: number` - the x and y coordinates of the group or swimlane position before movement

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