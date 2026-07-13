---
sidebar_label: shapeMoveEnd
title: Событие shapeMoveEnd редактора
description: Вы можете узнать больше о событии shapeMoveEnd редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# shapeMoveEnd

### Описание {#description}

@short: Срабатывает после перемещения фигуры

:::note
Событие срабатывает только для целевого элемента независимо от количества выбранных элементов. Идентификаторы перетаскиваемых элементов передаются в параметре `batch` функции обратного вызова.
:::

### Использование {#usage}

~~~jsx
"shapeMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

  - `id` - идентификатор элемента
  - `batch` - массив идентификаторов перемещённых элементов
  - `coords` - объект с координатами `x` и `y` положения фигуры после перемещения, где:
    - `x` - горизонтальное положение фигуры при перемещении слева направо
    - `y` - вертикальное положение фигуры при перемещении сверху вниз
  - `event` - объект события

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {6-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("shapeMoveEnd", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Журнал изменений**:

- Параметр `batch` был добавлен в v6.0
- Функция обратного вызова принимает объект в качестве параметра начиная с v6.0
