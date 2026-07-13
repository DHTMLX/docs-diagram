---
sidebar_label: add()
title: Cell Manager 的 add 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 add 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# add()

:::info
`add()` 方法会由系统自动进行验证。如果根据 swimlane 的结构判断无法添加，则不会添加该单元格。
:::

### 描述 {#description}

@short: 将单元格作为行或列添加到 swimlane 中

### 用法 {#usage}

~~~jsx
add(
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

diagram.cellManager.setSwimlane("main"); // 设置激活的 swimlane

diagram.cellManager.add(0, "down"); // 将单元格作为行添加
~~~

**更新日志**：v4.0 中新增

**相关文章**：[配置 Swimlanes](/swimlanes/)
