---
sidebar_label: emptyAreaMouseDown
title: emptyAreaMouseDown 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 emptyAreaMouseDown 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# emptyAreaMouseDown

### 描述 {#description}

@short: 当指针位于当前 Diagram 区域的空白处并按下指针设备按钮时触发

### 用法 {#usage}

~~~jsx
emptyAreaMouseDown: (event: MouseEvent) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `event` - （必需）原生 HTML 事件对象

### 示例 {#example}

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("emptyAreaMouseDown", (e) => {
    console.log("emptyAreaMouseDown");
});
~~~

**更新日志：**v4.1 中新增

**相关文章：**[事件处理](guides/event_handling.md)
