---
sidebar_label: load
title: Data Collection 的 load 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 load 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# load

### 描述 {#description}

@short: 当数据加载到图表中时触发

### 用法 {#usage}

~~~jsx
load: () => void;
~~~

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("load", () => {
    // 此处编写逻辑
});
~~~
