---
sidebar_label: afterItemCatch
title: afterItemCatch Event of Editor
description: You can learn about the afterItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterItemCatch

:::info
The event works only in the org chart and mindmap modes of Diagram, the **itemsDraggable** property must be set to **true**
:::

### Description

@short: fires after an item is caught

### Usage

~~~js
afterItemCatch: (
    movedId: string | number, 
    targetId: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `movedId` - (mandatory) the id of the moved item
- `targetId` - (mandatory) the id of the target item
- `event` - (mandatory) a native HTML event object

### Example

~~~js {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterItemCatch", (movedId, targetId, event) => {
    console.log("afterItemCatch", movedId, targetId, event);
});
~~~

**Change log**: Added in v4.1
