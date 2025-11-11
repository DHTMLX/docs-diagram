---
sidebar_label: itemResizeEnd
title: itemResizeEnd Event of Editor
description: You can learn about the itemResizeEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemResizeEnd

### Description

@short: Fires after the resize operation of an item is completed (when the user releases the mouse button)

### Usage

~~~jsx
"itemResizeEnd": ({
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
- `width` - the final width of the item
- `height` - the final height of the item
- `x` - the final X-coordinate of the item
- `y` - the final Y-coordinate of the item
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
editor.events.on("itemResizeEnd", ({ id, width, height }) => {
    console.log(`
        The item ${id} finished resizing: 
            the final width: ${width} 
            the final height: ${height}
    `);
    // Here you can save the new dimensions of the item on the server
});
~~~

**Change log**:

- The event is added in v6.1

**Related API**:

- [`beforeItemResize`](/api/diagram_editor/editor/events/beforeitemresize_event/)
- [`afterItemResize`](/api/diagram_editor/editor/events/afteritemresize_event/)