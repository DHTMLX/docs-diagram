---
sidebar_label: parse()!!
title: parse Method of Toolbar
description: You can learn about the parse method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# parse()

### Description

@short: Loads items into Toolbar of Diagram Editor

### Usage

~~~jsx
parse(items: (object | string)[]): void;
~~~

### Parameters

- `items` - (required) an array of items that is parsed into Toolbar. See the full list of available items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~jsx {7-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        toolbar: true
    }
});
// display the toolbar with specified items
editor.toolbar.parse([{ type: "file", disabled: false }, "spacer", "scale"]);
~~~

**Change log**: Added in v6.0
