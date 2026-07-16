---
sidebar_label: disable()
title: HistoryManager 的 disable 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 disable 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天 DHTMLX Diagram 评估版本。
---

# disable()

### 描述 {#description}

@short: 阻止 HistoryManager

### 用法 {#usage}

~~~jsx
disable(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.disable();
~~~

:::note
请注意，禁用 HistoryManager 后，您将无法通过快捷键操作历史记录。
:::

**更新日志**：v4.1 中新增
