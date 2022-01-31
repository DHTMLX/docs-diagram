---
sidebar_label: groupMoveEnd
title: groupMoveEnd Event of Editor
description: You can learn about the groupMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupMoveEnd

### Description

@short: fires after a group or swimlane is moved

@descr:

### Usage

~~~js
groupMoveEnd: (
    event: MouseEvent, 
    id: string | number, 
    coord: object
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (mandatory) a native HTML event object
- `id` - (mandatory) the id of an item
- `coord` - (mandatory) an object with the x and y coordinates of the group or swimlane position after movement

### Example

~~~js
editor.events.on("groupMoveEnd", (event, id, coordinates) => {
    console.log(`
        Group ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.0
