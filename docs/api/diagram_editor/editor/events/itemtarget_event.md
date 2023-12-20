---
sidebar_label: itemTarget!!
title: itemTarget Event of Editor
description: You can learn about the itemTarget event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemTarget

### Description

@short: Fires when the moved item is under the target item

:::info
The event works only in the **org chart** and **mindmap** modes of Diagram, the ***itemsDraggable*** property must be set to `true`.

The event doesn't work with the parent item of a moved item and with a moved item that has the `giveItem: false` property.
:::

### Usage

~~~js
"itemTarget": ({
    id: string | number, 
    targetId: string | number,
    batch: (string | number)[],
    event: MouseEvent | PointerEvent
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with the following parameter:

- `config` - an object with the following properties:
  - `id` - the id of the moved item
  - `targetId` - the id of the target item
  - `batch` - an array of moved elements' ids 
  - `event` - an event object

### Returns

The callback returns `false` to prevent an item from being moved under the target item; otherwise, `true`

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~js {6-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("itemTarget", ({id, targetId, batch, event}) => {
    console.log("itemTarget", {id, targetId, batch, event});
});
~~~

**Change log**: 
- The callback function takes an object as a parameter since v6.0
- Added in v4.1
