---
sidebar_label: shapeIconClick
title: Событие shapeIconClick
description: Подробнее о событии shapeIconClick вы можете узнать в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# shapeIconClick

### Описание {#description}

@short: Срабатывает при клике на иконку панели инструментов фигуры

### Использование {#usage}

~~~jsx
"shapeIconClick": (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается со следующими параметрами:

- `id` - идентификатор иконки
- `event` - нативный объект события HTML

### Пример {#example}

~~~jsx {23-39}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // настройка панели инструментов с кнопками для элементов
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>"
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>"
        }
    ]
});
// загрузка данных
diagram.data.parse(data);

diagram.events.on("shapeIconClick", function (action) {
    const selectedId = diagram.selection.getItem().id;
    switch(action) {
        case "download":
            diagram.export.pdf();
            break;
        case "remove":
            diagram.data.remove(selectedId);
            break;
        case "add":
            diagram.data.add({
                text: "New shape",
                parent: selectedId,
            });
            break;
    }
});
~~~

**Полезная статья**: [Обработка событий](guides/event_handling.md)

**Связанный пример**: [Diagram. Конфигурация. Панель инструментов фигуры](https://snippet.dhtmlx.com/4if395hd)
