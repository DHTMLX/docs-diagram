---
sidebar_label: shapeClick
title: shapeClick 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 shapeClick 事件。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# shapeClick

### 描述 {#description}

@short: 点击形状时触发

### 用法 {#usage}

~~~jsx
shapeClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` -（必需）形状的 id
- `event` -（必需）原生 HTML 事件对象

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("shapeClick", (id) => {
    console.log('An item "' + diagram.data.getItem(id).text + '" is clicked');
});
~~~

**相关文章：**[事件处理](guides/event_handling.md)
