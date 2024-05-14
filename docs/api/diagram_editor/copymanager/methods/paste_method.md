---
sidebar_label: paste()!!
title: paste Method of Copy Manager
description: You can learn about the paste method of copy manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# paste()

### Description

@short: Creates new elements identical to the elements passed by the "copy()" method

:::note
The `paste()` method works only if the Diagram Editor is initialized in the **default** mode.
:::

### Usage

~~~jsx
paste(): void;
~~~

### Example

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});
...
editor.model.copy(); // copies the selected items
editor.model.paste() // pastes new items
~~~

**Change log**: Added in v6.0