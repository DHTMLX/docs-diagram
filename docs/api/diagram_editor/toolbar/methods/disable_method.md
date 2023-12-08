---
sidebar_label: disable()!!
title: disable Method of Toolbar
description: You can learn about the disable method of toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# disable()

### Description

@short: Disables and dims an item(s) of Toolbar

### Usage

~~~js
disable(items?: string | array): void;
~~~

### Parameters

- `items` - (required) a single item or an array of items  that is disabled in the toolbar. See the full list of items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// display the toolbar with specified items
editor.toolbar.disable(["file", "spacer", "scale"]);
~~~

**Change log**: Added in v6.0
