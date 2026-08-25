---
sidebar_label: isRedo()
title: HistoryManager 的 isRedo 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 isRedo 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# isRedo()

### 描述 {#description}

@short: 检查通过 Undo 操作撤销的动作是否已被恢复

### 用法 {#usage}

~~~jsx
isRedo(): boolean;
~~~

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
...
editor.history.isRedo();
~~~

### 返回值 {#returns}

如果通过 Undo 操作撤销的动作已被恢复，该方法返回 `true`；否则返回 `false`

**更新日志**：v4.1 中新增
