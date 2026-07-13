---
sidebar_label: exists()
title: Data Collection 的 exists 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中，了解 Data Collection 的 exists 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# exists()

### 描述 {#description}

@short: 检查指定项目是否存在于 diagram 中

### 用法 {#usage}

~~~jsx
exists(id: string | number): boolean;
~~~

### 参数 {#parameters}

- `id` - （必需）待检查项目的 id

### 返回值 {#returns}

若项目存在，该方法返回 `true`，否则返回 `false`

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.exists("1");
~~~
