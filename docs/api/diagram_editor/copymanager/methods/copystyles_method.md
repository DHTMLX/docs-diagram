---
sidebar_label: copyStyles()!!
title: copyStyles Method of Copy Manager
description: You can learn about the copyStyles method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!copyStyles()

### Description

@short: copies styles of the specified element or of the first element from the selection list

:::info 
You need to create a diagram editor with the `select: true` option specified to copy selected items to the clipboard.
:::

### Usage

~~~js
copyStyles(id?: string | number): void;
~~~

### Parameters

- `id`- (optional) the id of an element selected for copying styles. When the method is used without arguments, styles of the first element from the selection list will be copied

### Example

With the disabled selection option:

~~~js
const editor = new dhx.DiagramEditor("editor");

editor.model.copyStyles("1");
~~~

With enabled selection:

~~~js
const editor = new dhx.DiagramEditor("editor", { 
    select: true 
});

editor.model.copyStyles(); 
~~~

**Change log**: Added in v6.0