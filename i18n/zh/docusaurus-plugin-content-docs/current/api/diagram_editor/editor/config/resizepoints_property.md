---
sidebar_label: resizePoints
title: 编辑器的 resizePoints 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 resizePoints 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# resizePoints

### 描述 {#description}

@short: 可选。启用或禁用通过调整大小控件来调整形状大小的功能

### 用法 {#usage}

~~~jsx
resizePoints?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
resizePoints: true
~~~

### 示例 {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    resizePoints: false, // 默认为 true
    // 其他配置
});
~~~

**更新日志**：v6.0 中新增
