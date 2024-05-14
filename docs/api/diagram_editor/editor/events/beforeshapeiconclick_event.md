---
sidebar_label: beforeShapeIconClick
title: beforeShapeIconClick Event of Editor
description: You can learn about the beforeShapeIconClick event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeIconClick

### Description

@short: Fires before clicking a control in the per-item toolbar

### Usage

~~~jsx
"beforeShapeIconClick": (
    iconId: string, 
    shape: object
) => boolean | void;
~~~

### Parameters

The callback of the event is called with the following parameters:

- `iconId` - the type or id of the toolbar control
- `shape` - an object with the item configuration

### Returns

The callback returns `false` to prevent the toolbar control from being clicked; otherwise, `true`

:::info
For handling the inner Diagram Editor events you can use the **on()** method.
:::

### Example

~~~jsx {6-12}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeShapeIconClick", function(iconId, shape) {
    console.log(`
        You will click the ${iconId} toolbar control of the shape ${shape.id}
    `);
    return true;
});
~~~

**Change log**: Added in v3.1
