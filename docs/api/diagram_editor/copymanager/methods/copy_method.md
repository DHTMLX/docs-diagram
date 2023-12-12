---
sidebar_label: copy()!!
title: copy Method of Copy Manager
description: You can learn about the copy method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!copy()

### Description

@short: allows copying the selected or passed ids of elements to the clipboard

:::info
When the method is called without passed ids, the ids of the elements from the selection list will be copied, if selection is enabled.
:::

### Usage

~~~js
copy(ids?: (string | number)[]): void;
~~~

### Parameters

- `ids` - (optional) an array (list) of the elements' ids to copy

### Example

~~~js {3}
const editor = new dhx.DiagramEditor("editor");

editor.model.copy(["1", "2"]); // copies items to a buffer
~~~

Enable selection, if you want to copy elements from the selection list:

~~~js {2,5}
const editor = new dhx.DiagramEditor("editor", { 
    select: true 
});

editor.model.copy(); // copies selected items to a buffer
~~~

**Change log**: Added in v6.0
