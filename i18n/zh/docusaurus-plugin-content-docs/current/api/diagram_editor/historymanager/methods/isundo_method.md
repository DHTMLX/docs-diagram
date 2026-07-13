---
sidebar_label: isUndo()
title: HistoryManager 的 isUndo 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 isUndo 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# isUndo()

### 描述 {#description}

@short: 检查某个动作是否已被撤销

### 用法 {#usage}

~~~jsx
isUndo(): boolean;
~~~

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.isUndo();
~~~

### 返回值 {#returns}

如果动作已被撤销，该方法返回 `true`；否则返回 `false`

**更新日志**：v4.1 中新增
