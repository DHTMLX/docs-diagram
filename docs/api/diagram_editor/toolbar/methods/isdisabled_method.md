---
sidebar_label: isDisabled()!!
title: isDisabled Method of Toolbar
description: You can learn about the isDisabled method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# isDisabled()

### Description

@short: Checks if an item of Toolbar is disabled

### Usage

~~~js
isDisabled(item: string): boolean;
~~~

### Parameters

- `item` - (required) an item of Toolbar that is checked. See the full list of available items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// checks if the "file" item is disabled
editor.toolbar.isDisabled("file");
~~~

**Change log**: Added in v6.0
