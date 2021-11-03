---
sidebar_label: afterItemCatch
title: afterItemCatch
description: text
---

# afterItemCatch

@short: fires after an item is catched

@signature: {`afterItemCatch: (movedId: Id, movedId: Id, events: MouseEvent) => void;`}

@params:
- `movedId: string` - the id of the moved item
- `targetId: string ` - the id of the target item
- `events: MouseEvent` - a native HTML event object

@example:
editor.events.on("afterItemCatch", (movedId, targetId, event) => {
    console.log("afterItemCatch", movedId, targetId, event);
});

@descr:
The event works with org chart and mindmap modes of Diagram, **itemsDraggable** property should be *true*.

@changelog:

Added in v4.1.
