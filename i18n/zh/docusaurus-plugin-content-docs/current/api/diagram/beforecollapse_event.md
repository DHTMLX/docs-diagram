---
sidebar_label: beforeCollapse
title: beforeCollapse 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 beforeCollapse 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# beforeCollapse

### 描述 {#description}

@short: 在折叠项之前触发

### 用法 {#usage}

~~~jsx
beforeCollapse: (
    id: string | number,
    dir?: string
) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - （必需）项的 id
- `dir` - （可选）子项相对于父形状隐藏的方向（*type:`"topic"`* 时为 `"left"` 或 `"right"`，否则为 undefined）

### 返回值 {#returns}

返回 `false` 以阻止折叠项；否则返回 `true`

### 示例 {#example}

~~~jsx {9-12}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("beforeCollapse", (id, dir) => {
    console.log("Collapsing " + diagram.data.getItem(id).text, dir);
    return true;
});
~~~

**更新日志**：`dir` 参数在 v3.1 中新增

**相关文章**：[事件处理](guides/event_handling.md)
