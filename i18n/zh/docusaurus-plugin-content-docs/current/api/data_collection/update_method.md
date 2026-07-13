---
sidebar_label: update()
title: Data Collection 的 update 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 update 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# update()

### 描述 {#description}

@short: 更新项目的属性

:::note
该方法不能用于更改项目的 *id* 或 *type*
:::

### 用法 {#usage}

~~~jsx
update(
    id: string | number,
    newItem: object
): void;
~~~

### 参数 {#parameters}

- `id` - （必需）需要更新的项目的 id
- `newItem` - （必需）需要更新的属性的哈希表

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.update(123, { text:"New text" });
~~~

**相关文章**：  [更新项目](guides/manipulating_items.md#updating-an-item)
