---
sidebar_label: zoomIn
title: Событие zoomIn редактора
description: Вы можете узнать больше о событии zoomIn редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# zoomIn

### Описание {#description}

@short: Срабатывает после нажатия кнопки Zoom In или вызова метода zoomIn()

### Использование {#usage}

~~~jsx
"zoomIn": (step: number) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события `zoomIn` вызывается со следующим параметром:

- `step` - (обязательный) значение, отображающее шаг свойства [`scale`](api/diagram_editor/editor/config/scale_property.md).

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
editor.events.on("zoomIn", (step) => {
    console.log("The diagram in the editor is zoomed in. The step is" + step);
});
~~~

**Журнал изменений**: Параметр `step` был добавлен в v6.0
