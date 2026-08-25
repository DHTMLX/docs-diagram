---
sidebar_label: 事件处理
title: 事件处理
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解事件处理的相关内容。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 事件处理 {#event-handling}

## 添加事件监听器 {#attaching-event-listeners}

您可以为任何可用事件添加自定义处理程序。为此，请使用 `diagram.events.on()` 方法，并传入以下参数：

- `name` - (*string*) 事件名称
- `handler` - (*function*) 处理函数

~~~jsx
diagram.events.on("ShapeClick", (id) => {
    alert("You've just clicked an item with id="+id);
});
~~~

您可以为同一事件添加多个处理程序，所有处理程序都会被执行。如果其中某个处理程序返回 *false*，相关操作将被阻止。事件处理程序按照添加的顺序依次执行。

## 移除事件监听器 {#detaching-event-listeners}

要移除事件，请使用 `diagram.events.detach()` 方法：

~~~jsx
diagram.events.on("CustomEvent", args);

diagram.events.detach("CustomEvent");
~~~

## 调用事件 {#calling-events}

要调用事件，请使用 `diagram.events.fire()` 方法。

~~~jsx
diagram.events.fire("CustomEvent", args);
// 其中 args 是一个参数数组
~~~

通常情况下，事件会自动调用，您无需使用此方法。

## 支持的事件列表 {#list-of-supported-events}

### Diagram 事件 {#diagram-events}

请在 [API 参考](api/diagram/api_overview.md#diagram-events)中查看完整的 Diagram API 事件列表。

### Editor 事件 {#editor-events}

Diagram Editor 的 API 事件列表见 [API 章节](api/diagram_editor/editor/events/overview.md)。

:::note
除了 Diagram Editor 的事件外，在编辑器视图中工作时，您还可以应用 [Diagram 对象的事件](api/diagram/api_overview.md#diagram-events)。例如：
:::

~~~jsx {6-8}
const editor = new dhx.DiagramEditor("editor_container", {
    controls: { autoLayout: false }
});
editor.parse(data);

editor.diagram.events.on("ShapeClick", (id) => {
    alert("You've just clicked an item with id=" + id);
});
~~~

如果您需要应用下面列出的事件，也可以使用这种方式。

### CellManager 事件 {#cellmanager-events}

请在 [API 参考](/api/cell_manager/#events)中查看完整的 CellManager API 事件列表。

### DataCollection 事件 {#datacollection-events}

请在 [API 参考](/api/data_collection/#events)中查看完整的 DataCollection API 事件列表。

### InlineEditor 事件 {#inlineeditor-events}

请在 [API 参考](/api/inline_editor/#events)中查看完整的 InlineEditor API 事件列表。

### Selection 事件 {#selection-events}

请在 [API 参考](/api/selection/#events)中查看完整的 Selection API 事件列表。
