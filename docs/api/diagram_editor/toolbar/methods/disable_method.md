---
sidebar_label: disable()!!
title: disable Method of Toolbar
description: You can learn about the disable method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# disable()

### Description

@short: Disables and dims an item(s) of Toolbar

### Usage

~~~js
disable(items?: string | array): void;
~~~

### Parameters

- `items` - (optional) a single item or an array of items that will be disabled in Toolbar. See the full list of available items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// disables the "file" item
editor.toolbar.disable("file");
// disables "file" and "scale" items
editor.toolbar.disable(["file","scale"]);
// disables all items
editor.toolbar.disable();
~~~

**Change log**: Added in v6.0
