---
sidebar_label: gridStep
title: gridStep Property of Editor
description: You can learn about the gridStep property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# gridStep

### Description

@short: Optional. Sets the size of a grid step that defines the step of moving an item

### Usage

~~~js
gridStep?: number;
~~~

:::info
The specified number must be greater than or equal to 1
:::

### Default config

~~~js
gridStep: 10
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    gridStep:20
});
~~~

:::note
We recommend that you use arrows while moving an item in the editor. This way sets exactly one grid step of moving the item, whereas using a mouse can cause shift the item to several grid steps.
:::
