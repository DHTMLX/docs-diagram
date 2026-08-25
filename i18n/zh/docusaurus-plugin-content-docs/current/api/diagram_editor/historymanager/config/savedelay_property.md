---
sidebar_label: saveDelay
title: HistoryManager 的 saveDelay 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 HistoryManager 的 disabled 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天 DHTMLX Diagram 评估版本。
---

# saveDelay

### 描述 {#description}

@short: 设置以毫秒为单位保存当前状态的时间间隔

### 用法 {#usage}

~~~jsx
saveDelay: number;
~~~

### 默认配置 {#default-config}

~~~jsx
saveDelay: 500
~~~

### 示例 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

editor.history.saveDelay = 1000;
~~~

**更新日志**：v4.1 中新增
