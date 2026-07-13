---
sidebar_label: HistoryManager API 概述
title: HistoryManager API 概述
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中查看 HistoryManager 概述。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天 DHTMLX Diagram 评估版本。
---

# HistoryManager API 概述 {#history-manager-api-overview}

这是一组 API，可用于管理 Diagram Editor 中操作的历史记录。使用 `history` 关键字通过 `editor` 对象访问 HistoryManager：

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // 仅限 default
});
// ...
editor.history.redo(); // 恢复因 Undo 操作而被撤销的动作
~~~

## HistoryManager 方法概述 {#history-manager-methods-overview}

| Name                                                           | 描述                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/methods/add_method.md) | @getshort(api/diagram_editor/historymanager/methods/add_method.md) |
| [](api/diagram_editor/historymanager/methods/disable_method.md) | @getshort(api/diagram_editor/historymanager/methods/disable_method.md) |
| [](api/diagram_editor/historymanager/methods/enable_method.md) | @getshort(api/diagram_editor/historymanager/methods/enable_method.md) |
| [](api/diagram_editor/historymanager/methods/isredo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isredo_method.md) |
| [](api/diagram_editor/historymanager/methods/isundo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isundo_method.md) |
| [](api/diagram_editor/historymanager/methods/redo_method.md) | @getshort(api/diagram_editor/historymanager/methods/redo_method.md) |
| [](api/diagram_editor/historymanager/methods/reset_method.md) | @getshort(api/diagram_editor/historymanager/methods/reset_method.md) |
| [](api/diagram_editor/historymanager/methods/undo_method.md) | @getshort(api/diagram_editor/historymanager/methods/undo_method.md) |

## HistoryManager 属性概述 {#history-manager-properties-overview}

| Name                                                           | 描述                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/config/savedelay_property.md) | @getshort(api/diagram_editor/historymanager/config/savedelay_property.md) |
