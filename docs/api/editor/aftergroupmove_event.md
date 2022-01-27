---
sidebar_label: afterGroupMove
title: afterGroupMove Event of Editor
description: You can learn about the afterGroupMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterGroupMove

### Description

@short: fires when a group or swimlane is moved one grid step

@descr:

### Usage

~~~js
afterGroupMove: (event: MouseEvent, id: string | number, coord: object) => void;
~~~

### Parameters

- `event` - (mandatory) a native HTML event object
- `id` - (mandatory) the id of an item
- `coord` - (mandatory) an object with the x and y coordinates of the group or swimlane position after movement

### Example

~~~js
editor.events.on("afterGroupMove", (event, id, coordinates) => {
    console.log(`
        Group ${id} position:
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.0.
