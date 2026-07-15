---
sidebar_label: afterHide
title: View 的 afterHide 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的 Diagram Editor 文档中了解 View 的 afterHide 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterHide

### 描述 {#description}

@short: 在 Toolbar、Editbar 或 Shapebar 视图隐藏后触发

### 用法 {#usage}

~~~jsx
"afterHide": (view: "toolbar" | "shapebar" | "editbar") => void;
~~~

### 参数 {#parameters}

`afterHide` 事件的回调函数将使用以下参数调用：

- `view` - （必需）已隐藏的视图。有关详细信息，请参阅 [`view`](api/diagram_editor/editor/config/view_property.md) 属性。

:::info
如需处理 Diagram Editor 的内部事件，您可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {9-12}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true
    }
});

// 为事件绑定处理程序
editor.view.events.on("afterHide", (view) => {
    console.log("The " + view + " view of Diagram Editor was hidden");
});
~~~

**更新日志**：v6.0 中新增
