---
sidebar_label: beforeShapeIconClick
title: beforeShapeIconClick Event of Editor
description: You can learn about the beforeShapeIconClick event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeShapeIconClick

@short: fires before clicking a control in the per-item toolbar

@signature: {`beforeShapeIconClick: (iconId: string, shape: IDataItem) => boolean | void;`}

@params:
- `iconId: string` - the type or id of the toolbar control
- `shape: object` - an object with the item configuration

@returns:
Return `false` to prevent the toolbar control from being clicked; otherwise, `true`.

@example:
editor.events.on("beforeShapeIconClick", function(iconId, shape) {
    console.log("You will click the", iconId, "toolbar control", shape);
    return true;
});

@descr:

@changelog:
Added in v3.1
