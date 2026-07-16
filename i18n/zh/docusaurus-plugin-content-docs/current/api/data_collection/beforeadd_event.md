---
sidebar_label: beforeAdd
title: Data Collection 的 beforeAdd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 beforeAdd 事件。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeAdd

### 描述 {#description}

@short: 在添加项目之前触发

### 用法 {#usage}

~~~jsx
beforeAdd: (newItem: object) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数接受以下参数：

- `newItem` - （必需）已添加项目的对象

### 返回值 {#returns}

返回 `false` 以阻止将项目添加到 Data Collection 中；否则返回 `true`。

### 示例 {#example}

~~~jsx {9-13}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为事件绑定处理程序
diagram.events.on("beforeAdd", (newItem) => {
    if (some_check)
        return false;
    return true;
});
~~~
