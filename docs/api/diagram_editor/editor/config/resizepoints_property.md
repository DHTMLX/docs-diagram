---
sidebar_label: resizePoints
title: resizePoints Property of Editor
description: You can learn about the resizePoints property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# resizePoints

### Description

@short: Optional. Enables/disables an ability to resize shapes using resize controls

### Usage

~~~js
resizePoints?: boolean;
~~~

### Default config

~~~js
resizePoints: true
~~~

### Example

~~~js{}
const editor = new dhx.DiagramEditor("editor", {
    type: "default", // "org" | "mindmap" | "default"
    resizePoints: false, // true by default
    // other configurations
});
~~~

**Related article:** TODO

**Change log**: The property was added in v6.0
