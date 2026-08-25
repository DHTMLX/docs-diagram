---
sidebar_label: pasteStyles()
title: Copy Manager 的 pasteStyles 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Copy manager 的 pasteStyles 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# pasteStyles()

### 描述 {#description}

@short: 将复制的样式应用于所选元素列表或由 ID 指定的元素

### 用法 {#usage}

~~~jsx
pasteStyles(ids?: (string | number)[]): void;
~~~

### 参数 {#parameters}

- `ids` - （可选）要应用复制样式的元素 ID 组成的数组

### 示例 {#example}

- 不传入参数调用该方法，将样式应用于选择列表中的元素

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles(); // 复制选择列表中第一个元素的样式
editor.model.pasteStyles(); // 将复制的样式应用于选择列表中的元素
~~~

- 向该方法传入某些元素的 ID，将复制的样式应用于这些元素

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles("2"); // 复制指定元素的样式
editor.model.pasteStyles(["1", "2", "3"]); // 将复制的样式应用于指定的元素
~~~

**更新日志**：v6.0 中新增
