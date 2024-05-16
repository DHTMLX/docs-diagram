---
sidebar_label: navigationType
title: navigationType Property of Toolbar
description: You can learn about the css property of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# navigationType

### Description

@short: Optional. Sets the action that opens menu options

### Usage

~~~jsx
navigationType?: "click" | "pointer";
~~~

:::info
- `"click"` - displays the menu when a user clicks on it
- `"pointer"` - displays the menu when a user hovers the mouse pointer over it
:::

### Default config

~~~jsx
navigationType: "click"
~~~

### Example

~~~jsx {9}
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

**Change log**: Added in v6.0

**Related articles**:  [Toolbar configuration](guides/diagram_editor/toolbar.md)
