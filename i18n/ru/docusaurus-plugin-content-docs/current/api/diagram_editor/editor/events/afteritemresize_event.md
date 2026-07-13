---
sidebar_label: afterItemResize
title: Событие afterItemResize редактора
description: Здесь вы можете узнать о событии afterItemResize редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную ознакомительную версию DHTMLX Diagram сроком на 30 дней.
---

# afterItemResize

### Описание {#description}

@short: Срабатывает после изменения размера элемента

### Использование {#usage}

~~~jsx
"afterItemResize": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

- `id` - идентификатор элемента, размер которого изменён
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

### Пример {#example}

~~~jsx
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика к событию
editor.events.on("afterItemResize", ({ id, width, height }) => {
    console.log(`
        The item ${id} has been resized:
            width: ${width}
            height: ${height}
    `);
});
~~~

**Журнал изменений**:

- Событие добавлено в v6.1

**Похожее API**:

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур с помощью событий](https://snippet.dhtmlx.com/qldjbbm7)