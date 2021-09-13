---
sidebar_label: beforeItemMove
title: beforeItemMove
description: text
---

# beforeItemMove

@short:
fires before an item is moved

@params:
- `events: Event` - a native event object
- `id: string | number` - the id of an item
- `coordinates: number` - the x and y coordinates of the item position before movement

@returns:
Return false to prevent the item from being moved; otherwise, `true`.

@example:
editor.events.on("beforeItemMove", (event, id, coordinates) => {
    console.log(`
        Item ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
    return true;
});

@descr:
The event doesn't work with the connector object.

@changelog:
Added in v4.0.