---
sidebar_label: copyStyles()
title: Copy Manager 的 copyStyles 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Copy manager 的 copyStyles 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# copyStyles()

### 描述 {#description}

@short: 复制指定元素或选择列表中第一个元素的样式

### 用法 {#usage}

~~~jsx
copyStyles(id?: string | number): void;
~~~

### 参数 {#parameters}

- `id`- （可选）用于复制样式的所选元素的 id

### 示例 {#example}

-  不传入参数调用该方法，以复制*选择列表中第一个元素*的样式

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles(); // 复制选择列表中第一个元素的样式
~~~

- 向该方法传入某个元素的 id，以复制其样式

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles("1"); // 复制指定元素的样式
~~~

**更新日志**：v6.0 中新增
