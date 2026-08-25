---
sidebar_label: serialize()
title: Data Collection 的 serialize 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 serialize 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# serialize()

### 描述 {#description}

@short: 导出当前 Diagram 的数据

### 用法 {#usage}

~~~jsx
serialize(): object[] | { data: object[]; links: object[] };
~~~

### 返回值 {#returns}

根据 Diagram 模式的不同，该方法返回：

- `object[]` - （适用于默认、组织结构图和思维导图 Diagram 模式）一个数组，其中包含 Diagram 中每个项目和连接对应的对象
- `{ data: object[]; links: object[] }` - （适用于 PERT Diagram 模式）一个包含以下内容的对象：
  - `data` 对象数组（适用于形状：`"task"`、`"milestone"`、`"project"`）
  - `links` 对象数组（适用于形状之间的连接）

### 示例 {#example}

- 对于默认 Diagram 模式

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const data = diagram.data.serialize(); // -> [{...}, {...}, {...}, {...}]
~~~

- 对于 PERT Diagram 模式

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});
diagram.data.parse(dataset);

const dataset = diagram.data.serialize(); // -> { data: [...], links: [...] };
~~~

请注意，对于 PERT Diagram 模式，导出的数据对象中的 `links` 对象将具有[与 DHTMLX Gantt 图表中相同的类型](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)。这意味着，如果 Diagram 数据中某个连接的类型与 Gantt 的某种连接类型一致，则该类型在序列化过程中将保持不变。如果未指定连接类型，或将其设置为其他类型（例如 `type: "line"`），则会被转换为 `type: "0"`。

**相关文章**：  [保存和恢复状态](guides/loading_data.md#saving-and-restoring-state)
