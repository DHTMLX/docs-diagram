---
sidebar_label: pasteStyles()!!
title: pasteStyles Method of Copy Manager
description: You can learn about the pasteStyles method of copy manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!pasteStyles()

### Description

@short: applies styles to the list of selected elements or elements specified by ids

:::note
The *pasteStyles()* method works only if the Diagram Editor is initialized in the ***default*** mode.
:::

### Usage

~~~js
pasteStyles(ids?: (string | number)[]): void;
~~~

### Parameters

- `ids` - (optional) an array of elements' ids to apply the copied styles to

### Example

- call the method without arguments, to apply styles to the first element from the selection list:

~~~js {6}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});

editor.model.copyStyles(); 
editor.model.pasteStyles(); 
~~~

- or pass the ids of elements to the method to apply the copied styles to:

~~~js {6}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});

editor.model.copyStyles("1");
editor.model.pasteStyles(["1", "2", "3"]); 
~~~

**Change log**: Added in v6.0