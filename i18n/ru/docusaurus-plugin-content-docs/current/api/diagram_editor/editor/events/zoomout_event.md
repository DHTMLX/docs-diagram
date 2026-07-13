---
sidebar_label: zoomOut
title: Событие zoomOut редактора
description: Вы можете узнать больше о событии zoomOut редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# zoomOut

### Описание {#description}

@short: Срабатывает после нажатия кнопки Zoom Out или вызова метода `zoomOut()`

### Использование {#usage}

~~~jsx
"zoomOut": (step) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события `zoomOut` вызывается со следующим параметром:

- `step` - (обязательный) значение, отображающее шаг изменения свойства [`scale`](api/diagram_editor/editor/config/scale_property.md).

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {7-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("zoomOut", (step) => {
    console.log("The diagram in the editor is zoomed out");
});
~~~

**Журнал изменений**: Параметр `step` был добавлен в v6.0
