---
sidebar_label: isUndo()
title: isUndo Method of HistoryManager
description: You can learn about the isUndo method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# isUndo()

### Description

@short: Checks whether an action has been reverted

### Usage

~~~js
isUndo(): boolean;
~~~

### Example

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
...
editor.history.isUndo();
~~~

### Returns

The method returns `true`, if an action has been reverted; otherwise, `false`

**Change log**: Added in v4.1

