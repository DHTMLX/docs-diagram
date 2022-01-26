---
sidebar_label: lineTitleMoveEnd
title: lineTitleMoveEnd Event of Editor
description: You can learn about the lineTitleMoveEnd event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineTitleMoveEnd

### Description

@short: fires after a text element of a line is moved

### Usage

~~~js
lineTitleMoveEnd: (events: MouseEvent, lineId: Id, titleId: Id, coord: IBaseCoords) => void;
~~~

### Parameters

- `events: MouseEvent` - a native HTML event object
- `lineId: string | number` - the id of a line
- `titleId: string | number` - the id of a text element of a line
- `coord: object` - an object with the x and y coordinates of the text element position after movement

### Example

~~~js
editor.events.on("lineTitleMoveEnd", (event, lineId, titleId, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.1
