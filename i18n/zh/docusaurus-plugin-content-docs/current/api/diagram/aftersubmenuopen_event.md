---
sidebar_label: afterSubmenuOpen
title: afterSubmenuOpen 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 afterSubmenuOpen 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX Diagram。
---

# afterSubmenuOpen

### 描述 {#description}

@short: 在子表头的菜单打开后触发

### 用法 {#usage}

~~~jsx
afterSubmenuOpen: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - （必需）swimlane 的 id
- `event` - （必需）原生 HTML 事件对象
- `subHeaderId` - （必需）swimlane 子表头的 id

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("afterSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**更新日志：** v4.0 中新增

**相关文章：** [事件处理](guides/event_handling.md)
