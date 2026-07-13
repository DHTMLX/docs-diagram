---
sidebar_label: itemResizeEnd
title: Событие itemResizeEnd редактора
description: Узнайте больше о событии itemResizeEnd редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную пробную версию DHTMLX Diagram сроком на 30 дней.
---

# itemResizeEnd

### Описание {#description}

@short: Срабатывает после завершения операции изменения размера элемента (когда пользователь отпускает кнопку мыши)

### Использование {#usage}

~~~jsx
"itemResizeEnd": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом со следующими параметрами:

- `id` - идентификатор элемента, размер которого был изменён
- `width` - итоговая ширина элемента
- `height` - итоговая высота элемента
- `x` - итоговая координата X элемента
- `y` - итоговая координата Y элемента
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

// подключение обработчика события
editor.events.on("itemResizeEnd", ({ id, width, height }) => {
    console.log(`
        The item ${id} finished resizing:
            the final width: ${width}
            the final height: ${height}
    `);
    // Здесь можно сохранить новые размеры элемента на сервере
});
~~~

**Журнал изменений**:

- Событие добавлено в v6.1

**Похожее API**:

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур через события](https://snippet.dhtmlx.com/qldjbbm7)