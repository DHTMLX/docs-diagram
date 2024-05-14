---
sidebar_label: afterShapeIconClick!!
title: afterShapeIconClick Event of Editor
description: You can learn about the afterShapeIconClick event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShapeIconClick

### Description

@short: Fires after clicking a control in the per-item toolbar

### Usage

~~~js
"afterShapeIconClick": (
    iconId: string, 
    shape: object
) => void;
~~~

### Parameters

The callback of the event is called with the following parameters:

- `iconId` - the type or id of the toolbar control
- `shape` - an object with the item configuration

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~jsx {6-11}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterShapeIconClick", function(iconId, shape) {
    console.log(`
        You've clicked the ${iconId} toolbar control of the shape ${shape.id}
    `);
});
~~~

**Change log**: Added in v3.1