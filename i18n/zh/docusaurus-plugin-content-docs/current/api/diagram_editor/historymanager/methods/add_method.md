---
sidebar_label: add()
title: HistoryManager 的 add 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 add 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天 DHTMLX Diagram 评估版本。
---

# add()

### 描述 {#description}

@short: 添加一个新状态

:::info
新状态是自动添加的，因此不建议手动使用此方法
:::

### 用法 {#usage}

~~~jsx
add(newState: array): void;
~~~

### 参数 {#parameters}

- `newState` - （必需）表示图表当前状态的 JSON 对象数组

### 示例 {#example}

~~~jsx {5-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.add([
    { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call the client" },
    { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" }
]);
~~~

**更新日志**：v4.1 中新增
