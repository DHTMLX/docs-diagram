---
sidebar_label: add()
title: Data Collection 的 add 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 add 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# add()

### 描述 {#description}

@short: 向 Diagram 中添加一个新项目

### 用法 {#usage}

~~~jsx
add(new_item: object | array): string | number | array;
~~~

### 参数 {#parameters}

- `new_item` - （必需）新项目的对象，或多个项目对象组成的数组

### 返回值 {#returns}

该方法返回项目的 id，或由多个项目 id 组成的数组。

### 示例 {#example}

共有两种连接形状的方法。您可以添加一个已定义父 ID 的形状：

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});
diagram.data.parse(data);

diagram.data.add({ id: "3.2", text: "New Item", type: "card", parent: "3" });
~~~

或者，您也可以同时添加一个形状对象和一个连接线对象：

~~~jsx {2,6-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.add({ type: "card", id: "3.2", text: "New Item" });
diagram.data.add({ type: "line",  from: "3", to: "3.2" });
~~~

**相关文章：**  [添加项目](guides/manipulating_items.md#adding-an-item)

**相关示例：** [Diagram. Data. 添加/删除项目](https://snippet.dhtmlx.com/8wi20uop)
