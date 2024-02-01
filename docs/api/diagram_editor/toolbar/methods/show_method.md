---
sidebar_label: show()!!
title: show Method of Toolbar
description: You can learn about the show method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# show()

### Description

@short: Shows an item(s) of Toolbar

### Usage

~~~js
show(items?: string | array): void;
~~~

### Parameters

- `items` - (optional) a single item or an array of items that will be hidden in the toolbar. See the full list of items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// shows the "file" item
editor.toolbar.show("file");
// shows "file" and "scale" items
editor.toolbar.show(["file","scale"]);
// shows all items
editor.toolbar.show();
~~~

**Change log**: Added in v6.0
