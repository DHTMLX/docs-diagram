---
sidebar_label: reset()
title: HistoryManager 的 reset 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 reset 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# reset()

### 描述 {#description}

@short: 重置之前的更改并保存当前状态

### 用法 {#usage}

~~~jsx
reset(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.reset();
~~~

**更新日志**：v4.1 中新增
