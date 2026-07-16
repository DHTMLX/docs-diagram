---
sidebar_label: hide()
title: 视图的 hide 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解视图的 hide 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# hide()

### 描述 {#description}

@short: 隐藏 Diagram Editor 的 Toolbar、Editbar 和 Shapebar 视图。

:::info
如果需要分别隐藏 `Toolbar`、`Editbar` 和 `Shapebar` 视图，请使用相应的参数调用 `hide()` 方法。若要隐藏所有这些元素，请调用不带参数的 `hide()` 方法。
:::

### 用法 {#usage}

~~~jsx
hide(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### 参数 {#parameters}

- `toolbar` - （可选）隐藏 Toolbar
- `shapebar` - （可选）隐藏 Shapebar
- `editbar` - （可选）隐藏 Editbar

### 示例 {#example}

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

// 隐藏 Shapebar 视图
editor.view.hide("shapebar");

// 隐藏 Shapebar、Editbar 和 Toolbar
editor.view.hide();
~~~

**更新日志**：v6.0 中新增
