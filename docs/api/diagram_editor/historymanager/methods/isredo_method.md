---
sidebar_label: isRedo()
title: isRedo Method of HistoryManager
description: You can learn about the isRedo method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# isRedo()

### Description

@short: Checks whether the current HistoryManager state is in the ending state

### Usage

~~~js
isRedo(): boolean;
~~~

### Example

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});

editor.history.isRedo();
~~~

### Returns

The method returns `true`, if the current state is in the ending state; otherwise, `false`

**Change log**: Added in v4.1
