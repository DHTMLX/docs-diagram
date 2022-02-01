---
sidebar_label: lineTitleMoveEnd
title: lineTitleMoveEnd Event of Editor
description: You can learn about the lineTitleMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineTitleMoveEnd

### Description

@short: fires after a text element of a line is moved

@descr:

### Usage

~~~js
lineTitleMoveEnd: (
    event: MouseEvent, 
    lineId: string | number, 
    titleId: string | number, 
    coord: object
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (mandatory) a native HTML event object
- `lineId` - (mandatory) the id of a line
- `titleId` - (mandatory) the id of a text element of a line
- `coord` - (mandatory) an object with the x and y coordinates of the text element position after movement

### Example

~~~js {7-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("lineTitleMoveEnd", (event, lineId, titleId, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.1
