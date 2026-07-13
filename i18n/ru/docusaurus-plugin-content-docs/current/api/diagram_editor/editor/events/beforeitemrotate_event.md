---
sidebar_label: beforeItemRotate
title: beforeItemRotate — событие Editor
description: Изучите событие beforeItemRotate редактора Editor в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeItemRotate

### Описание {#description}

@short: Срабатывает перед поворотом элемента

### Использование {#usage}

~~~jsx
"beforeItemRotate": ({
    id: string | number,
    angle: number
}) => boolean | void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

- `id` - идентификатор поворачиваемого элемента
- `angle` - новый угол поворота элемента в градусах

### Возвращаемое значение {#returns}

Функция обратного вызова возвращает `false`, чтобы предотвратить поворот элемента; в противном случае — `true`.

### Пример {#example}

~~~jsx
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика события
editor.events.on("beforeItemRotate", ({ id, angle }) => {
    if (angle > 90 && angle < 270) {
        console.log(`Preventing rotation of the item ${id} by this angle.`);
        return false; // Предотвратить поворот
    }
    console.log(`Rotating the item ${id} by the angle: ${angle}`);
});
~~~

**Журнал изменений**:

- Событие добавлено в v6.1

**Похожее API**:

- [`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур с помощью событий](https://snippet.dhtmlx.com/qldjbbm7)