---
sidebar_label: afterLineTitleMove
title: Событие afterLineTitleMove редактора
description: Здесь вы можете узнать о событии afterLineTitleMove редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную ознакомительную версию DHTMLX Diagram сроком на 30 дней.
---

# afterLineTitleMove

### Описание {#description}

@short: Срабатывает при перемещении текстового элемента линии на один шаг сетки

### Использование {#usage}

~~~jsx
"afterLineTitleMove": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: object
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

  - `event` - объект события
  - `lineId` - идентификатор линии
  - `titleId` - идентификатор текстового элемента линии
  - `coords` - объект с координатами `x` и `y` положения текстового элемента после перемещения, где:
    - `x` - горизонтальное положение текстового элемента при перемещении слева направо
    - `y` - вертикальное положение текстового элемента при перемещении сверху вниз

:::info
Для обработки внутренних событий Diagram Editor используйте метод `on()`.
:::

### Пример {#example}

~~~jsx {6-13}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика к событию
editor.events.on("afterLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Журнал изменений**: Функция обратного вызова принимает объект в качестве параметра начиная с v6.0
