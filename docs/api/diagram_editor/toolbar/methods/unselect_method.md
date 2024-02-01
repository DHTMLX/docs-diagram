---
sidebar_label: unselect()!!
title: unselect Method of Toolbar
description: You can learn about the unselect method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# unselect()

### Description

@short: Unselects an item(s) of Toolbar

### Usage

~~~js
unselect(id?: string | number): void;
~~~

### Parameters

- `id` - (optional) an ID of a Toolbar item to be unselected. See the full list of items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// unselects the "file" item
editor.toolbar.unselect("file");
// unselects all items
editor.toolbar.unselect();
~~~

**Change log**: Added in v6.0
