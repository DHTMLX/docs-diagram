---
sidebar_label: beforeShapeMove!!
title: beforeShapeMove Event of Editor
description: You can learn about the beforeShapeMove event in of editor the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeMove

### Description

@short: Fires before a shape is moved

### Usage

~~~js
"beforeShapeMove": ({
    id: string | number, 
    batch: (string | number)[],
    coords: object,
    event: MouseEvent | PointerEvent, 
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with the following parameter:

- `obj` - an object with the following properties:
  - `id` - the id of a shape
  - `batch` - an array of moved elements' ids
  - `coords` -  an object with the `x` and `y` coordinates of the shape position before movement
  - `event` - an event object

### Returns

The callback returns `false` to prevent the shape from being moved; otherwise, `true`

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~js {6-14}
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
- Added in v3.1
