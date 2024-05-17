---
sidebar_label: beforeItemCatch
title: beforeItemCatch Event of Editor
description: You can learn about the beforeItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeItemCatch

### Description

@short: Fires before an item is caught

:::info
The event works only in the **org chart** and **mindmap** modes of Diagram, the ***itemsDraggable*** property must be set to `true`.
:::

### Usage

~~~jsx
"beforeItemCatch": ({
    id: string | number, 
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

  - `id` - the id of the moved item
  - `targetId` - the id of the target item
  - `batch` - an array of moved elements' ids 
  - `event` - an event object

### Returns

The callback returns `false` to prevent the item from being caught; otherwise, `true`

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~jsx {6-20}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeItemCatch", ({ id, targetId }) => {
  if (targetId === "2.1"){
    console.log(`
      Item ${id} won't be be caught by the item "2.1"
    `);
    return false;
  }
  else{
    console.log(`
      Item ${id} will be caught by the item ${targetId}
    `);
    return true;
  }
});
~~~

**Change log**:  

- The `batch` parameter was added in the v6.0
- The callback function takes an object as a parameter since v6.0
