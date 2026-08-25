---
sidebar_label: lineTitleMouseDown
title: lineTitleMouseDown 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 lineTitleMouseDown 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# lineTitleMouseDown

### 描述 {#description}

@short: 当指针悬停在线条的文本元素上方并按下指点设备按钮时触发

### 用法 {#usage}

~~~jsx
lineTitleMouseDown: (
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

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("lineTitleMouseDown", (lineId, titleId, event) => {
    console.log("lineTitleMouseDown");
});
~~~

**更新日志：** v4.1 中新增

**相关文章：** [事件处理](guides/event_handling.md)
