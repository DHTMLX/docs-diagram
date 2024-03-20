---
sidebar_label: show!!
title: show Property of Shapebar
description: You can learn about the show property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# show

### Description

@short: Optional. Defines whether a shapebar with custom settings is displayed on initialization of the Diagram Editor

### Usage

~~~js
show?: boolean;
~~~

### Default config

~~~js
show: true 
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            show: false, // true by default
        }
    }
});
~~~

**Related article:** TODO

**Change log**: 

The property was added in v6.0