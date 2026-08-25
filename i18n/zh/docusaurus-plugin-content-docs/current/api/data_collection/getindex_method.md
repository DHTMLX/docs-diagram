---
sidebar_label: getIndex()
title: Data Collection 的 getIndex 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 getIndex 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getIndex()

### 描述 {#description}

@short: 根据 id 返回项目的索引

### 用法 {#usage}

~~~jsx
getIndex(id: string | number): number;
~~~

### 参数 {#parameters}

- `id` - （必需）项目的 id

### 返回值 {#returns}

该方法返回项目的索引

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const index = diagram.data.getIndex("1"); // -> 返回 0
~~~
