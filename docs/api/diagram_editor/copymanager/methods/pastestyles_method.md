---
sidebar_label: pasteStyles()!!
title: pasteStyles Method of Copy Manager
description: You can learn about the pasteStyles method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!pasteStyles()

### Description

@short: applies styles to the list of passed or selected elements

### Usage

~~~js
pasteStyles(ids?: (string | number)[]): void;
~~~

### Parameters

- `ids` - (optional) an array of elements' ids to apply the copied styles for

### Example

- to use the method without parameters, enable the `select: true` option:

~~~js
const editor = new dhx.DiagramEditor("editor", { 
    select: true 
});

editor.model.copyStyles(); 
editor.model.pasteStyles(); 
~~~

- when you pass parameters, there is no need to enable selection:

~~~js
const editor = new dhx.DiagramEditor("editor");

editor.model.copyStyles("1");
editor.model.pasteStyles(["1", "2", "3"]); 
~~~

**Change log**: Added in v6.0