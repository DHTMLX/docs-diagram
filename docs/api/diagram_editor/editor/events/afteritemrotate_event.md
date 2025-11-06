---
sidebar_label: afterItemRotate
title: afterItemRotate Event of Editor
description: You can learn about the afterItemRotate event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterItemRotate

### Description

@short: Fires after an item has been rotated

### Usage

~~~jsx
"afterItemRotate": ({
    id: string | number,
    angle: number
}) => void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the rotated item
- `angle` - the new rotation angle of the item in degrees

### Example

~~~jsx
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterItemRotate", ({ id, angle }) => {
    console.log(`The item ${id} has been rotated by the angle: ${angle}`);
});
~~~

**Change log**:

- The event is added in v6.1

**Related API**:

- [`beforeItemRotate`](/api/diagram_editor/editor/events/beforeitemrotate_event/)
- [`itemRotateEnd`](/api/diagram_editor/editor/events/itemrotateend_event/)