---
sidebar_label: select
title: select 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 select 属性。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# select

### 描述 {#description}

@short: 可选。在 Diagram 中启用选择功能

### 用法 {#usage}

~~~jsx
select?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
select: false
~~~

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
~~~

**相关文章**：

- [启用项目选择](guides/diagram/configuration.md#enabling-items-selection)
- [选择项目](guides/manipulating_items.md#selecting-items)
