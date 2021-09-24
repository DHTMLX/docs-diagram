---
sidebar_label: groupMoveEnd
title: groupMoveEnd
description: text
---

# groupMoveEnd

@short: fires after a group or swimlane is moved

@signature: {``}

@params:
- `events: Event` - a native event object
- `id: string | number` - the id of an item
- `coordinates: number` - the x and y coordinates of the group or swimlane position before movement

@example:
editor.events.on("groupMoveEnd", (event, id, coordinates) => {
    console.log(`
        Group ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});

@descr:

@changelog:
Added in v4.0.