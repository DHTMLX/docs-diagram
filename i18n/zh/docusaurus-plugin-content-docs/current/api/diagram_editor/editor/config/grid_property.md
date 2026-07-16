---
sidebar_label: grid
title: Editor 的 grid 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editor 的 grid 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# grid

### 描述 {#description}

@short: 可选。启用/禁用在 Editor 画布上显示的网格

### 用法 {#usage}

~~~jsx
grid?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
grid: true
~~~

### 示例 {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    grid: false, // 默认为 true
    // 其他配置项
});
~~~

**更新日志：** v6.0 中新增
