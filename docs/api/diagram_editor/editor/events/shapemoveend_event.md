---
sidebar_label: shapeMoveEnd!!
title: shapeMoveEnd Event of Editor
description: You can learn about the shapeMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeMoveEnd

### Description

@short: Fires after a shape is moved

### Usage

~~~js
"shapeMoveEnd": ({
    id: string | number, 
    batch: (string | number)[],
    coords: object,
    event: MouseEvent | PointerEvent,
}) => void;
~~~

### Parameters

The callback of the event is called with the following parameter:

- `config` - an object with the following properties:
  - `id` - the id of an item
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
editor.events.on("shapeMoveEnd", ({id, batch, coords, event}) => {
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
- Added in v4.0