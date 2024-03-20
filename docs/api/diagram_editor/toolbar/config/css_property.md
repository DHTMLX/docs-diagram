---
sidebar_label: css!!
title: css Property of Toolbar
description: You can learn about the css property of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# css

### Description

@short: Optional. Sets a custom CSS class

:::info
The custom CSS class applies to expanded elements as well. The `--popup-menu` prefix is attached to such elements.
:::

### Usage

~~~js
css?: string;
~~~

### Example

~~~js {5}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        },
    }
});
~~~

**Change log**: Added in v6.0
