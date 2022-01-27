---
sidebar_label: beforeShapeIconClick
title: beforeShapeIconClick Event of Editor
description: You can learn about the beforeShapeIconClick event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeIconClick

### Description

@short: fires before clicking a control in the per-item toolbar

@descr:

### Usage

~~~js
beforeShapeIconClick: (iconId: string, shape: IDataItem) => boolean | void;
~~~

### Parameters

- `iconId: string` - the type or id of the toolbar control
- `shape: object` - an object with the item configuration

### Returns

Return `false` to prevent the toolbar control from being clicked; otherwise, `true`.

### Example

~~~js
editor.events.on("beforeShapeIconClick", function(iconId, shape) {
    console.log("You will click the", iconId, "toolbar control", shape);
    return true;
});
~~~

**Change log**: Added in v3.1
