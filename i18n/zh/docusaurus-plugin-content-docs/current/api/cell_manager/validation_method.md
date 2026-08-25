---
sidebar_label: validation()
title: validation Method of Cell Manager
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 validation 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# validation()

### 描述 {#description}

@short: 根据方向和操作类型验证 swimlane 的单元格

### 用法 {#usage}

~~~jsx
validation(
    cellIndex: number, 
    dir: string, // "up" | "down" | "left" | "right"
    action: string // "move" | "remove" | "add"
): boolean;
~~~

### 参数 {#parameters}

- `cellIndex` - （必需）单元格在布局中的起始索引。索引计数从 0 开始
- `dir` - （必需）操作的方向：`"up"` | `"down"` | `"left"` | `"right"`
- `action` - （必需）操作的类型：`"move"` | `"remove"` | `"add"`

### 返回值 {#returns}

如果单元格验证通过，该方法将返回 `true`，否则返回 `false`

### 示例 {#example}

~~~jsx
// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

// 设置活动 swimlane
diagram.cellManager.setSwimlane("main");

// 验证索引为 0 的单元格是否可以下移
diagram.cellManager.validation(0, "down", "move"); // -> true
~~~

**更新日志：** v4.0 中新增

**相关文章：** [配置 Swimlane](/swimlanes/)
