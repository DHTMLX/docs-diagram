---
sidebar_label: beforeItemMove
title: beforeItemMove
description: text
---

# beforeItemMove

@short: fires before an item is moved

`todo: check - $mov: ICoords`

@signature: {`beforeItemMove: (events: MouseEvent, id: Id, coord: IBaseCoords, $mov: ICoords) => boolean | void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: number` - the x and y coordinates of the item position before movement

@returns:
Return `false` to prevent the item from being moved; otherwise, `true`.

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
