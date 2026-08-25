---
sidebar_label: beforeShapeIconClick
title: Editor 的 beforeShapeIconClick 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 beforeShapeIconClick 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeShapeIconClick

### 描述 {#description}

@short: 在点击项目专属工具栏中的控件之前触发

### 用法 {#usage}

~~~jsx
"beforeShapeIconClick": (
    iconId: string,
    shape: object
) => boolean | void;
~~~

### 参数 {#parameters}

事件的回调函数使用以下参数调用：

- `iconId` - 工具栏控件的类型或 id
- `shape` - 包含项目配置的对象

### 返回值 {#returns}

回调函数返回 `false` 以阻止工具栏控件被点击；否则返回 `true`

:::info
若要处理 Diagram Editor 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-12}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("beforeShapeIconClick", (iconId, shape) => {
    console.log(`
        You will click the ${iconId} toolbar control of the shape ${shape.id}
    `);
    return true;
});
~~~

**更新日志：** v3.1 中新增