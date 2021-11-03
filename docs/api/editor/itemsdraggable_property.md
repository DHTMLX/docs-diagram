---
sidebar_label: itemsDraggable
title: itemsDraggable
description: text
---

# itemsDraggable

@short: Enables/disables dragging the item from one parent item to another

@signature: {`itemsDraggable?: boolean;`}

@default: true

@example:
const editor = new dhx.DiagramEditor(document.body, {
    type: "org", //  or "mindmap" mode
    itemsDraggable: false,
});

@descr:

The moved item is dragged with all its children items. The property works in org chart and mindmap modes.

@changelog:

Added in v4.1.
