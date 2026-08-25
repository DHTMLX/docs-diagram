---
sidebar_label: scroll
title: scroll 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 scroll 事件。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# scroll

### 描述 {#description}

@short: 当 Diagram 被滚动时触发

### 用法 {#usage}

~~~jsx
scroll: (position: object) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `position` - （必选）滚动的位置。该对象包含当前滚动位置的 x 和 y 坐标，例如：`{x: 67, y: 130}`

### 示例 {#example}

~~~jsx {10-12}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    scroll: true
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("scroll", () => {
    console.log("The diagram has been scrolled")
});
~~~

**相关文章**：

- [滚动 Diagram](guides/diagram/scrolling_diagram.md)
- [事件处理](guides/event_handling.md)
