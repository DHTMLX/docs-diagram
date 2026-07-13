---
sidebar_label: afterItemRotate
title: Событие afterItemRotate редактора
description: Здесь вы можете узнать о событии afterItemRotate редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную ознакомительную версию DHTMLX Diagram сроком на 30 дней.
---

# afterItemRotate

### Описание {#description}

@short: Срабатывает после поворота элемента

### Использование {#usage}

~~~jsx
"afterItemRotate": ({
    id: string | number,
    angle: number
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

- `id` - идентификатор повёрнутого элемента
- `angle` - новый угол поворота элемента в градусах

### Пример {#example}

~~~jsx
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика к событию
editor.events.on("afterItemRotate", ({ id, angle }) => {
    console.log(`The item ${id} has been rotated by the angle: ${angle}`);
});
~~~

**Журнал изменений**:

- Событие добавлено в v6.1

**Похожее API**:

- [`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур с помощью событий](https://snippet.dhtmlx.com/qldjbbm7)