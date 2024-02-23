---
sidebar_label: width
title: width Property of Shapebar
description: You can learn about the width property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# width

### Description

@short: Optional. Sets the width of the shapebar of the editor

### Usage

~~~js
width?: number;
~~~

### Default config

~~~js
width: 300
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        shapebar: {
            width: 400, 
            // other configurations
        },
    }
});
~~~

**Related article:** TODO

**Change log**: Added in v6.0