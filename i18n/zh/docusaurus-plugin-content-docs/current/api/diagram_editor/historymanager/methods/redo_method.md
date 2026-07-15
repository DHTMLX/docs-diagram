---
sidebar_label: redo()
title: HistoryManager 的 redo 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 redo 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# redo()

### 描述 {#description}

@short: 恢复被 Undo 操作撤销的动作

### 用法 {#usage}

~~~jsx
redo(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.redo();
~~~

**更新日志**：v4.1 中新增
