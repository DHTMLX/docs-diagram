---
sidebar_label: getSubHeaderCellId()
title: Cell Manager 的 getSubHeaderCellId 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 getSubHeaderCellId 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getSubHeaderCellId()

### 描述 {#description}

@short: 根据子表头的 id 返回 swimlane 中单元格的 id

### 用法 {#usage}

~~~jsx
getSubHeaderCellId(subheaderId: string): string | number;
~~~

### 参数 {#parameters}

- `subheaderId` - （必需）swimlane 子表头的 id

### 返回值 {#returns}

该方法返回单元格的 id

### 示例 {#example}

~~~jsx
// 初始化图表
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

// 设置活动 swimlane
diagram.cellManager.setSwimlane("main"); 

// 获取单元格的 id
diagram.cellManager.getSubHeaderCellId("sub01"); // -> "r01"
~~~

**更新日志**：v4.0 中新增

**相关文章**：[配置 Swimlanes](/swimlanes/)
