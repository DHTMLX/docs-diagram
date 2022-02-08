---
sidebar_label: itemsDraggable
title: itemsDraggable Property of Editor
description: You can learn about the itemsDraggable property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemsDraggable

:::info
The property works only in the org chart and mindmap modes. The moved item is dragged with all its children.
:::

### Description

@short: Optional, enables/disables dragging the item from one parent item to another

### Usage

~~~js
itemsDraggable?: boolean;
~~~

### Default config

~~~js
itemsDraggable: true
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor(document.body, {
    type: "org", //  org" or "mindmap"
    itemsDraggable: false,
});
~~~

**Change log**: Added in v4.1
