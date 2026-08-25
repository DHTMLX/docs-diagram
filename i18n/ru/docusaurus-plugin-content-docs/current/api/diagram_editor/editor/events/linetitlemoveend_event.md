---
sidebar_label: lineTitleMoveEnd
title: Событие lineTitleMoveEnd редактора
description: Узнайте больше о событии lineTitleMoveEnd редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную пробную версию DHTMLX Diagram сроком на 30 дней.
---

# lineTitleMoveEnd

### Описание {#description}

@short: Срабатывает после перемещения текстового элемента линии

### Использование {#usage}

~~~jsx
"lineTitleMoveEnd": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: obj
}) => void;
~~~

### Параметры {#parameters}

Колбек события вызывается с объектом со следующими параметрами:

  - `event` - объект события
  - `lineId` - идентификатор линии
  - `titleId` - идентификатор текстового элемента линии
  - `coords` - объект с координатами `x` и `y` позиции текстового элемента после перемещения, где:
    - `x` - горизонтальная позиция текстового элемента при перемещении слева направо
    - `y` - вертикальная позиция текстового элемента при перемещении сверху вниз

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {6-13}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика события
editor.events.on("lineTitleMoveEnd", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Журнал изменений**: Начиная с v6.0 колбек принимает объект в качестве параметра