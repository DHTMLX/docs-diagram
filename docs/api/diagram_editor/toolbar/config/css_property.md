---
sidebar_label: css!!
title: css Property of Toolbar
description: You can learn about the css property of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# css

### Description

@short: Optional. Applies a custom CSS class

:::info
The custom CSS class applies to expanded elements as well. The `--popup-menu` prefix is attached to such elements.
:::

### Usage

~~~js
css?: string;
~~~

### Example

~~~js {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // displays default Toolbar
        // or configure Toolbar via object
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

**Change log**: The property was added in v6.0

**Related articles:**  [Toolbar configuration](guides/diagram_editor/toolbar.md)
