---
sidebar_label: zoomOut
title: 编辑器的 zoomOut 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 zoomOut 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# zoomOut

### 描述 {#description}

@short: 在点击"缩小"按钮或调用 `zoomOut()` 方法后触发

### 用法 {#usage}

~~~jsx
"zoomOut": (step) => void;
~~~

### 参数 {#parameters}

`zoomOut` 事件的回调函数会使用以下参数进行调用：

- `step` - （必需）显示 [`scale`](api/diagram_editor/editor/config/scale_property.md) 属性变化步长的值。

:::info
要处理 Diagram Editor 的内部事件，您可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {7-9}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("zoomOut", (step) => {
    console.log("The diagram in the editor is zoomed out");
});
~~~

**更新日志：** `step` 参数在 v6.0 中新增
