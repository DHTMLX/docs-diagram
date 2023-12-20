---
sidebar_label: pasteStyles()!!
title: pasteStyles Method of Copy Manager
description: You can learn about the pasteStyles method of copy manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# pasteStyles()

### Description

@short: applies copied styles to the list of selected elements or elements specified by ids

### Usage

~~~js
pasteStyles(ids?: (string | number)[]): void;
~~~

### Parameters

- `ids` - (optional) an array of elements' ids to apply the copied styles to

### Example

- call the method without arguments to apply styles to the elements from the selection list

~~~js {5-6}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", 
});

editor.model.copyStyles(); // copies styles of the first element from the selection list
editor.model.pasteStyles(); // applies copied styles to the elements from the selection list
~~~

- pass the ids of certain elements to the method to apply the copied styles to them

~~~js {5-6}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", 
});

editor.model.copyStyles("2"); // copies styles of the specified element
editor.model.pasteStyles(["1", "2", "3"]); // applies copied styles to the specified elements
~~~

**Change log**: Added in v6.0