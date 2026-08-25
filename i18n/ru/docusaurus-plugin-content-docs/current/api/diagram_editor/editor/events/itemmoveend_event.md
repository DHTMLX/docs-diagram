---
sidebar_label: itemMoveEnd
title: Событие itemMoveEnd редактора
description: Узнайте больше о событии itemMoveEnd редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную пробную версию DHTMLX Diagram сроком на 30 дней.
---

# itemMoveEnd

### Описание {#description}

@short: Срабатывает после перемещения элемента

:::note
Событие не работает с объектом `line`.

Событие срабатывает только для целевого элемента, независимо от количества выбранных элементов. Идентификаторы перетаскиваемых элементов передаются в параметре `batch` колбека.
:::

### Использование {#usage}

~~~jsx
"itemMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### Параметры {#parameters}

Колбек события вызывается с объектом со следующими параметрами:

  - `id` - идентификатор элемента
  - `batch` - массив идентификаторов перемещённых элементов
  - `coords` - объект с координатами `x` и `y` позиции элемента после перемещения, где:
    - `x` - горизонтальная позиция элемента при перемещении слева направо
    - `y` - вертикальная позиция элемента при перемещении сверху вниз
  - `event` - объект события

### Пример {#example}

~~~jsx {6-13}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика события
editor.events.on("itemMoveEnd", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Журнал изменений**:

- Параметр `batch` добавлен в v6.0
- Начиная с v6.0 колбек принимает объект в качестве параметра

**Похожее API**:

- [`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md)
- [`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур через события](https://snippet.dhtmlx.com/qldjbbm7)

