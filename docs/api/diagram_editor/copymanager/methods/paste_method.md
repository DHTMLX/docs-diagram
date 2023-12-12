---
sidebar_label: paste()!!
title: paste Method of Copy Manager
description: You can learn about the paste method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!paste()

### Description

@short: creates new elements identical to the ones passed via the "copy()" method

:::info 
You need to create a diagram editor with the `select: true` option specified to copy selected items to the clipboard.
:::

### Usage

~~~js
paste(): void;
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor", { 
    select: true 
});
...
editor.model.copy(); //copies selected items to the clipboard
editor.model.paste() //pastes new items
~~~

**Change log**: Added in v6.0