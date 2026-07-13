---
sidebar_label: show()
title: 视图的 show 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解视图的 show 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# show()

### 描述 {#description}

@short: 显示 Diagram Editor 的 Toolbar、Editbar 和 Shapebar 视图

:::info
如果需要分别显示 `Toolbar`、`Editbar` 或 `Shapebar` 视图，请使用相应的参数调用 `show()` 方法。若要显示所有这些元素，请调用不带参数的 `show()` 方法。
:::

### 用法 {#usage}

~~~jsx
show(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### 参数 {#parameters}

- `toolbar` - （可选）显示 Toolbar
- `shapebar` - （可选）显示 Shapebar
- `editbar` - （可选）显示 Editbar

### 示例 {#example}

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

// 显示 Shapebar 视图
editor.view.show("shapebar");

// 显示 Shapebar、Editbar 和 Toolbar
editor.view.show();
~~~

**更新日志**：v6.0 中新增
