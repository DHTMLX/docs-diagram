---
sidebar_label: beforeShapeIconClick
title: beforeShapeIconClick Event of Editor
description: You can learn about the beforeShapeIconClick event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeIconClick

### Description

@short: Fires before clicking a control in the per-item toolbar

### Usage

~~~js
beforeShapeIconClick: (
    iconId: string, 
    shape: object
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `iconId` - (required) the type or id of the toolbar control
- `shape` - (required) an object with the item configuration

### Returns

Return `false` to prevent the toolbar control from being clicked; otherwise, `true`

### Example

~~~js {7-10}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeShapeIconClick", function(iconId, shape) {
    console.log("You will click the", iconId, "toolbar control", shape);
    return true;
});
~~~

**Change log**: Added in v3.1
