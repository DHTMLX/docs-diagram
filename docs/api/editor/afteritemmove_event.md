---
sidebar_label: afterItemMove
title: afterItemMove
description: text
---

# afterItemMove

@short: fires when an item is moved one grid step

@signature: {`afterItemMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: object` - an object with the x and y coordinates of the item position after movement

@example:
editor.events.on("afterItemMove", (event, id, coordinates) => {
    console.log(`
        Item ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});

@descr:
The event doesn't work with the line object.

@changelog:
Added in v4.0.