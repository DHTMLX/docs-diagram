---
sidebar_label: isVisible()!!
title: isVisible Method of View
description: You can learn about the isVisible method of view in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# isVisible()

### Description

@short: Checks if the Toolbar, Editbar, or Shapebar view of Diagram Editor is visible.

### Usage

~~~js
isVisible(view: "toolbar" | "shapebar" | "editbar"): boolean;
~~~

### Parameters

- `toolbar` - (required) checks if Toolbar is visible
- `shapebar` - (required) checks if Shapebar is visible
- `editbar` - (required) checks if Editbar is visible

### Example

~~~js {9-11}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        shapebar: false,
        toolbar: true,
    },
});

// check the Toolbar and Shapebar visibility
editor.view.isVisible("shapebar"); // return false
editor.view.isVisible("toolbar"); // return true
~~~

**Change log**: Added in v6.0
