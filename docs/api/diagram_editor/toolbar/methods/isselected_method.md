---
sidebar_label: isSelected()!!
title: isSelected Method of Toolbar
description: You can learn about the isSelected method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# isSelected()

### Description

@short: Checks if an item of Toolbar is selected

### Usage

~~~js
isSelected(id: string | number): boolean;
~~~

### Parameters

- `id` - (required) an item ID of Toolbar. See the full list of available items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// checks if the "file" item is selected
editor.toolbar.isSelected("file"); // -> true
~~~

**Change log**: Added in v6.0
