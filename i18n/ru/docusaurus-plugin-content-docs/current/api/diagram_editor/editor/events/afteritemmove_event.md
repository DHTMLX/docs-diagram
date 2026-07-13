---
sidebar_label: afterItemMove
title: Событие afterItemMove редактора
description: Здесь вы можете узнать о событии afterItemMove редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную ознакомительную версию DHTMLX Diagram сроком на 30 дней.
---

# afterItemMove

### Описание {#description}

@short: Срабатывает при перемещении элемента на один шаг сетки

:::note
Событие не работает с объектом `line`.

Событие срабатывает только для целевого элемента, независимо от количества выбранных элементов. Идентификаторы перетаскиваемых элементов передаются в параметре `batch` функции обратного вызова.
:::

### Использование {#usage}

~~~jsx
"afterItemMove": ({
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
- `coords` - объект с координатами `x` и `y` положения элемента после перемещения, где:
    - `x` - горизонтальное положение элемента при перемещении слева направо
    - `y` - вертикальное положение элемента при перемещении сверху вниз
- `event` - объект события

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
editor.events.on("afterItemMove", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Журнал изменений**:

- Параметр `batch` добавлен в v6.0
- Функция обратного вызова принимает объект в качестве параметра начиная с v6.0

**Похожее API**:

- [`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md)
- [`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур с помощью событий](https://snippet.dhtmlx.com/qldjbbm7)