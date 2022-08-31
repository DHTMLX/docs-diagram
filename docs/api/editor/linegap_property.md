---
sidebar_label: lineGap
title: lineGap Property of Editor
description: You can learn about the lineGap property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# 

<h1 style = {{color: "red"}}><s>lineGap</s></h1>

:::danger
Starting from version 5.0, the `lineGap` property is **deprecated** and no longer supported. Instead, you need to use the **lineGap** parameter of the [lineConfig](diagram/api/editor/lineconfig_property.md) property.
:::

:::info
The property is available only in the default mode of the editor (*type:"default"*). 
:::

### Description

@short: Optional. Adds an offset for two connected shapes, and fills the gap with an additional line

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
