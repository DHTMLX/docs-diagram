---
sidebar_label: setFocus()!!
title: setFocus Method of Toolbar
description: You can learn about the setFocus method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# setFocus()

### Description

@short: Checks if an input item of Toolbar is disabled

### Usage

~~~js
setFocus(item: string): boolean;
~~~

### Parameters

- `item` - (required) an input item of Toolbar that will be focused. See the available list of items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// checks if the "file" item is disabled
editor.toolbar.setFocus("search");
~~~

**Change log**: Added in v6.0
