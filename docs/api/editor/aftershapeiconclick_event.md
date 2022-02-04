---
sidebar_label: afterShapeIconClick
title: afterShapeIconClick Event of Editor
description: You can learn about the afterShapeIconClick event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShapeIconClick

### Description

@short: fires after clicking a control in the per-item toolbar

### Usage

~~~js
afterShapeIconClick: (
    iconId: string, 
    shape: object
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `iconId` - (required) the type or id of the toolbar control
- `shape` - (required) an object with the item configuration

### Example

~~~js {7-10}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterShapeIconClick", function(iconId, shape) {
    console.log("You've clicked the", iconId, "toolbar control", shape);
    return true;
});
~~~

**Change log**: Added in v3.1