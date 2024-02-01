---
sidebar_label: setState()!!
title: setState Method of Toolbar
description: You can learn about the setState method of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# setState()

### Description

@short: Sets values/states of controls in Toolbar

### Usage

~~~js
setState(state: object): void;
~~~

### Parameters

- `state` - an object of ***key:value*** pairs, where the key is the ID of a control and the value is a new value/state of the control

### Example

~~~js {7-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// sets state of controls in Toolbar
editor.toolbar.setState({
    "search": "Hello",
    "edit": true,
    "align": "right"
}); 
~~~

**Change log**: Added in v6.0
