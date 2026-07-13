---
sidebar_label: beforeSelect
title: Selection 的 beforeSelect 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 beforeSelect 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# beforeSelect

### 描述 {#description}

@short: 在选中项目时触发，但发生在项目真正被选中之前

### 用法 {#usage}

~~~jsx
"beforeSelect": ({
    id: string | number,
    join: boolean,
    batch: (string | number)[]
}) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数将接收一个包含以下参数的对象：

- `id` - 待选中项目的 id
- `join` - 所应用的[选择模式](api/selection/add_method.md#parameters)
- `batch` - 待选中项目的列表

### 返回值 {#returns}

返回 `false` 以阻止选中项目；否则返回 `true`

### 示例 {#example}

~~~jsx {9-13}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理函数
diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

以下是为 Diagram Editor 绑定事件处理函数的示例：

~~~jsx {8-12}
// 初始化 Diagram editor
const editor = new dhx.DiagramEditor("editor_container", {
    // 配置选项
});
// 将数据加载到 editor 中
editor.parse(data);

// 为事件绑定处理函数
editor.diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

**更新日志：** v6.0 中更新

**相关文章：**

- [diagram.config.select](api/diagram/select_property.md)
- [选择项目](guides/manipulating_items.md#selecting-items)
