---
sidebar_label: beforeSubmenuOpen
title: beforeSubmenuOpen 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 beforeSubmenuOpen 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# beforeSubmenuOpen

### 描述 {#description}

@short: 在子表头菜单打开之前触发

### 用法 {#usage}

~~~jsx
beforeSubmenuOpen: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - （必需）泳道的 id
- `event` - （必需）原生 HTML 事件对象
- `subHeaderId` - （可选）泳道子表头的 id

### 返回值 {#returns}

返回 `false` 以阻止打开子表头；否则返回 `true`

### 示例 {#example}

~~~jsx {9-12}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("beforeSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
    return true;
});
~~~

**更新日志**：v4.0 中新增

**相关文章**：[事件处理](guides/event_handling.md)
