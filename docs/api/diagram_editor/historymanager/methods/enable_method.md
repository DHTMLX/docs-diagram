---
sidebar_label: enable()
title: enable Method of HistoryManager
description: You can learn about the enable method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# enable()

### Description

@short: Restarts the work of HistoryManager, saving the current state as initial state

### Usage

~~~jsx
enable(): void;
~~~

### Example

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
// ...
editor.history.enable();
~~~

**Change log**: Added in v4.1
