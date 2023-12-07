---
sidebar_label: view!!
title: view Property of Editor
description: You can learn about the view property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# view

### Description

@short: An object that configures Toolbar, Shapebar, and Editbar views of the Diagram Editor

### Usage

~~~js
view: {
    toolbar?: boolean | object,
    shapebar?: boolean | object,
    editbar?: boolean | object,
};
~~~

### Parameters

- `toolbar` - (optional) allows to show/hide **Toolbar** (if *boolean*) or configure its appearance (if *object*). Refer to the [Toolbar API](../../../../../category/toolbar-api/) section for more information about configuring the toolbar
- `shapebar` - (optional) allows to show/hide **Shapebar** (if *boolean*) or configure its appearance (if *object*). Refer to the [Shapebar API](../../../../../category/shapebar-api/) section for more information about configuring the shapebar
- `editbar` - (optional) allows to show/hide **Editbar** (if *boolean*) or configure its appearance (if *object*). Refer to the [Editbar API](../../../../../category/editbar-api/) section for more information about configuring the Editbar

### Default config

~~~js
view: {
    toolbar: true,
    shapebar: true,
    editbar: true,
}
~~~

### Example

~~~js {3-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default", // required 
    view: {
        toolbar: {
            css: "toolbar_custom",
            data: ["file", "separator", "scale"],
        },
        shapebar: {
            width: 400,
        },
        editbar: false,
    },
    // other configurations 
});
~~~

**Change log**: Added in v6.0
