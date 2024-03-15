---
sidebar_label: items!!
title: items Property of Toolbar
description: You can learn about the items property of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# items

### Description

@short: Optional. An array with controls arranged on Toolbar of Diagram Editor

### Usage

~~~js
items?: [
// TODO
];
~~~

### Parameters

- `parameter` - (required) ...
- `parameter` - (optional) ...
- *other parameters with description*

### Default config

~~~jsx
// Default config for Toolbar in the "default" mode
const defaultConfig = [ "file", "edit", "view", "arrange", "spacer", "scale" ];

// Default config for Toolbar in the "org" and "mindmap" modes
const defaultConfig = [
    "file",
    {
        type: "edit",
        items: [
            "undo",
            "redo",
            "separator",
            "copyStyle",
            "pasteStyle",
            "separator",
            "selectAll",
            "selectNone",
        ],
    },
    {
        type: "view",
        items: [
            "theme",
            "separator",
            "editbar",
            "separator",
            "grid",
            "separator",
            "resizePoints",
            "itemsDraggable",
            "separator",
            "zoomIn",
            "zoomOut",
        ],
    },
    "spacer",
    "scale",
]
~~~

### Example

~~~js {7-11}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            navigationType: "pointer"
            items: [
                "file", 
                "spacer", 
                "scale"
            ],
        },
    }
});
~~~

**Change log**: Added in v6.0
