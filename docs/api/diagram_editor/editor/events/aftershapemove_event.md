---
sidebar_label: afterShapeMove!!
title: afterShapeMove Event of Editor
description: You can learn about the afterShapeMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShapeMove

### Description

@short: Fires when a shape is moved one grid step

:::note
The event fires just for the target element despite the number of selected elements. The ids of dragged elements are provided in the `batch` property of the callback function's parameter.
:::

### Usage

~~~js
"afterShapeMove": ({
    id: string | number, 
    batch: (string | number)[],
    coords: object,
    event: PointerEvent,
}) => void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

  - `id` - the id of a shape
  - `batch` - an array of moved elements' ids
  - `coords` - an object with the `x` and `y` coordinates of the shape position after movement, where:
    - `x` - the horizontal position of the shape, moving from left to right
    - `y` - the vertical position of the shape, moving from top to bottom
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
