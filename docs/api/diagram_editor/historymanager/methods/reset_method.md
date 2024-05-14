---
sidebar_label: reset()
title: reset Method of HistoryManager
description: You can learn about the reset method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# reset()

### Description

@short: Resets previous changes and saves the current state

### Usage

~~~js
reset(): void;
~~~

### Example

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
...
editor.history.reset();
~~~

**Change log**: Added in v4.1
