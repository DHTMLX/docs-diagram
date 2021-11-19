---
sidebar_label: groupMoveEnd
title: groupMoveEnd Event of Editor
description: You can learn about the groupMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupMoveEnd

@short: fires after a group or swimlane is moved

@signature: {`groupMoveEnd: (events: MouseEvent, id: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: object` - an object with the x and y coordinates of the group or swimlane position after movement

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
