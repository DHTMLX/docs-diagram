---
sidebar_label: saveDelay
title: saveDelay Property of HistoryManager
description: You can learn about the disabled property of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# saveDelay

### Description

@short: Sets the time interval for saving the current state in ms

### Usage

~~~js
saveDelay: number;
~~~

### Default config

~~~js
saveDelay: 500
~~~

### Example

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});

editor.history.saveDelay = 1000;
~~~

**Change log**: Added in v4.1
