---
sidebar_label: copyStyles()!!
title: copyStyles Method of Copy Manager
description: You can learn about the copyStyles method of copy manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# copyStyles()

### Description

@short: copies styles of the specified element or the first element from the selection list

### Usage

~~~js
copyStyles(id?: string | number): void;
~~~

### Parameters

- `id`- (optional) the id of an element selected for copying styles

### Example

-  call the method without arguments to copy styles of the *first element from the selection list*

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default",
});

editor.model.copyStyles(); // copies styles of the first element from the selection list
~~~

- pass the id of some element to the method to copy its styles

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default",
});

editor.model.copyStyles("1"); // copies styles of the specified element
~~~

**Change log**: Added in v6.0