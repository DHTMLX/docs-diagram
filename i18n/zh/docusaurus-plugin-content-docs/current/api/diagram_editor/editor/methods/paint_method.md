---
sidebar_label: paint()
title: Editor 的 paint 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 paint 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 免费的 30 天评估版本。
---

# paint()

### 描述 {#description}

@short: 重新绘制 editor

### 用法 {#usage}

~~~jsx
paint(): void;
~~~

### 示例 {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.paint();
~~~
