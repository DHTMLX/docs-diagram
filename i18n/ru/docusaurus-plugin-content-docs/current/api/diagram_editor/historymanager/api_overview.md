---
sidebar_label: Обзор API History manager
title: Обзор API History manager
description: Ознакомьтесь с обзором History manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# Обзор API History manager

Набор API, которые можно использовать для управления историей действий в Diagram Editor. Используйте ключевое слово `history` для доступа к History manager через объект `editor`:

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // только default
});
// ...
editor.history.redo(); // восстанавливает действие, отменённое операцией отмены
~~~

## Обзор методов History manager {#history-manager-methods-overview}

| Name                                                           | Описание                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/methods/add_method.md) | @getshort(api/diagram_editor/historymanager/methods/add_method.md) |
| [](api/diagram_editor/historymanager/methods/disable_method.md) | @getshort(api/diagram_editor/historymanager/methods/disable_method.md) |
| [](api/diagram_editor/historymanager/methods/enable_method.md) | @getshort(api/diagram_editor/historymanager/methods/enable_method.md) |
| [](api/diagram_editor/historymanager/methods/isredo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isredo_method.md) |
| [](api/diagram_editor/historymanager/methods/isundo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isundo_method.md) |
| [](api/diagram_editor/historymanager/methods/redo_method.md) | @getshort(api/diagram_editor/historymanager/methods/redo_method.md) |
| [](api/diagram_editor/historymanager/methods/reset_method.md) | @getshort(api/diagram_editor/historymanager/methods/reset_method.md) |
| [](api/diagram_editor/historymanager/methods/undo_method.md) | @getshort(api/diagram_editor/historymanager/methods/undo_method.md) |

## Обзор свойств History manager {#history-manager-properties-overview}

| Name                                                           | Описание                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/config/savedelay_property.md) | @getshort(api/diagram_editor/historymanager/config/savedelay_property.md) |
