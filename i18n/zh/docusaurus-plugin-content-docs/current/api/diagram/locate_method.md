---
sidebar_label: locate()
title: locate 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 locate 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# locate()

### 描述 {#description}

@short: 从指定的 HTML 事件或标签中获取项目的 ID

### 用法 {#usage}

~~~jsx
locate(event: object): any;
~~~

### 参数 {#parameters}

- `event` - （必需）原生事件对象

### 返回值 {#returns}

该方法返回与事件/标签相关的图形的 ID

### 示例 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const id = diagram.locate(event);
~~~
