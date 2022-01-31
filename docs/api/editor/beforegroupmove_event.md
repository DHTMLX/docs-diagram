---
sidebar_label: beforeGroupMove
title: beforeGroupMove Event of Editor
description: You can learn about the beforeGroupMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeGroupMove

### Description

@short: fires before a group or swimlane is moved

@descr:

### Usage

~~~js
beforeGroupMove: (
    event: MouseEvent, 
    id: string | number, 
    coord: object
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (mandatory) a native HTML event object
- `id` - (mandatory) the id of an item
- `coord` - (mandatory) am object with the x and y coordinates of the group or swimlane position before movement

### Returns

Return `false` to prevent the group or swimlane from being moved; otherwise, `true`

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

**Change log**: Added in v4.0
