---
sidebar_label: zoomIn()
title: zoomIn Method of Editor
description: You can learn about the zoomIn method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# zoomIn()

### Description

@short: zooms in the diagram

@descr:

### Usage

~~~js
zoomIn(step?: number): void;
~~~

### Parameters

- `step` - (optional) the step of zooming in the diagram; *by default: 0.05*

### Example

~~~js {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomIn(0.1);
~~~

**Change log**: Added in v4.1
