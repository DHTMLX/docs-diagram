---
sidebar_label: afterItemResize
title: afterItemResize Event of Editor
description: You can learn about the afterItemResize event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterItemResize

### Description

@short: Fires after an item's size has been changed

### Usage

~~~jsx
"afterItemResize": ({
    id: string | number, 
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the resized item
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

### Example

~~~jsx
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterItemResize", ({ id, width, height }) => {
    console.log(`
        The item ${id} has been resized: 
            width: ${width} 
            height: ${height}
    `);
});
~~~

**Change log**:

- The event is added in v6.1

**Related API**:

- [`beforeItemResize`](/api/diagram_editor/editor/events/beforeitemresize_event/)
- [`itemResizeEnd`](/api/diagram_editor/editor/events/itemresizeend_event/)

**Related samples**:

- [Diagram Editor. Managing shapes' moving, rotating and resizing via events](https://snippet.dhtmlx.com/qldjbbm7)