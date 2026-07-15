---
sidebar_label: getId()
title: Data Collection 的 getId 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 getId 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getId()

### 描述 {#description}

@short: 根据索引返回项目的 id

### 用法 {#usage}

~~~jsx
getId(index: number): string | number;
~~~

### 参数 {#parameters}

- `index` - （必需）项目的索引

### 返回值 {#returns}

该方法返回项目的 id

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const id = diagram.data.getId(0); // -> 返回 "1"
~~~
