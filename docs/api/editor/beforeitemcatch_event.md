---
sidebar_label: beforeItemCatch
title: beforeItemCatch
description: text
---

# beforeItemCatch

@short: fires before an item is catched

@signature: {`beforeItemCatch: (movedId: Id, targetId: Id, event: MouseEvent) => boolean | void;`}

@params:
- `movedId: string | number` - the id of the moved item
- `targetId: string | number` - the id of the target item
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to prevent the item from being catched; otherwise, `true`.

@example:
editor.events.on("beforeItemCatch", (movedId, targetId, event) => {
    console.log("beforeItemCatch", movedId, targetId, event);
    if (targetId === "2.1") return false;
});

@descr:
The event works in org chart and mindmap modes of Diagram, **itemsDraggable** property should be **true**.

@changelog:

Added in v4.1.
