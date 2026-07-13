---
sidebar_label: isVisible()
title: 视图的 isVisible 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解视图的 isVisible 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# isVisible()

### 描述 {#description}

@short: 检查 Diagram Editor 的 Toolbar、Editbar 或 Shapebar 视图是否可见。

### 用法 {#usage}

~~~jsx
isVisible(view: "toolbar" | "shapebar" | "editbar"): boolean;
~~~

### 参数 {#parameters}

- `toolbar` - （必需）检查 Toolbar 是否可见
- `shapebar` - （必需）检查 Shapebar 是否可见
- `editbar` - （必需）检查 Editbar 是否可见

### 示例 {#example}

~~~jsx {9-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: false,
        toolbar: true
    }
});

// 检查 Toolbar 和 Shapebar 的可见性
editor.view.isVisible("shapebar"); // 返回 false
editor.view.isVisible("toolbar"); // 返回 true
~~~

**更新日志**：v6.0 中新增
