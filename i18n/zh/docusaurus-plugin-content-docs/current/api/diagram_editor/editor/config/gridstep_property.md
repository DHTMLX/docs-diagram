---
sidebar_label: gridStep
title: Editor 的 gridStep 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editor 的 gridStep 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# gridStep

### 描述 {#description}

@short: 可选。设置网格步长的大小，该步长决定了移动项目时的步进距离

当您更改网格步长的值时，网格区域中各点之间的距离也会随之改变

### 用法 {#usage}

~~~jsx
gridStep?: number;
~~~

:::info
指定的数字必须大于或等于 1
:::

### 默认配置 {#default-config}

~~~jsx
gridStep: 10
~~~

### 示例 {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    gridStep:20
});
~~~

:::note
我们建议您在 Editor 中移动项目时使用方向键。这种方式每次仅精确移动一个网格步长，而使用鼠标移动则可能导致项目一次移动多个网格步长。
:::

**相关文章：** [网格区域](guides/diagram_editor/grid_area.md)
