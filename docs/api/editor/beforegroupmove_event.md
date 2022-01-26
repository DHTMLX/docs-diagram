---
sidebar_label: beforeGroupMove
title: beforeGroupMove Event of Editor
description: You can learn about the beforeGroupMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeGroupMove

### Description

@short: fires before a group or swimlane is moved

### Usage

~~~js
beforeGroupMove: (events: MouseEvent, id: Id, coord: IBaseCoords) => boolean | void;
~~~

### Parameters

- `events: MouseEvent` - a native HTML event object
- `id: string | number` - the id of an item
- `coord: object` - am object with the x and y coordinates of the group or swimlane position before movement

### Returns

Return `false` to prevent the group or swimlane from being moved; otherwise, `true`.

### Example

~~~js
editor.events.on("beforeGroupMove", (event, id, coordinates) => {
    console.log(`
        Group ${id} is position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
    return true;
});
~~~

**Change log**: Added in v4.0.
