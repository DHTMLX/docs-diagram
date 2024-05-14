---
sidebar_label: beforeItemCatch
title: beforeItemCatch Event of Editor
description: You can learn about the beforeItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemCatch

:::info
The event works only in the org chart and mindmap modes of Diagram, the **itemsDraggable** property must be set to **true**
:::

### Description

@short: Fires before an item is caught

### Usage

~~~js
beforeItemCatch: (
    movedId: string | number, 
    targetId: string | number, 
    event: MouseEvent
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `movedId` - (required) the id of the moved item
- `targetId` - (required) the id of the target item
- `event` - (required) a native HTML event object

### Returns

Return `false` to prevent the item from being caught; otherwise, `true`

### Example

~~~jsx {7-10}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeItemCatch", (movedId, targetId, event) => {
    console.log("beforeItemCatch", movedId, targetId, event);
    if (targetId === "2.1") return false;
});
~~~

**Change log**: Added in v4.1
