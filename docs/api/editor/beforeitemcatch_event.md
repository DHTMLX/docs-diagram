---
sidebar_label: beforeItemCatch
title: beforeItemCatch Event of Editor
description: You can learn about the beforeItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemCatch

### Description

@short: fires before an item is catched

### Usage

~~~js
beforeItemCatch: (movedId: Id, targetId: Id, event: MouseEvent) => boolean | void;
~~~

### Parameters

- `movedId: string | number` - the id of the moved item
- `targetId: string | number` - the id of the target item
- `events: MouseEvent` - a native HTML event object

### Returns

Return `false` to prevent the item from being catched; otherwise, `true`.

### Example

~~~js
editor.events.on("beforeItemCatch", (movedId, targetId, event) => {
    console.log("beforeItemCatch", movedId, targetId, event);
    if (targetId === "2.1") return false;
});
~~~

The event works in org chart and mindmap modes of Diagram, **itemsDraggable** property should be **true**.

**Change log**: 
Added in v4.1.
