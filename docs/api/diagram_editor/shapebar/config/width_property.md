---
sidebar_label: width
title: width Property of Shapebar
description: You can learn about the width property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# width

### Description

@short: Optional. Sets the width of the shapebar of the editor

### Usage

~~~jsx
width?: number;
~~~

### Default config

~~~jsx
width: 300
~~~

### Example

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // displays default Shapebar
        // or configure Shapebar via object
        shapebar: {
            width: 400 // 300 by default
        }
    }
});
~~~

**Related article:** [Shapebar](guides/diagram_editor/shapebar.md/#setting-the-width-of-shapebar)

**Change log**: Added in v6.0
