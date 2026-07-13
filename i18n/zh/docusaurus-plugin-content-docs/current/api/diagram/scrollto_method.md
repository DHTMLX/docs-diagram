---
sidebar_label: scrollTo()
title: scrollTo 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 scrollTo 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# scrollTo()

### 描述 {#description}

@short: 将 Diagram 的内部滚动位置设置为指定位置

### 用法 {#usage}

~~~jsx
scrollTo(x: number, y: number): void;
~~~

### 参数 {#parameters}

- `x` - （必选）水平滚动位置
- `y` - （必选）垂直滚动位置

### 示例 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.scrollTo(100, 80);
~~~

**相关文章**：[滚动 Diagram](guides/diagram/scrolling_diagram.md)
