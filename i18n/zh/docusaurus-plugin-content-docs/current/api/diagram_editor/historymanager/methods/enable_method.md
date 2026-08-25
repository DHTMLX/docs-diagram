---
sidebar_label: enable()
title: HistoryManager 的 enable 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 enable 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# enable()

### 描述 {#description}

@short: 重新启动 HistoryManager 的工作，将当前状态保存为初始状态

### 用法 {#usage}

~~~jsx
enable(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.enable();
~~~

**更新日志**：v4.1 中新增
