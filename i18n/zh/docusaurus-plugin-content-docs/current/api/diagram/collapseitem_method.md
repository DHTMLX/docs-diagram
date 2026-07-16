---
sidebar_label: collapseItem()
title: collapseItem 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 collapseItem 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# collapseItem()

### 描述 {#description}

@short: 隐藏目标形状的所有子项，或折叠组/泳道

### 用法 {#usage}

~~~jsx
collapseItem(
    id: string | number,
    dir?: string
): void;
~~~

### 参数 {#parameters}

- `id` - （必填）项目的 **ID**
- `dir` - （可选）定义子项相对于根形状隐藏的方向：`"left"` 或 `"right"`。
  :::note
  `dir` 参数仅在图表以思维导图模式初始化时才可使用 (*type:`"mindmap"`*)
  :::

### 示例 {#example}

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.collapseItem(123);
~~~

或者

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type:"mindmap"
});
diagram.data.parse(data);

diagram.collapseItem("main", "left");
~~~

**更新日志：** `dir` 参数 v3.1 中新增

**相关文章：** [展开/折叠项目](guides/manipulating_items.md#expandingcollapsing-items)
