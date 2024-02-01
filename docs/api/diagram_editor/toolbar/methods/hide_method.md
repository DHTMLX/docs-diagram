---
sidebar_label: hide()!!
title: hide Method of Toolbar
description: You can learn about the hide method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# hide()

### Description

@short: Hides an item(s) of Toolbar

### Usage

~~~js
hide(items?: string | array): void;
~~~

### Parameters

- `items` - (optional) a single item or an array of items that will be hidden in Toolbar. See the full list of available items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// hides the "file" item
editor.toolbar.hide("file");
// hides "file" and "scale" items
editor.toolbar.hide(["file","scale"]);
// hides all items
editor.toolbar.hide();
~~~

**Change log**: Added in v6.0
