---
sidebar_label: move()
title: move Method of Cell Manager
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 move 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# move()

:::info
系统会自动验证 `move()` 方法。如果根据 swimlane 的结构判断无法移动，该单元格将不会被移动。
:::

### 描述 {#description}

@short: 将 swimlane 的单元格作为行或列移动

### 用法 {#usage}

~~~jsx
move(
    cellIndex: number, 
    dir: string // "up" | "down" | "left" | "right"
): void;
~~~

### 参数 {#parameters}

- `cellIndex` - （必需）单元格在布局中的起始索引。索引计数从 0 开始
- `dir` - （必需）操作的方向：`"up"` | `"down"` | `"left"` | `"right"`

### 示例 {#example}

~~~jsx
// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 设置活动 swimlane

diagram.cellManager.move(0, "down"); // 将单元格作为行移动
~~~

**更新日志：** v4.0 中新增

**相关文章：** [配置 Swimlane](/swimlanes/)
