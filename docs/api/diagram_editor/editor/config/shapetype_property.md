---
sidebar_label: shapeType
title: shapeType Property of Editor
description: You can learn about the shapeType property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeType

### Description

@short: Optional. The type of the items

This value is applied, if the shape object doesn't contain the "type" property

### Usage

~~~jsx
shapeType?: string;
~~~

### Default config

In the default mode of Editor (type: "default"):

~~~jsx
shapeType: "rectangle"
~~~

In the org chart mode of Editor (type: "card"):

~~~jsx
shapeType: "card"
~~~

In the mindmap mode of Editor (type: "topic"):

~~~jsx
shapeType: "topic"
~~~

### Example

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "circle"
});
~~~

**Related articles**:  [Default Shapes](../../../shapes/default_shapes/)
