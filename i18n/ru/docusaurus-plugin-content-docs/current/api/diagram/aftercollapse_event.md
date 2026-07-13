---
sidebar_label: afterCollapse
title: Событие afterCollapse
description: Подробнее о событии afterCollapse вы можете узнать в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# afterCollapse

### Описание {#description}

@short: Срабатывает после того, как элемент был свёрнут

### Использование {#usage}

~~~jsx
afterCollapse: (
    id: string | number,
    dir?: string
) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующие параметры:

- `id` - (обязательный) идентификатор элемента, который был свёрнут
- `dir` - (необязательный) сторона, в которую были скрыты дочерние элементы относительно родительской фигуры (`"left"` или `"right"` для *type:`"topic"`*, в остальных случаях - undefined)

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("afterCollapse", (id, dir) => {
    console.log(diagram.data.getItem(id).text + " was collapsed", dir);
});
~~~

**Журнал изменений**: параметр `dir` добавлен в v3.1

**Полезная статья**: [Обработка событий](guides/event_handling.md)
