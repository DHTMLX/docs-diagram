---
sidebar_label: properties!!
title: properties Property of Editbar
description: You can learn about the properties property of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# properties - conditions???

### Description

@short: Optional. TODO

### Usage

~~~js
properties?: {
    ... // TODO
};
~~~

### Default config

~~~jsx {}
properties: TODO
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
            controls: {...},
            properties: {
                // TODO
            }
        }
    }
});
~~~

**Change log**: The property was added in v6.0
