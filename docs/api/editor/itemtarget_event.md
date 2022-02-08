---
sidebar_label: itemTarget
title: itemTarget Event of Editor
description: You can learn about the itemTarget event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemTarget

:::info
The event works only in the org chart and mindmap modes of Diagram, the **itemsDraggable** property must be set to **true**.

The event doesn't work with the parent item of the moved item and with the moved item with the property **giveItem: false**.
:::

### Description

@short: Fires when the moved item is under the target item

### Usage

~~~js
itemTarget: (
    movedId: string | number, 
    targetId: string | number, 
    event: MouseEvent
) => boolean | void;
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
editor.events.on("itemTarget", (movedId, targetId, event) => {
    console.log("itemTarget", movedId, targetId, event);
});
~~~

**Change log**: Added in v4.1
