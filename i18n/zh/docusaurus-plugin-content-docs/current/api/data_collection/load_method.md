---
sidebar_label: load()
title: Data Collection 的 load 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 load 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# load()

### 描述 {#description}

@short: 从外部文件加载数据

### 用法 {#usage}

~~~jsx
load(
    url: string | object,
    driver?: object | string
): promise;
~~~

### 参数 {#parameters}

- `url` - （必需）外部文件的 URL，或配置了 URL 的 `DataProxy`
- `driver` - （可选）`DataDriver` 或数据类型（`"json"`、`"csv"`、`"xml"`），默认为 `"json"`

### 返回值 {#returns}

该方法返回一个数据加载的 Promise

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.load("../common/data.json");
~~~

### 详情 {#details}

该组件将发起 AJAX 调用，并期望远程 URL 提供有效的 JSON 数据。

数据加载是异步的，因此您需要将加载完成后的代码封装到一个 Promise 中：

~~~jsx
diagram.data.load("../some/data").then(() => {
    diagram.selection.add(123);
});
~~~

**相关文章**：  [加载和存储数据](guides/loading_data.md)

**相关示例**：  [Diagram. 数据. 数据加载](https://snippet.dhtmlx.com/09isp2d8)
