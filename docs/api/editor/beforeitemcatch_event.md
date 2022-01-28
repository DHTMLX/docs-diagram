---
sidebar_label: beforeItemCatch
title: beforeItemCatch Event of Editor
description: You can learn about the beforeItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemCatch

### Description

@short: fires before an item is caught

@descr:

:::note
The event works in the org chart and mindmap modes of Diagram, **itemsDraggable** property must be set to **true**
:::

### Usage

~~~js
beforeItemCatch: (
    movedId: string | number, 
    targetId: string | number, 
    event: MouseEvent
) => boolean | void;
~~~

### Parameters

- `movedId` - (mandatory) the id of the moved item
- `targetId` - (mandatory) the id of the target item
- `event` - (mandatory) a native HTML event object

### Returns

Return `false` to prevent the item from being caught; otherwise, `true`

### Example

~~~js
editor.events.on("beforeItemCatch", (movedId, targetId, event) => {
    console.log("beforeItemCatch", movedId, targetId, event);
    if (targetId === "2.1") return false;
});
~~~

**Change log**: Added in v4.1
