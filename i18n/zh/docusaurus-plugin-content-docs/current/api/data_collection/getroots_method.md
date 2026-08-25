---
sidebar_label: getRoots()
title: Data Collection 的 getRoots 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 getRoots 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getRoots()

### 描述 {#description}

@short: 返回一个数组，其中包含图表所有根项目的 ID

### 用法 {#usage}

~~~jsx
getRoots(): array
~~~

### 返回值 {#returns}

该方法返回一个数组，其中包含根项目的 ID

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoots();
~~~

**更新日志**：v4.0 中新增
