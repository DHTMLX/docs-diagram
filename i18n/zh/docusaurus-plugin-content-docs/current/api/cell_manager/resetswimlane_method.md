---
sidebar_label: resetSwimlane()
title: resetSwimlane Method of Cell Manager
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Cell Manager 的 resetSwimlane 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# resetSwimlane()

### 描述 {#description}

@short: 重置活动 swimlane

### 用法 {#usage}

~~~jsx
resetSwimlane(): void;
~~~

### 示例 {#example}

~~~jsx
// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 设置活动 swimlane

// 您对 swimlane 的操作

diagram.cellManager.resetSwimlane(); // 重置活动 swimlane
~~~

**更新日志：** v4.0 中新增

**相关文章：** [配置 Swimlane](/swimlanes/)
