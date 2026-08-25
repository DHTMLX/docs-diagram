---
sidebar_label: Обработка событий
title: Обработка событий
description: Вы можете узнать об обработке событий в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Обработка событий {#event-handling}

## Подключение обработчиков событий {#attaching-event-listeners}

Вы можете добавить любой пользовательский обработчик к любому из доступных событий. Для этого используйте метод `diagram.events.on()` со следующими параметрами:

- `name` - (*string*) имя события
- `handler` - (*function*) функция-обработчик

~~~jsx
diagram.events.on("ShapeClick", (id) => {
    alert("You've just clicked an item with id="+id);
});
~~~

Вы можете прикрепить к одному событию несколько обработчиков, и все они будут выполнены. Если какой-либо из обработчиков возвращает *false*, связанная операция будет заблокирована. Обработчики событий выполняются в том же порядке, в котором они были прикреплены.

## Отключение обработчиков событий {#detaching-event-listeners}

Чтобы отключить события, используйте метод `diagram.events.detach()`:

~~~jsx
diagram.events.on("CustomEvent", args);

diagram.events.detach("CustomEvent");
~~~

## Вызов событий {#calling-events}

Чтобы вызвать событие, используйте метод `diagram.events.fire()`.

~~~jsx
diagram.events.fire("CustomEvent", args);
// где args — это массив аргументов
~~~

Обычно события вызываются автоматически, и использовать этот метод не требуется.

## Список поддерживаемых событий {#list-of-supported-events}

### События Diagram {#diagram-events}

Полный список событий API Diagram см. в [справочнике API](api/diagram/api_overview.md#diagram-events).

### События Editor {#editor-events}

Список событий API редактора Diagram приведён в [разделе API](api/diagram_editor/editor/events/overview.md).

:::note
Помимо событий редактора Diagram, вы также можете применять [события объекта диаграммы](api/diagram/api_overview.md#diagram-events) при работе в режиме редактора. Например:
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

Такой способ также можно использовать, если нужно применить события, перечисленные ниже.

### События CellManager {#cellmanager-events}

Полный список событий API CellManager см. в [справочнике API](/api/cell_manager/#events).

### События DataCollection {#datacollection-events}

Полный список событий API DataCollection см. в [справочнике API](/api/data_collection/#events).

### События InlineEditor {#inlineeditor-events}

Полный список событий API InlineEditor см. в [справочнике API](/api/inline_editor/#events).

### События Selection {#selection-events}

Полный список событий API Selection см. в [справочнике API](/api/selection/#events).
