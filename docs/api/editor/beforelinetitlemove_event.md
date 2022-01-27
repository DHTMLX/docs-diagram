---
sidebar_label: beforeLineTitleMove
title: beforeLineTitleMove Event of Editor
description: You can learn about the beforeLineTitleMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeLineTitleMove

### Description

@short: fires before a text element of a line is moved

@descr:

### Usage

~~~js
beforeLineTitleMove: (event: MouseEvent, lineId: string | number, titleId: string | number, coord: object) => boolean | void;
~~~

### Parameters

- `event` - (mandatory) a native HTML event object
- `lineId` - (mandatory) the id of a line
- `titleId` - (mandatory) the id of a text element of a line
- `coord` - (mandatory) an object with the x and y coordinates of the text element position before movement

### Returns

Return `false` to prevent the text element of a line from being moved; otherwise, `true`.

### Example

~~~js
editor.events.on("beforeLineTitleMove", (event, lineId, titleId, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
    return true;
});
~~~

**Change log**: 
Added in v4.1.
