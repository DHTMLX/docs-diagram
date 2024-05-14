---
sidebar_label: isRedo()
title: isRedo Method of HistoryManager
description: You can learn about the isRedo method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# isRedo()

### Description

@short: Checks whether an action reverted by the Undo action has been restored

### Usage

~~~jsx
isRedo(): boolean;
~~~

### Example

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
...
editor.history.isRedo();
~~~

### Returns

The method returns `true`, if an action reverted by the Undo action has been restored; otherwise, `false`

**Change log**: Added in v4.1
