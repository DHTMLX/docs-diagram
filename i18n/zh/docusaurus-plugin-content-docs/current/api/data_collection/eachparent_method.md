---
sidebar_label: eachParent()
title: Data Collection 的 eachParent 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中，了解 Data Collection 的 eachParent 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# eachParent()

### 描述 {#description}

@short: 遍历指定项目的所有父项

### 用法 {#usage}

~~~jsx
eachParent(
    id: string | number,
    callback: function,
    self?: boolean
): void
~~~

### 参数 {#parameters}

- `id` - （必需）项目的 id
- `callback` - （必需）应用于项目每个父项的回调函数
- `self` - （可选）定义回调函数是否应遍历指定项目本身；默认值为 *false*。

### 示例 {#example}

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachParent("id_1.1.1", (item) => {
    console.log(item);
}, false);
~~~

**更新日志**：v4.0 中新增
