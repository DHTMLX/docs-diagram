---
sidebar_label: afterShapeIconClick
title: afterShapeIconClick Event of Editor
description: You can learn about the afterShapeIconClick event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShapeIconClick

### Description

@short: fires after clicking a control in the per-item toolbar

@descr:

### Usage

~~~js
afterShapeIconClick: (
    iconId: string, 
    shape: IDataItem
) => void;
~~~

### Parameters

- `iconId` - (required) the type or id of the toolbar control
- `shape: object` - an object with the item configuration

### Example

~~~js
editor.events.on("afterShapeIconClick", function(iconId, shape) {
    console.log("You've clicked the", iconId, "toolbar control", shape);
    return true;
});
~~~

**Change log**: Added in v3.1