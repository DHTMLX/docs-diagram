---
sidebar_label: afterExpand
title: afterExpand 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 afterExpand 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX Diagram。
---

# afterExpand

### 描述 {#description}

@short: 在某个项目展开后触发

### 用法 {#usage}

~~~jsx
afterExpand: (
    id: string | number,
    dir?: string
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `id` - （必需）已展开项目的 id
- `dir` - （可选）子项相对于父形状被显示的一侧（对于 *type:`"topic"`* 为 `"left"` 或 `"right"`，否则为 undefined）

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("afterExpand", (id, dir) => {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});
~~~

**更新日志：** `dir` 参数已在 v3.1 中新增
