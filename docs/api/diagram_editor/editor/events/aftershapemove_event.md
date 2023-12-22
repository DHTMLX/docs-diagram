---
sidebar_label: afterShapeMove!!
title: afterShapeMove Event of Editor
description: You can learn about the afterShapeMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShapeMove

### Description

@short: Fires when a shape is moved one grid step

### Usage

~~~js
"afterShapeMove": ({
    id: string | number, 
    batch: (string | number)[],
    coords: object,
    event: MouseEvent | PointerEvent,
}) => void;
~~~

### Parameters

The callback of the event is called with the following parameter:

- `obj` - an object with the following properties:
  - `id` - the id of a shape
  - `batch` - an array of moved elements' ids
  - `coords` - an object with the `x` and `y` coordinates of the shape position after movement
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
editor.events.on("afterShapeMove", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x} 
            y: ${coords.y}
    `);
});
~~~

**Change log**: 
- The `batch` property is added in the v6.0
- The callback function takes an object as a parameter since v6.0
- The `id` and `coords` parameters are added in v4.0
- Added in v3.1