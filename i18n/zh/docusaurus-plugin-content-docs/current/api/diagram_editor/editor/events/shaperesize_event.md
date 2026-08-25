---
sidebar_label: shapeResize
title: 编辑器的 shapeResize 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 shapeResize 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# shapeResize

### 描述 {#description}

@short: 在形状调整大小后触发

### 用法 {#usage}

~~~jsx
"shapeResize": () => void;
~~~

:::info
要处理 Diagram Editor 的内部事件，您可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-9}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("shapeResize", () => {
    console.log("The shape has been resized");
});
~~~
