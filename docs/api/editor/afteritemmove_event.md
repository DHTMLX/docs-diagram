---
sidebar_label: afterItemMove
title: afterItemMove
description: text
---

# afterItemMove

@short: fires when an item is moving

@signature: {``}

@params:
- `events: Event` - a native event object
- `id: string | number` - the id of an item
- `coordinates: number` - the x and y coordinates of the item position before movement

@example:
editor.events.on("afterItemMove", (event, id, coordinates) => {
    console.log(`
        Item ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});

@descr:
The event doesn't work with the connector object.

@changelog:
Added in v4.0.