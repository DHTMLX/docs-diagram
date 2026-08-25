---
sidebar_label: setSwimlane()
title: setSwimlane Method of Cell Manager
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 setSwimlane 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# setSwimlane()

### 描述 {#description}

@short: 设置活动 swimlane，以便后续对其进行操作

### 用法 {#usage}

~~~jsx
setSwimlane(id: string | number): boolean;
~~~

### 参数 {#parameters}

- `id` - （必需）swimlane 的 id

### 返回值 {#returns}

如果设置了 swimlane，该方法将返回 `true`，否则返回 `false`。

### 示例 {#example}

~~~jsx
// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 设置活动 swimlane
~~~

**更新日志：** v4.0 中新增

**相关文章：** [配置 Swimlane](/swimlanes/)
