---
sidebar_label: zoomOut()
title: zoomOut Method of Editor
description: You can learn about the zoomOut method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# zoomOut()

### Description

@short: zooms out the diagram

@descr:

### Usage

~~~js
zoomOut(step?: number): void;
~~~

### Parameters

- `step` - (optional) the step of zooming out the diagram; *by default: 0.05*

### Example

~~~js {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomOut(0.1);
~~~

**Change log**: Added in v4.1
