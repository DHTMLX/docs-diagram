---
sidebar_label: select()!!
title: select Method of Toolbar
description: You can learn about the select method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# select()

### Description

@short: Selects an item(s) of Toolbar

### Usage

~~~js
select(id: string | number, unselect?: boolean): void;
~~~

### Parameters

- `id` - (required) an ID of a Toolbar item to be selected. See the full list of items [here](api/diagram_editor/toolbar/config/items_property.md)
- `unselect` - (optional) *true* (by default) to unselect previously selected items; otherwise *false*

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// selects the "file" item
editor.toolbar.select("file", true);
~~~

**Change log**: Added in v6.0
