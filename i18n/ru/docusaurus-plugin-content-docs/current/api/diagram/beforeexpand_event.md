---
sidebar_label: beforeExpand
title: Событие beforeExpand
description: Изучите событие beforeExpand в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# beforeExpand

### Описание {#description}

@short: Срабатывает перед разворачиванием элемента

### Использование {#usage}

~~~jsx
beforeExpand: (
    id: string | number,
    dir?: string
) => boolean | void;
~~~

### Параметры {#parameters}

Обратный вызов события принимает следующие параметры:

- `id` - (обязательный) идентификатор элемента
- `dir` - (необязательный) сторона, в которую будут показаны дочерние элементы относительно родительской фигуры (`"left"` или `"right"` для *type:`"topic"`*, в остальных случаях — undefined)

### Возвращаемое значение {#returns}

Верните `false`, чтобы заблокировать разворачивание элемента; в противном случае — `true`

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// загрузка данных
diagram.data.parse(data);

// прикрепление обработчика к событию
diagram.events.on("beforeExpand", (id, dir) => {
    console.log("Expanding " + diagram.data.getItem(id).text, dir);
    return true;
});
~~~

**Журнал изменений**: Параметр `dir` добавлен в v3.1

**Полезная статья**: [Обработка событий](guides/event_handling.md)
