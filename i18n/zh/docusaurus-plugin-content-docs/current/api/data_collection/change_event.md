---
sidebar_label: change
title: Data Collection 的 change 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中，了解 Data Collection 的 change 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# change

### 描述 {#description}

@short: 在 diagram 的数据集发生更改时触发

### 用法 {#usage}

~~~jsx
change: (
    id?: string,
    status?: "add" | "update" | "delete" | "load"
    updatedItem?: object
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - （可选）已更改项目的 id
- `status` - （可选）更改的状态：`"add"`、`"update"`、`"delete"`、`"load"`
- `updatedItem` - （可选）已更改项目的对象

:::info
在某些情况下，处理函数不会接收任何参数，例如，将数据集解析到 diagram 中且所有图形都被移除时
:::

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件附加处理函数
diagram.events.on("change", function (id, status, shape) {
    console.log("The " + id + " has been " + status);
});
~~~
