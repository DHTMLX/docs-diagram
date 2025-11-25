---
sidebar_label: beforeItemRotate
title: beforeItemRotate Event of Editor
description: You can learn about the beforeItemRotate event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemRotate

### Description

@short: Fires before an item is rotated

### Usage

~~~jsx
"beforeItemRotate": ({
    id: string | number,
    angle: number
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the item being rotated
- `angle` - the new rotation angle of the item in degrees

### Returns

The callback returns `false` to prevent the item from being rotated; otherwise, `true`.

### Example

~~~jsx
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeItemRotate", ({ id, angle }) => {
    if (angle > 90 && angle < 270) {
        console.log(`Preventing rotation of the item ${id} by this angle.`);
        return false; // Prevent rotation
    }
    console.log(`Rotating the item ${id} by the angle: ${angle}`);
});
~~~

**Change log**:

- The event is added in v6.1

**Related API**:

- [`afterItemRotate`](/api/diagram_editor/editor/events/afteritemrotate_event/)
- [`itemRotateEnd`](/api/diagram_editor/editor/events/itemrotateend_event/)

**Related samples**:

- [Diagram Editor. Managing shapes' moving, rotating and resizing via events](https://snippet.dhtmlx.com/qldjbbm7)