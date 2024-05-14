---
sidebar_label: hide()!!
title: hide Method of View
description: You can learn about the hide method of view in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# hide()

### Description

@short: Hides Toolbar, Editbar, and Shapebar views of Diagram Editor.

:::info
If you need to hide the **Toolbar**, **Editbar**, and **Shapebar** view separately, call the `hide()` method with the corresponding parameter. To hide all these elements, call the `hide()` method without parameters.
:::

### Usage

~~~jsx
hide(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### Parameters

- `toolbar` - (optional) hides Toolbar
- `shapebar` - (optional) hides Shapebar
- `editbar` - (optional) hides Editbar

### Example

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
});

// hides the Shapebar view
editor.view.hide("shapebar"); 

// hides Shapebar, Editbar, and Toolbar
editor.view.hide();
~~~

**Change log**: Added in v6.0
