---
sidebar_label: undo()
title: undo Method of HistoryManager
description: You can learn about the undo method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# undo()

### Description

@short: Reverts the last action in the Diagram Editor

### Usage

~~~jsx
undo(first?: boolean): void;
~~~

### Parameters

- `first` - (optional) *true* to revert all the history of changes 

### Example

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
...
editor.history.undo();
~~~

**Change log**: Added in v4.1
