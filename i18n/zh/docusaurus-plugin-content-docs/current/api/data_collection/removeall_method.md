---
sidebar_label: removeAll()
title: Data Collection 的 removeAll 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 removeAll 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# removeAll()

### 描述 {#description}

@short: 删除 Diagram 中的所有项目

### 用法 {#usage}

~~~jsx
removeAll(): void;
~~~

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.removeAll();
~~~

**相关文章：**  [删除项目](guides/manipulating_items.md#deleting-items)

**相关示例：** [Diagram。数据。添加/删除项目](https://snippet.dhtmlx.com/8wi20uop)
