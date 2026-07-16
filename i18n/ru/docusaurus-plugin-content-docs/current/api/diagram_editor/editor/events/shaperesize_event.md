---
sidebar_label: shapeResize
title: Событие shapeResize редактора
description: Вы можете узнать больше о событии shapeResize редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# shapeResize

### Описание {#description}

@short: Срабатывает после изменения размера фигуры

### Использование {#usage}

~~~jsx
"shapeResize": () => void;
~~~

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {6-9}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("shapeResize", () => {
    console.log("The shape has been resized");
});
~~~
