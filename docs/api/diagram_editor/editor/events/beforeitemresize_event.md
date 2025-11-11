---
sidebar_label: beforeItemResize
title: beforeItemResize Event of Editor
description: You can learn about the beforeItemResize event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemResize

### Description

@short: Fires before an item's size is changed

### Usage

~~~jsx
"beforeItemResize": ({
    id: string | number, 
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the item being resized
- `width` - the new width of the item
- `height` - the new height of the item
- `x` - the new X-coordinate of the item
- `y` - the new Y-coordinate of the item
- `dir` - the direction of the resize operation:
	- **"n"** - north
    - **"ne"** - north-east
    - **"e"** - east
    - **"se"** - south-east
    - **"s"** - south
    - **"sw"** - south-west
    - **"w"** - west
    - **"nw"** - north-west

### Returns

The callback returns `false` to prevent the item from being resized; otherwise, `true`.

### Example

~~~jsx
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeItemResize", ({ id, width, height }) => {
    if (width < 50 || height < 50) {
        console.log(`Preventing resize of item ${id} because it's too small.`);
        return false; // Prevent resizing
    }
    console.log(`Resizing the item ${id} to the width: ${width}, height: ${height}`);
});
~~~

**Change log**:

- The event is added in v6.1

**Related API**:

- [`afterItemResize`](/api/diagram_editor/editor/events/afteritemresize_event/)
- [`itemResizeEnd`](/api/diagram_editor/editor/events/itemresizeend_event/)
