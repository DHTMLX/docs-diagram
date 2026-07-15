---
sidebar_label: map()
title: Data Collection 的 map 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 map 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# map()

### 描述 {#description}

@short: 遍历图表的所有项目

### 用法 {#usage}

~~~jsx
map(callback: function): array;
~~~

### 参数 {#parameters}

- `callback` - （必需）一个回调函数，将针对图表的每个项目调用

### 返回值 {#returns}

该方法返回一个新的项目数组，其中每个项目都是回调函数的返回结果

### 示例 {#example}

~~~jsx {7-9}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

// 获取图表中所有项目（形状、连接线、分组、泳道）的 ID
diagram.data.map((item) => {
    console.log(item.id);
});
~~~
