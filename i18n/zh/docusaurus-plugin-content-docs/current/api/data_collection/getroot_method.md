---
sidebar_label: getRoot()
title: Data Collection 的 getRoot 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 getRoot 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getRoot()

### 描述 {#description}

@short: 根据子项目的 id 返回根项目的 id

### 用法 {#usage}

~~~jsx
getRoot(id: string | number): string | number;
~~~

### 参数 {#parameters}

- `id` - （必需）子项目的 id

### 返回值 {#returns}

该方法返回根项目的 id。根项目是树结构中的第一个项目

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoot("id_1.1.1"); // -> "id_1"
~~~

**更新日志**：v4.0 中新增
