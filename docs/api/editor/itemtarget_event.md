---
sidebar_label: itemTarget
title: itemTarget
description: text
---

# itemTarget

@short: fires when the moved item is under the target item

@signature: {`itemTarget: (movedId: Id, movedId: Id, events: MouseEvent) => void;`}

@params:
- `movedId: string` - the id of the moved item
- `targetId: string ` - the id of the target item
- `events: MouseEvent` - a native HTML event object

@example:
editor.events.on("itemTarget", (movedId, targetId, event) => {
    console.log("itemTarget", movedId, targetId, event);
});

@descr:
The event works with org chart and mindmap modes of Diagram, **itemsDraggable** property should be *true*.

The event doesn't work with the parent item of the moved item and with the moved item with the property `giveItem: false`.

@changelog:

Added in v4.1.
