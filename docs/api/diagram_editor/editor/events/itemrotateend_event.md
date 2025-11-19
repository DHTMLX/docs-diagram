---
sidebar_label: itemRotateEnd
title: itemRotateEnd Event of Editor
description: You can learn about the itemRotateEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemRotateEnd

### Description

@short: Fires after the rotation operation of an item is completed (when the user releases the mouse button)

### Usage

~~~jsx
"itemRotateEnd": ({
    id: string | number,
    angle: number
}) => void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the rotated item
- `angle` - the final rotation angle of the item in degrees

### Example

~~~jsx
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("itemRotateEnd", ({ id, angle }) => {
    console.log(`The item ${id} finished rotating, the final angle: ${angle}`);
    // Here you can save the new rotation angle of the item on the server
});
~~~

**Change log**:

- The event is added in v6.1

**Related API**:

- [`beforeItemRotate`](/api/diagram_editor/editor/events/beforeitemrotate_event/)
- [`afterItemRotate`](/api/diagram_editor/editor/events/afteritemrotate_event/)

**Related samples**:

- [Diagram Editor. Managing shapes' moving, rotating and resizing via events](https://snippet.dhtmlx.com/qldjbbm7)