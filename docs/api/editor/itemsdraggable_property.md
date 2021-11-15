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
    type: "org", //  org" or "mindmap"
    itemsDraggable: false,
});

@descr:

The property works in org chart and mindmap modes. The moved item is dragged with all its children.

@changelog:

Added in v4.1.
