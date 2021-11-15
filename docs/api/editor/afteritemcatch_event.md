---
sidebar_label: afterItemCatch
title: afterItemCatch
description: text
---

# afterItemCatch

@short: fires after an item is catched

@signature: {`afterItemCatch: (movedId: Id, targetId: Id, event: MouseEvent) => void;`}

@params:
- `movedId: string | number` - the id of the moved item
- `targetId: string | number` - the id of the target item
- `events: MouseEvent` - a native HTML event object

@example:
editor.events.on("afterItemCatch", (movedId, targetId, event) => {
    console.log("afterItemCatch", movedId, targetId, event);
});

@descr:
The event works in org chart and mindmap modes of Diagram, **itemsDraggable** property should be **true**.

@changelog:

Added in v4.1.
