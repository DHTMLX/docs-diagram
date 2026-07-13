---
sidebar_label: connectionPoints
title: Editor 的 connectionPoints 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 connectionPoints 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# connectionPoints

### 描述 {#description}

@short: 可选。启用/禁用通过连接控件连接形状的功能

:::info
`connectionPoints` 属性仅在 `default` 模式下有效。
:::

### 用法 {#usage}

~~~jsx
connectionPoints?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
connectionPoints: true
~~~

### 示例 {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // 仅支持 "default"
    connectionPoints: false, // 默认为 true
    // 其他配置
});
~~~

**更新日志**：v6.0 中新增
