---
sidebar_label: css!!
title: css Property of Editbar
description: You can learn about the css property of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# css

### Description

@short: Optional. Applies a custom CSS class to the Editbar

### Usage

~~~js
css?: string;
~~~

### Example

~~~jsx {7}
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
            properties: {...}
        }
    }
});
~~~

**Change log**: The property was added in v6.0
