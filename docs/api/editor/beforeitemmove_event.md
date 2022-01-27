---
sidebar_label: beforeItemMove
title: beforeItemMove Event of Editor
description: You can learn about the beforeItemMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemMove

### Description

@short: fires before an item is moved

@descr:

### Usage

~~~js
beforeItemMove: (event: MouseEvent, id: string | number, coord: object) => boolean | void;
~~~

### Parameters

- `event` - (mandatory) a native HTML event object
- `id` - (mandatory) the id of an item
- `coord` - (mandatory) an object with the x and y coordinates of the item position before movement

### Returns

Return `false` to prevent the item from being moved; otherwise, `true`.

### Example

~~~js
editor.events.on("beforeItemMove", (event, id, coordinates) => {
    console.log(`
        Item ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
    return true;
});
~~~

The event doesn't work with the line object.

**Change log**: Added in v4.0.
