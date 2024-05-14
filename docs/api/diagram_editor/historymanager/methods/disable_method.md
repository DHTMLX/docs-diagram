---
sidebar_label: disable()
title: disable Method of HistoryManager
description: You can learn about the disable method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# disable()

### Description

@short: Blocks HistoryManager

### Usage

~~~js
disable(): void;
~~~

### Example

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
...
editor.history.disable();
~~~

:::note
Note that by disabling History manager you won't be able to work with history via hot keys.
:::

**Change log**: Added in v4.1
