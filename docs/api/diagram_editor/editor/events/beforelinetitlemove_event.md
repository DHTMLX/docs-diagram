---
sidebar_label: beforeLineTitleMove
title: beforeLineTitleMove Event of Editor
description: You can learn about the beforeLineTitleMove event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeLineTitleMove

### Description

@short: Fires before a text element of a line is moved

### Usage

~~~jsx
"beforeLineTitleMove": ({
    event: PointerEvent, 
    lineId: string | number, 
    titleId: string | number, 
    coords: obj
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

  - `event` - an event object
  - `lineId` - the id of a line
  - `titleId` - the id of a text element of a line
  - `coords` - an object with the `x` and `y` coordinates of the text element position before movement, where:
    - `x` - the horizontal position of the text element, moving from left to right
    - `y` - the vertical position of the text element, moving from top to bottom

### Returns

The callback returns `false` to prevent the text element of a line from being moved; otherwise, `true`

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~jsx {6-14}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Change log**:

- The callback function takes an object as a parameter since v6.0
