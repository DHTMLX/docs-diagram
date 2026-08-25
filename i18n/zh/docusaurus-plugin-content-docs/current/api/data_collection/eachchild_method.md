---
sidebar_label: eachChild()
title: Data Collection 的 eachChild 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中，了解 Data Collection 的 eachChild 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# eachChild()

### 描述 {#description}

@short: 遍历指定项目的子项

### 用法 {#usage}

~~~jsx
eachChild(
    id: string | number,
    callback: function,
    isTree?: boolean
): void;
~~~

### 参数 {#parameters}

- `id` - （必需）项目的 id
- `callback` - （必需）应用于项目每个子项的回调函数
- `isTree` - （可选）定义该函数是否应遍历指定项目的所有子项（任意层级）。若为 *false*，函数将仅遍历项目的第一层子项；默认值为 *true*。

### 示例 {#example}

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachChild("id_1", (item) => {
    console.log(item);
}, true);
~~~

**更新日志**：v4.0 中新增
