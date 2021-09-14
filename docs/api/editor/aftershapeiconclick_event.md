---
sidebar_label: afterShapeIconClick
title: afterShapeIconClick
description: text
---

# afterShapeIconClick

@short:
fires after clicking a control in the per-shape toolbar

@params:
- `iconId: string` - the type or id of the toolbar control
- `shape: object` - an object with the shape configuration

@example:
editor.events.on("afterShapeIconClick", function(iconId, shape) {
    console.log("You've clicked the", iconId, "toolbar control", shape);
    return true;
});

@descr:

@changelog:
Added in v3.1