---
sidebar_label: lineGap
title: lineGap Property of Editor
description: You can learn about the lineGap property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineGap

:::info
The property is available only in the default mode of the editor (*type:"default"*). The property does not work if you use groups or swimlanes.
:::

### Description

@short: optional, adds an offset for two connected shapes, and fills the gap with an additional line

### Usage

~~~js
lineGap?: number;
~~~

### Default config

~~~js
lineGap: 10
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    lineGap: 50
});
~~~

The result of applying the **lineGap** property is shown in the image below:

![](../../assets/linegap_config.png)
