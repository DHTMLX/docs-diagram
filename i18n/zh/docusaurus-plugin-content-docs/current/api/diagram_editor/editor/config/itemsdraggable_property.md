---
sidebar_label: itemsDraggable
title: Editor 的 itemsDraggable 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editor 的 itemsDraggable 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# itemsDraggable

:::info
该属性仅在 org chart 和 mindmap 模式下有效。被移动的项目会连同其所有子项一起被拖动。
:::

### 描述 {#description}

@short: 可选。启用/禁用将项目从一个父项目拖动到另一个父项目

### 用法 {#usage}

~~~jsx
itemsDraggable?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
itemsDraggable: true
~~~

### 示例 {#example}

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "org", //  org" or "mindmap"
    itemsDraggable: false
});
~~~

**更新日志：** v4.1 中新增
