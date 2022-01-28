---
sidebar_label: itemMoveEnd
title: itemMoveEnd Event of Editor
description: You can learn about the itemMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemMoveEnd

### Description

@short: fires after an item is moved

@descr:

:::note
The event doesn't work with the line object
:::

### Usage

~~~js
itemMoveEnd: (
    event: MouseEvent, 
    id: string | number, 
    coord: object
) => void;
~~~

### Parameters

- `event` - (mandatory) a native HTML event object
- `id` - (mandatory) the id of an item
- `coord` - (mandatory) an object with the x and y coordinates of the item position before movement

### Example

~~~js
editor.events.on("itemMoveEnd", (event, id, coordinates) => {
    console.log(`
        Item ${id} is position: 
            x: ${coordinates.x} 
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.0
