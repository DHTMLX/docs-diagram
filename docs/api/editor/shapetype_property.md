---
sidebar_label: shapeType
title: shapeType Property of Editor
description: You can learn about the shapeType property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeType

### Description

@short: the type of the items

### Usage

~~~js
shapeType?: string;
~~~

@default: "rectangle" (in the default mode), "card" (in the org chart mode), "topic" (in the mindmap mode)

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "rectangle",
});
~~~

This value is applied, if the shape object doesn't contain the "type" property.

**Related articles**:  [Default Shapes](../../../shapes/default_shapes/)
