---
sidebar_label: undo()
title: HistoryManager 的 undo 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 undo 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# undo()

### 描述 {#description}

@short: 撤销 Diagram Editor 中的最后一步操作

### 用法 {#usage}

~~~jsx
undo(first?: boolean): void;
~~~

### 参数 {#parameters}

- `first` - （可选）*true* 表示撤销所有历史更改

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.undo();
~~~

**更新日志**：v4.1 中新增
