---
sidebar_label: paint()!!
title: paint Method of Toolbar
description: You can learn about the paint method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# paint()

### Description

@short: Repaints Toolbar on a page

### Usage

~~~js
paint(): void;
~~~

### Example

~~~js {7-8}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// repaints Toolbar on a page
editor.toolbar.paint();
~~~

**Change log**: Added in v6.0
