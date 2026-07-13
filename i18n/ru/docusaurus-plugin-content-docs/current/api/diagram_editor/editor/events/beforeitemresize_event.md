---
sidebar_label: beforeItemResize
title: Событие beforeItemResize редактора
description: Изучите событие beforeItemResize редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо-версии, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# beforeItemResize

### Описание {#description}

@short: Срабатывает перед изменением размера элемента

### Использование {#usage}

~~~jsx
"beforeItemResize": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => boolean | void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом со следующими параметрами:

- `id` - идентификатор элемента, размер которого изменяется
- `width` - новая ширина элемента
- `height` - новая высота элемента
- `x` - новая координата X элемента
- `y` - новая координата Y элемента
- `dir` - направление операции изменения размера:
	- `"n"` - север
    - `"ne"` - северо-восток
    - `"e"` - восток
    - `"se"` - юго-восток
    - `"s"` - юг
    - `"sw"` - юго-запад
    - `"w"` - запад
    - `"nw"` - северо-запад

### Возвращаемое значение {#returns}

Функция обратного вызова возвращает `false`, чтобы предотвратить изменение размера элемента; в противном случае — `true`.

### Пример {#example}

~~~jsx
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// прикрепление обработчика к событию
editor.events.on("beforeItemResize", ({ id, width, height }) => {
    if (width < 50 || height < 50) {
        console.log(`Preventing resize of item ${id} because it's too small.`);
        return false; // Предотвращение изменения размера
    }
    console.log(`Resizing the item ${id} to the width: ${width}, height: ${height}`);
});
~~~

**Журнал изменений**:

- Событие добавлено в v6.1

**Похожее API**:

- [`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md)
- [`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур с помощью событий](https://snippet.dhtmlx.com/qldjbbm7)