---
sidebar_label: redo()
title: redo Method of HistoryManager
description: You can learn about the redo method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# redo()

### Description

@short: Restores an action that has been reverted by the Undo action

### Usage

~~~js
redo(): void;
~~~

### Example

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
...
editor.history.redo();
~~~


**Change log**: Added in v4.1
