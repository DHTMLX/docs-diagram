---
sidebar_label: afterLineTitleMove
title: afterLineTitleMove Event of Editor
description: You can learn about the afterLineTitleMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterLineTitleMove

### Description

@short: fires when a text element of a line is moved one grid step

@descr:

### Usage

~~~js
afterLineTitleMove: (event: MouseEvent, lineId: string | number, titleId: string | number, coord: object) => void;
~~~

### Parameters

- `event` - (mandatory) a native HTML event object
- `lineId` - (mandatory) the id of a line
- `titleId` - (mandatory) the id of a text element of a line
- `coord` - (mandatory) an object with the x and y coordinates of the text element position after movement

### Example

~~~js
editor.events.on("afterLineTitleMove", (event, lineId, titleId, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
});
~~~

**Change log**: Added in v4.1
