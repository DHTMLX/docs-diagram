---
sidebar_label: getState()!!
title: getState Method of Toolbar
description: You can learn about the getState method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getState()

### Description

@short: Gets a value/state of control in Toolbar

### Usage

~~~js
getState(id?: string | number): string | boolean | object;
~~~

### Parameters

- `id` - (optional) an ID of Toolbar item. See the full list of available items [here](api/diagram_editor/toolbar/config/items_property.md)

### Example

~~~js {7-10}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// gets a state of a control by ID
editor.toolbar.getState("search"); // -> "toolbar"
// gets a state of all controls
editor.toolbar.getState(); // -> { "search": "toolbar", "edit": true, "align": "right" }
~~~

**Change log**: Added in v6.0
