---
sidebar_label: getScrollState()
title: getScrollState 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 getScrollState 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getScrollState()

### 描述 {#description}

@short: 返回 diagram 内部滚动的位置

### 用法 {#usage}

~~~jsx
getScrollState(): object;
~~~

### 返回值 {#returns}

该方法返回一个对象，用于存储滚动位置。该对象包含两个属性：

- `x` - 水平滚动位置
- `y` - 垂直滚动位置

### 示例 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );
~~~

**相关文章：** [滚动 Diagram](guides/diagram/scrolling_diagram.md)

**相关示例：** [Diagram. 滚动内容](https://snippet.dhtmlx.com/f970hbym)
