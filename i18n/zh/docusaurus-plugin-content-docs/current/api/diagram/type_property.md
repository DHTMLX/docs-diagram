---
sidebar_label: type
title: type 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 type 属性。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# type

### 描述 {#description}

@short: 必需。定义 Diagram 初始化的模式

### 用法 {#usage}

~~~jsx
type: "default" | "org" | "mindmap" | "pert";
~~~

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "org" | "mindmap" | "pert"
});
~~~

### Diagram 模式 {#diagram-modes}

DHTMLX Diagram 可以按照以下模式之一进行初始化：`"default"`、`"org"`、`"mindmap"` 或 `"pert"`。要应用所需的模式，请指定 `type` 属性的相应值：

- `type:"default"` 用于可视化某些实体之间的关系

<iframe src="https://snippet.dhtmlx.com/f3uekgjw?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"org"` 用于通过以层级顺序呈现一组人员的关系来展示其结构

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"mindmap"` 用于通过在主要概念周围呈现相关想法的方式来整理某一主题的信息

<iframe src="https://snippet.dhtmlx.com/twd25ww1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"pert"` 用于显示任务和项目的顺序，并可视化它们之间的联系。这种类型的图表在估算关键路径和项目规划方面也很有用

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**更新日志：**

- `"pert"` 类型已在 v6.1 中新增

**相关文章：**

- [概述](/)
- [如何开始使用 Diagram](guides/diagram/initialization.md)
