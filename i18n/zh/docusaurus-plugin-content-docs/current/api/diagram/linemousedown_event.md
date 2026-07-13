---
sidebar_label: lineMouseDown
title: lineMouseDown 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 lineMouseDown 事件。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# lineMouseDown

### 描述 {#description}

@short: 当指针位于连接线上方并按下指针设备按钮时触发

### 用法 {#usage}

~~~jsx
lineMouseDown: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - (必需) 连接线的 ID
- `event` - (必需) 原生 HTML 事件对象

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("lineMouseDown", (id, event) => {
    console.log(id, event);
});
~~~

**更新日志**：v4.0 中新增

**相关文章**：[事件处理](guides/event_handling.md)
