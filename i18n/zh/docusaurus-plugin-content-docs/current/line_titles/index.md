---
sidebar_label: 线条标题
title: 线条标题
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解线条。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# 线条标题 {#linetitles}

## 概述 {#overview}

线条标题用于为连接图形的线条设置文本。您可以在 diagram 和编辑器中通过双击线条来为其添加文本，也可以在编辑器中使用线条的工具栏（点击线条以激活）。您还可以在 diagram 和编辑器中通过双击来编辑线条标题。

为线条添加文本并对其进行操作的另一种方法是准备一个 [数据集](guides/loading_data.md#preparing-data-to-load)。

:::note
线条标题仅在 Diagram/Diagram Editor 的默认模式下可用（type: `"default"`）。
:::

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## 创建线条标题 {#creating-line-titles}

要创建线条标题，您需要在准备要加载到 diagram 的数据集时，在线条标题对象内指定 `type: "lineTitle"`：

~~~jsx {5-6}
const data = [
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    // 配置线条标题
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];

// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### 线条标题对象的属性 {#properties-of-a-line-title-object}

请查看 [线条标题对象的完整配置属性列表](line_titles/configuration_properties.md)，以调整线条标题的外观并配置其位置。

## 使用线条标题 {#working-with-line-titles}

您可以通过 [DataCollection API](/api/data_collection/) 操作线条标题。

:::note
以下示例同时适用于 Diagram 和 Diagram Editor。
:::

### 添加线条标题 {#adding-a-line-title}

您可以通过 DataCollection 的 [`add`](api/data_collection/add_method.md) 方法添加线条标题：

~~~jsx {5-10}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.add({
    type: "lineTitle",
    parent: "line_1",
    text: "Some text",
    fill: "#BCE4CE"
});
~~~

将包含新线条标题配置的对象作为该方法的参数传入。

:::note
请参阅 [线条标题对象的完整配置属性列表](line_titles/configuration_properties.md)。
:::

### 阻止添加线条标题 {#blocking-line-titles-adding}

如果需要阻止添加线条标题，您可以使用 DataCollection 的 [`beforeAdd`](api/data_collection/beforeadd_event.md) 事件：

~~~jsx {5}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.events.on("beforeAdd", (item) => item.type !== "lineTitle");
~~~

### 遍历线条标题 {#iterating-over-line-titles}

借助 DataCollection 的 [`eachChild()`](api/data_collection/eachchild_method.md) 方法，您可以将线条标题作为线条的子项进行遍历：

~~~jsx {7-9,11-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse([
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Text 1", distance: 50 },
    { type: "lineTitle", id: "title_2", parent: "line_1", text: "Text 2", distance: 70 }
]);
editor.diagram.data.eachChild("line_1", (child) => {
    console.log(child.id); // => "title_1", "title_2"
});
~~~

将要遍历其标题的线条 id 作为第一个参数传入。在上面的示例中，回调函数将应用于指定线条的每个子项，并返回它们的 id。
