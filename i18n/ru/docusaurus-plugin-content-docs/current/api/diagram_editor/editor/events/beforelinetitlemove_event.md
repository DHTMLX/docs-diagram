---
sidebar_label: beforeLineTitleMove
title: beforeLineTitleMove — событие Editor
description: Изучите событие beforeLineTitleMove редактора Editor в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeLineTitleMove

### Описание {#description}

@short: Срабатывает перед перемещением текстового элемента линии

### Использование {#usage}

~~~jsx
"beforeLineTitleMove": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: obj
}) => boolean | void;
~~~

### Параметры {#parameters}

Колбек события вызывается с объектом, содержащим следующие параметры:

  - `event` - объект события
  - `lineId` - идентификатор линии
  - `titleId` - идентификатор текстового элемента линии
  - `coords` - объект с координатами `x` и `y` положения текстового элемента до перемещения, где:
    - `x` - горизонтальное положение текстового элемента при перемещении слева направо
    - `y` - вертикальное положение текстового элемента при перемещении сверху вниз

### Возвращаемое значение {#returns}

Колбек возвращает `false`, чтобы предотвратить перемещение текстового элемента линии; в противном случае — `true`

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {6-14}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика события
editor.events.on("beforeLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Журнал изменений**:

- Колбек принимает объект в качестве параметра начиная с v6.0
