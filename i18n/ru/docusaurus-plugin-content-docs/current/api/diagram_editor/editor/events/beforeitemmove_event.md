---
sidebar_label: beforeItemMove
title: Событие beforeItemMove редактора
description: Изучите событие beforeItemMove редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо-версии, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# beforeItemMove

### Описание {#description}

@short: Срабатывает перед перемещением элемента

:::note
Событие не работает с объектом `line`.

Событие срабатывает только для целевого элемента, независимо от количества выбранных элементов. Идентификаторы перетаскиваемых элементов передаются в параметре `batch` колбека.
:::

### Использование {#usage}

~~~jsx
"beforeItemMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent,
}) => boolean | void;
~~~

### Параметры {#parameters}

Колбек события вызывается с объектом со следующими параметрами:

  - `id` - идентификатор элемента
  - `batch` - массив идентификаторов перемещённых элементов
  - `coords` - объект с координатами `x` и `y` положения элемента до перемещения, где:
    - `x` - горизонтальное положение элемента при перемещении слева направо
    - `y` - вертикальное положение элемента при перемещении сверху вниз
  - `event` - объект события

### Возвращаемое значение {#returns}

Колбек возвращает `false`, чтобы предотвратить перемещение элемента; в противном случае — `true`

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {6-14}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// прикрепление обработчика к событию
editor.events.on("beforeItemMove", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Журнал изменений**:

- Параметр `batch` добавлен в v6.0
- Начиная с v6.0, колбек принимает объект в качестве параметра

**Похожее API**:

- [`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md)
- [`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур с помощью событий](https://snippet.dhtmlx.com/qldjbbm7)
