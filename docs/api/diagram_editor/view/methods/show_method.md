---
sidebar_label: show()
title: show Method of View
description: You can learn about the show method of view in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# show()

### Description

@short: Shows Toolbar, Editbar, and Shapebar views of Diagram Editor

:::info
If you need to show the **Toolbar**, **Editbar**, or **Shapebar** view separately, call the `show()` method with the corresponding parameter. To show all these elements, call the `show()` method without parameters.
:::

### Usage

~~~jsx
show(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### Parameters

- `toolbar` - (optional) shows Toolbar
- `shapebar` - (optional) shows Shapebar
- `editbar` - (optional) shows Editbar

### Example

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

// shows the Shapebar view 
editor.view.show("shapebar"); 

// shows Shapebar, Editbar, and Toolbar 
editor.view.show();
~~~

**Change log**: Added in v6.0
