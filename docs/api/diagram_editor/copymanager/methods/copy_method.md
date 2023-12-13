---
sidebar_label: copy()!!
title: copy Method of Copy Manager
description: You can learn about the copy method of copy manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!copy()

### Description

@short: copies to the clipboard the selected elements or elements specified by ids

:::note
The *copy()* method works only if the Diagram Editor is initialized in the ***default*** mode.
:::

### Usage

~~~js
copy(ids?: (string | number)[]): void;
~~~

### Parameters

- `ids` - (optional) an array (list) of the elements' ids to copy

### Example

- when you use the method without arguments, the elements from the selection list are copied:

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});

editor.model.copy(); // copies selected items to the clipboard
~~~

- when you pass some ids to the method, the corresponding elements are copied: 

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});

editor.model.copy(["1", "2"]); // copies the specified items to the clipboard
~~~

**Change log**: Added in v6.0
