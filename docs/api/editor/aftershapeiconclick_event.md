---
sidebar_label: afterShapeIconClick
title: afterShapeIconClick Event of Editor
description: text
---

# afterShapeIconClick

@short: fires after clicking a control in the per-item toolbar

@signature: {`afterShapeIconClick: (iconId: string, shape: IDataItem) => void;`}

@params:
- `iconId: string` - the type or id of the toolbar control
- `shape: object` - an object with the item configuration

@example:
editor.events.on("afterShapeIconClick", function(iconId, shape) {
    console.log("You've clicked the", iconId, "toolbar control", shape);
    return true;
});

@descr:

@changelog:
Added in v3.1