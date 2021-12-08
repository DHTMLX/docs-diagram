---
sidebar_label: itemTarget
title: itemTarget Event of Editor
description: You can learn about the itemTarget event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemTarget

@short: fires when the moved item is under the target item

@signature: {`itemTarget: (movedId: Id, targetId: Id, event: MouseEvent) => boolean | void;`}

@params:
- `movedId: string | number` - the id of the moved item
- `targetId: string | number` - the id of the target item
- `events: MouseEvent` - a native HTML event object

@example:
editor.events.on("itemTarget", (movedId, targetId, event) => {
    console.log("itemTarget", movedId, targetId, event);
});

@descr:
The event works in org chart and mindmap modes of Diagram, **itemsDraggable** property should be **true**.

The event doesn't work with the parent item of the moved item and with the moved item with the property **giveItem: false**.

@changelog:

Added in v4.1.
