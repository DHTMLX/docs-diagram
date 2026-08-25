---
sidebar_label: zoomIn()
title: zoomIn Method of Editor
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 zoomIn 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# zoomIn()

### 描述 {#description}

@short: 放大图表

### 用法 {#usage}

~~~jsx
zoomIn(step?: number): void;
~~~

### 参数 {#parameters}

- `step` - （可选）图表放大的步长；*默认值：0.05*

### 示例 {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomIn(0.1);
~~~

**更新日志**：v4.1 中新增
