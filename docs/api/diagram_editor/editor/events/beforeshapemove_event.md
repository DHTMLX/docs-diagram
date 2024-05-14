---
sidebar_label: beforeShapeMove!!
title: beforeShapeMove Event of Editor
description: You can learn about the beforeShapeMove event in of editor the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeMove

### Description

@short: Fires before a shape is moved

:::note
The event fires just for the target element despite the number of selected elements. The ids of dragged elements are provided in the `batch` property of the callback function's parameter.
:::

### Usage

~~~js
"beforeShapeMove": ({
    id: string | number, 
    batch: (string | number)[],
    coords: object,
    event: PointerEvent, 
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

  - `id` - the id of a shape
  - `batch` - an array of moved elements' ids
  - `coords` -  an object with the `x` and `y` coordinates of the shape position before movement, where:
    - `x` - the horizontal position of the shape, moving from left to right
    - `y` - the vertical position of the shape, moving from top to bottom
  - `event` - an event object

### Returns

The callback returns `false` to prevent the shape from being moved; otherwise, `true`

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~jsx {6-14}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeShapeMove", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Change log**: 
- The `batch` property is added in the v6.0
- The callback function takes an object as a parameter since v6.0
- The `id` and `coords` parameters are added in v4.0

