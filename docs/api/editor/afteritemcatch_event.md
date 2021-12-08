---
sidebar_label: afterItemCatch
title: afterItemCatch Event of Editor
description: You can learn about the afterItemCatch event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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
