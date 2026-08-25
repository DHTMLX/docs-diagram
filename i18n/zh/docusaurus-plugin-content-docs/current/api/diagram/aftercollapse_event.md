---
sidebar_label: afterCollapse
title: afterCollapse 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 afterCollapse 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX Diagram。
---

# afterCollapse

### 描述 {#description}

@short: 在某个项目折叠后触发

### 用法 {#usage}

~~~jsx
afterCollapse: (
    id: string | number,
    dir?: string
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - （必需）已折叠项目的 id
- `dir` - （可选）子项相对于父形状被隐藏的一侧（对于 *type:`"topic"`* 为 `"left"` 或 `"right"`，否则为 undefined）

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("afterCollapse", (id, dir) => {
    console.log(diagram.data.getItem(id).text + " was collapsed", dir);
});
~~~

**更新日志：** `dir` 参数已在 v3.1 中新增

**相关文章：** [事件处理](guides/event_handling.md)
