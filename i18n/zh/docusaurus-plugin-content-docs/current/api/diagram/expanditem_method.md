---
sidebar_label: expandItem()
title: expandItem 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 expandItem 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# expandItem()

### 描述 {#description}

@short: 显示目标形状的所有子项，或展开分组/泳道

### 用法 {#usage}

~~~jsx
expandItem(
    id: string | number,
    dir?: string
): void;
~~~

### 参数 {#parameters}

- `id` - （必需）项目的 ID
- `dir` - （可选）定义子项相对于根形状显示的方向：`"left"`、`"right"`
  :::note
  `dir` 参数仅能在 Diagram 以 mindmap 模式初始化时使用（*type:`"mindmap"`*）
  :::

### 示例 {#example}

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.expandItem(123);
~~~

或

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type:"mindmap"
});
diagram.data.parse(data);

diagram.expandItem("main", "left");
~~~

**更新日志：**`dir` 参数已在 v3.1 中新增

**相关文章：**[展开/折叠项目](guides/manipulating_items.md#expandingcollapsing-items)
