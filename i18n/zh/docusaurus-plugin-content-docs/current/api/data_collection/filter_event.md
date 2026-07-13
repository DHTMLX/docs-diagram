---
sidebar_label: filter
title: Data Collection 的 filter 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 data collection 的 filter 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# filter

### 描述 {#description}

@short: 在筛选 data collection 后触发

### 用法 {#usage}

~~~jsx
filter: (filter?: object) => void;
~~~

### 参数 {#parameters}

`filter` 事件的回调函数将使用以下参数进行调用：

- `object: {key: object }` - 一个包含所有活动筛选器的对象，其中：
    - `key` - 活动筛选器的 id
    - `object` - 一个包含 [`rule` 和 `config` 属性](api/data_collection/filter_method.md#parameters) 的对象

:::info
如需处理 Diagram Data Collection 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {7-9}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.events.on("filter", (filter) => {
    console.log("Items were filtered");
});
~~~
