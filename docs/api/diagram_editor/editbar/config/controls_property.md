---
sidebar_label: controls!!
title: controls Property of Editbar
description: You can learn about the controls property of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# controls

### Description

@short: Optional. TODO

### Usage

~~~js
controls?: {
    ... // TODO
};
~~~

### Default config

~~~jsx {}
controls: TODO
~~~

### Example

~~~jsx {11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // displays default Editbar
        // or configure Editbar via object
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            properties: {...},
            controls: {
                // TODO
            }
        }
    }
});
~~~

**Change log**: The property was added in v6.0
