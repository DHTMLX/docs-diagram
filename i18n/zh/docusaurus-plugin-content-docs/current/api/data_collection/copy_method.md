---
sidebar_label: copy()
title: Data Collection 的 copy 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中，了解 Data Collection 的 copy 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# copy()

### 描述 {#description}

@short: 在指定位置创建项目的副本

### 用法 {#usage}

~~~jsx
copy(
    id: string | number | array,
    index: number,
    target?: object
): string | number | array;
~~~

### 参数 {#parameters}

- `id` - （必需）要复制的项目的 id
- `index` - （必需）创建副本的索引位置
- `target` - （可选）目标 Data Collection 对象

### 返回值 {#returns}

该方法返回项目的 id，或包含多个项目 id 的数组

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.copy("4",5); // 将 id 为 4 的图形复制到索引为 5 的位置
~~~
