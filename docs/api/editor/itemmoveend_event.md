---
sidebar_label: itemMoveEnd
title: itemMoveEnd Event of Editor
description: You can learn about the itemMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemMoveEnd

@short: fires after an item is moved

@signature: {`itemMoveEnd: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: object` - an object with the x and y coordinates of the item position before movement

@example:
editor.events.on("itemMoveEnd", (event, id, coordinates) => {
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
