---
sidebar_label: afterItemCatch!!
title: afterItemCatch Event of Editor
description: You can learn about the afterItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterItemCatch

### Description

@short: Fires after an item is caught

:::info
The event works only in the **org chart** and **mindmap** modes of Diagram, the ***itemsDraggable*** property must be set to `true`.
:::

### Usage

~~~js
"afterItemCatch": ({
    id: string | number, 
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => void;
~~~

### Parameters

The callback of the event is called with the following parameter:

- `obj` - an object with the following properties:
  - `id` - the id of the moved item
  - `targetId` - the id of the target item
  - `batch` - an array of moved elements' ids 
  - `event` - an event object

### Example

~~~js {6-11}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterItemCatch", ({ id, targetId }) => {
    console.log(`
		  Item ${id} is caught by the item ${targetId}
	  `);
});
~~~

**Change log**: 
- The `batch` property is added in the v6.0
- The callback function takes an object as a parameter since v6.0
- Added in v4.1
