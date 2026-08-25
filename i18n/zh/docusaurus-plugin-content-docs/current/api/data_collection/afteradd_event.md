---
sidebar_label: afterAdd
title: Data Collection 的 afterAdd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 afterAdd 事件。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterAdd

### 描述 {#description}

@short: 在添加项目后触发

### 用法 {#usage}

~~~jsx
afterAdd: (newItem: object) => void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `newItem` - （必需）已添加项目的对象

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("afterAdd", (newItem) => {
    console.log("A new item is added");
});
~~~

该事件可用于为项目数据提供默认值或默认格式。
