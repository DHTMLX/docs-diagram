---
sidebar_label: copyStyles()!!
title: copyStyles Method of Copy Manager
description: You can learn about the copyStyles method of copy manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!copyStyles()

### Description

@short: copies styles of the specified element or of the first element from the selection list

:::note
The *copyStyles()* method works only if the Diagram Editor is initialized in the ***default*** mode.
:::

### Usage

~~~js
copyStyles(id?: string | number): void;
~~~

### Parameters

- `id`- (optional) the id of an element selected for copying styles

### Example

-  call the method without arguments, to copy styles of the first element from the selection list:

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default",
});

editor.model.copyStyles();  
~~~

- or pass the id of an element to the method to copy its styles:

~~~js {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default",
});

editor.model.copyStyles("1");
~~~

**Change log**: Added in v6.0