---
sidebar_label: enable()!!
title: enable Method of Toolbar
description: You can learn about the enable method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# enable()

### Description

@short: Enables an item(s) of Toolbar

### Usage

~~~js
enable(items?: string | array): void;
~~~

### Parameters

- `items` - (optional) a single item or an array of items that is enabled in Toolbar. See the full list of available items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// enables the "file" item
editor.toolbar.enable("file");
// enables "file" and "scale" items
editor.toolbar.enable(["file","scale"]);
// enables all items
editor.toolbar.enable();
~~~

**Change log**: Added in v6.0
