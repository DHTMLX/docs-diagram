---
sidebar_label: disabled
title: disabled Property of HistoryManager
description: You can learn about the disabled property of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# disabled

### Description

@short: Enables/disables the work of HistoryManager

### Usage

~~~js
disabled: boolean;
~~~

### Example

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});

editor.history.disabled = true;
~~~

**Change log**: Added in v4.1
