---
sidebar_label: lineTitleClick
title: lineTitleClick 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 lineTitleClick 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# lineTitleClick

### 描述 {#description}

@short: 在点击线条的文本元素时触发

### 用法 {#usage}

~~~jsx
lineTitleClick: (
    lineId: string | number,
    titleId: string | number,
    event: MouseEvent
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `lineId` - （必需）线条的 id
- `titleId` - （必需）线条文本元素的 id
- `event` - （必需）原生 HTML 事件对象

### 用法 {#usage-1}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("lineTitleClick", (lineId, titleId, event) => {
    console.log("lineTitleClick");
});
~~~

**更新日志：** v4.1 中新增

**相关文章：** [事件处理](guides/event_handling.md)
