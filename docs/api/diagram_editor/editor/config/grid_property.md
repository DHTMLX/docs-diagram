---
sidebar_label: grid
title: grid Property of Editor
description: You can learn about the grid property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# grid

### Description

@short: Optional. Enables/disables a grid that is displayed on the editor canvas

### Usage

~~~jsx
grid?: boolean;
~~~

### Default config

~~~jsx
grid: true
~~~

### Example

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    grid: false, // true by default
    // other configurations
});
~~~

**Change log**: Added in v6.0
