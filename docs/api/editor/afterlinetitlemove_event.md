---
sidebar_label: afterLineTitleMove
title: afterLineTitleMove Event of Editor
description: You can learn about the afterLineTitleMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterLineTitleMove

### Description

@short: Fires when a text element of a line is moved one grid step

### Usage

~~~js
afterLineTitleMove: (
    event: MouseEvent, 
    lineId: string | number, 
    titleId: string | number, 
    coord: object
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (required) a native HTML event object
- `lineId` - (required) the id of a line
- `titleId` - (required) the id of a text element of a line
- `coord` - (required) an object with the x and y coordinates of the text element position after movement

### Example

~~~js {7-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterLineTitleMove", (event, lineId, titleId, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.1
