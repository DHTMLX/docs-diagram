---
sidebar_label: beforeLineTitleMove
title: beforeLineTitleMove Event of Editor
description: You can learn about the beforeLineTitleMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeLineTitleMove

### Description

@short: Fires before a text element of a line is moved

### Usage

~~~js
beforeLineTitleMove: (
    event: MouseEvent, 
    lineId: string | number, 
    titleId: string | number, 
    coord: object
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `event` - (required) a native HTML event object
- `lineId` - (required) the id of a line
- `titleId` - (required) the id of a text element of a line
- `coord` - (required) an object with the x and y coordinates of the text element position before movement

### Returns

Return `false` to prevent the text element of a line from being moved; otherwise, `true`

### Example

~~~js {7-14}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeLineTitleMove", (event, lineId, titleId, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
    return true;
});
~~~

**Change log**: Added in v4.1
