---
sidebar_label: beforeItemMove
title: beforeItemMove Event of Editor
description: You can learn about the beforeItemMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemMove

@short: fires before an item is moved

@signature: {`beforeItemMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => boolean | void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: object` - an object with the x and y coordinates of the item position before movement

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
The event doesn't work with the line object.

@changelog:
Added in v4.0.
