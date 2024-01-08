---
sidebar_label: afterItemMove!!
title: afterItemMove Event of Editor
description: You can learn about the afterItemMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterItemMove

### Description

@short: Fires when an item is moved one grid step

:::note
The event doesn't work with the **line** object.

The event fires once for all the elements being held and dragged. The ids of dragged elements are provided in the `batch` property of the callback function's parameter.
:::

### Usage

~~~js
"afterItemMove": ({
    id: string | number, 
    batch: (string | number)[],
    coords: object,
    event: PointerEvent, 
}) => void;
~~~

### Parameters

The callback of the event is called with the following parameter:

- `obj` - an object with the following properties:
  - `id` - the id of an item
  - `batch` - an array of moved elements' ids
  - `coords` - an object with the `x` and `y` coordinates of the item position after movement, where:
    - `x` - the horizontal position of the item, moving from left to right
    - `y` - the vertical position of the item, moving from top to bottom
  - `event` - an event object

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~js {6-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterItemMove", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position: 
            x: ${coords.x} 
            y: ${coords.y}
    `);
});
~~~

**Change log**: 
- The `batch` property is added in the v6.0
- The callback function takes an object as a parameter since v6.0
- Added in v4.0