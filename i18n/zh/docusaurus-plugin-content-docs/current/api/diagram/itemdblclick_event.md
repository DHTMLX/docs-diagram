---
sidebar_label: itemDblClick
title: itemDblClick 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 itemDblClick 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# itemDblClick

### 描述 {#description}

@short: 在双击某个项目时触发

如果在泳道上方进行双击，则事件将在该泳道的单元格上触发

### 用法 {#usage}

~~~jsx
itemDblClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - （必需）项目的 id
- `event` - （必需）原生 HTML 事件对象

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件添加处理程序
diagram.events.on("itemDblClick", (id, event) => {
    console.log(id, event);
});
~~~

**更新日志：** v4.0 中新增

**相关文章：** [事件处理](guides/event_handling.md)
