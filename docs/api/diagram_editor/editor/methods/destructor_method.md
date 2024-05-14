---
sidebar_label: destructor() 
title: destructor Method of Editor
description: You can learn about the destructor method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# destructor()

### Description

@short: Removes a diagram editor instance and releases occupied resources

### Usage

~~~jsx
destructor(): void;
~~~

### Example

~~~jsx {6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);

editor.destructor();
~~~

**Change log:** Added in v6.0
