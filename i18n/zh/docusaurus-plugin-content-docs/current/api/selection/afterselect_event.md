---
sidebar_label: afterSelect
title: Selection 的 afterSelect 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 afterSelect 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# afterSelect

### 描述 {#description}

@short: 在选中项目后触发

### 用法 {#usage}

~~~jsx
"afterSelect": ({
    id: string | number,
    join: boolean,
    batch: (string | number)[]
}) => void;
~~~

### 参数 {#parameters}

该事件的回调函数将接收一个包含以下参数的对象：

- `id` - 已选中项目的 id
- `join` - 所应用的[选择模式](api/selection/add_method.md#parameters)
- `batch` - 已选中项目的列表

### 示例 {#example}

~~~jsx {9-12}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // 其他配置选项
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理函数
diagram.events.on("afterSelect", ({ id }) => {
    console.log(id + " was selected");
});
~~~

以下是为 Diagram Editor 绑定事件处理函数的示例：

~~~jsx {8-11}
// 初始化 Diagram editor
const editor = new dhx.DiagramEditor("editor_container", {
    // 配置选项
});
// 将数据加载到 editor 中
editor.parse(data);

// 为事件绑定处理函数
editor.diagram.events.on("afterSelect", ({ id }) => {
    console.log(id + " was selected");
});
~~~

**更新日志：** v6.0 中更新

**相关文章：**

- [diagram.config.select](api/diagram/select_property.md)
- [选择项目](guides/manipulating_items.md#selecting-items)
