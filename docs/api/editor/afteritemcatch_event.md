---
sidebar_label: afterItemCatch
title: afterItemCatch Event of Editor
description: You can learn about the afterItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterItemCatch

### Description

@short: fires after an item is caught

@descr:

:::note
The event works in the org chart and mindmap modes of Diagram, the **itemsDraggable** property must be set to **true**
:::

### Usage

~~~js
afterItemCatch: (
    movedId: string | number, 
    targetId: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

- `movedId` - (mandatory) the id of the moved item
- `targetId` - (mandatory) the id of the target item
- `event` - (mandatory) a native HTML event object

### Example

~~~js
editor.events.on("afterItemCatch", (movedId, targetId, event) => {
    console.log("afterItemCatch", movedId, targetId, event);
});
~~~

**Change log**: Added in v4.1
