---
sidebar_label: afterShapeIconClick
title: Editor 的 afterShapeIconClick 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 afterShapeIconClick 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterShapeIconClick

### 描述 {#description}

@short: 在点击项目工具栏中的控件后触发

### 用法 {#usage}

~~~jsx
"afterShapeIconClick": (
    iconId: string,
    shape: object
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数使用以下参数进行调用：

- `iconId` - 工具栏控件的类型或 id
- `shape` - 一个包含项目配置的对象

:::info
如需处理 Diagram Editor 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-11}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("afterShapeIconClick", (iconId, shape) => {
    console.log(`
        You've clicked the ${iconId} toolbar control of the shape ${shape.id}
    `);
});
~~~

**更新日志**：v3.1 中新增
