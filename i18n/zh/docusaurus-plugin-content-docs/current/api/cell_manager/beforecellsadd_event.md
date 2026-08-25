---
sidebar_label: beforeCellsAdd
title: Cell Manager 的 beforeCellsAdd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 beforeCellsAdd 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# beforeCellsAdd

### 描述 {#description}

@short: 在向 swimlane 添加新单元格之前触发

### 用法 {#usage}

~~~jsx
beforeCellsAdd: (swimlaneId: string | number) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `swimlaneId` - （必需）该元素的 id

### 返回值 {#returns}

返回 `false` 以阻止添加新的单元格，否则返回 `true`

### 示例 {#example}

~~~jsx {9-12}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("beforeCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**更新日志**：v4.0 中新增

**相关文章**：[配置 Swimlanes](/swimlanes/)
