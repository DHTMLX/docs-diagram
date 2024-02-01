---
sidebar_label: getSelected()!!
title: getSelected Method of Toolbar
description: You can learn about the getSelected method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getSelected()

### Description

@short: Returns an array with IDs of selected items in Toolbar

### Usage

~~~js
getSelected(): array; 
~~~

### Returns

The method returns an array with IDs of selected items in Toolbar

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// returns an array with IDs of selected items
editor.toolbar.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

**Change log**: Added in v6.0
