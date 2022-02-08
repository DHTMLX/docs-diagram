---
sidebar_label: afterItemMove
title: afterItemMove Event of Editor
description: You can learn about the afterItemMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterItemMove

### Description

@short: Fires when an item is moved one grid step

:::note
The event doesn't work with the line object
:::

### Usage

~~~js
afterItemMove: (
    event: MouseEvent, 
    id: string | number, 
    coord: object
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (required) a native HTML event object
- `id` - (required) the id of an item
- `coord` - (required) an object with the x and y coordinates of the item position after movement

### Example

~~~js {7-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterItemMove", (event, id, coordinates) => {
    console.log(`
        Item ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.0