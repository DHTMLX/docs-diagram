---
sidebar_label: zoomOut()
title: zoomOut Method of Editor
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 zoomOut 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# zoomOut()

### 描述 {#description}

@short: 缩小图表

### 用法 {#usage}

~~~jsx
zoomOut(step?: number): void;
~~~

### 参数 {#parameters}

- `step` - （可选）图表缩小的步长；*默认值：0.05*

### 示例 {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomOut(0.1);
~~~

**更新日志**：v4.1 中新增
