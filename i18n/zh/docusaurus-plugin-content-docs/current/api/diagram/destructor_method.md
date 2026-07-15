---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 destructor 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---
# destructor()

### 描述 {#description}

@short: 移除图表实例并释放已占用的资源

### 用法 {#usage}

~~~jsx
destructor(): void;
~~~

### 示例 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.destructor();
~~~

**更新日志：** v3.0 中新增
