---
sidebar_label: getCellId()
title: Cell Manager 的 getCellId 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 getCellId 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# getCellId()

### 描述 {#description}

@short: 按索引返回 swimlane 中单元格的 id

### 用法 {#usage}

~~~jsx
getCellId(
    cellIndex: number, 
    type: string // "row" | "col"
): string | number | undefined;
~~~

### 参数 {#parameters}

- `cellIndex` - （必需）单元格在布局中的起始索引。索引计数从 0 开始
- `type` - （必需）用于计数索引的方向类型：`"row"` | `"col"`

### 返回值 {#returns}

该方法返回单元格的 id

### 示例 {#example}

~~~jsx
// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

// 设置活动 swimlane
diagram.cellManager.setSwimlane("main"); 

// 获取单元格的 id
diagram.cellManager.getCellId(0, "row"); // -> "r01"
~~~

**更新日志**：v4.0 中新增

**相关文章**：[配置 Swimlanes](/swimlanes/)
