---
sidebar_label: copy()
title: copy Method of Copy Manager
description: You can learn about the copy method of copy manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# copy()

### Description

@short: Copies selected elements or elements specified by ids

:::note
The `copy()` method works only if the Diagram Editor is initialized in the **default** mode.
:::

### Usage

~~~jsx
copy(ids?: (string | number)[]): void;
~~~

### Parameters

- `ids` - (optional) an array (list) of the elements' ids to copy

### Example

- call the method without arguments to copy elements from the selection list 

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});
// ...
editor.model.copy(); // copies selected items
~~~

- pass some ids to the method to copy the corresponding elements 

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});
// ...
editor.model.copy(["1", "2"]); // copies the specified items 
~~~

**Change log**: Added in v6.0
