---
sidebar_label: remove()
title: Data Collection 的 remove 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 remove 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# remove()

### 描述 {#description}

@short: 从 Diagram 中删除指定项目

:::note
如果 Diagram 以组织结构图（`type: "org"`）或思维导图（`type: "mindmap"`）模式初始化，删除某个形状时也会移除指向该形状的连接以及所有子形状
:::

### 用法 {#usage}

~~~jsx
remove(id: string | number | array): void;
~~~

### 参数 {#parameters}

- `id` - （必需）要删除的项目的 id

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.remove("2");
~~~

**相关文章：**  [删除项目](guides/manipulating_items.md#deleting-items)

**相关示例：** [Diagram。数据。添加/删除项目](https://snippet.dhtmlx.com/8wi20uop)
