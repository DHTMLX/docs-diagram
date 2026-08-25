---
sidebar_label: itemMouseOver
title: Событие itemMouseOver
description: Изучите событие itemMouseOver в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# itemMouseOver

### Описание {#description}

@short: Срабатывает при наведении указывающего устройства на элемент

### Использование {#usage}

~~~jsx
itemMouseOver: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Параметры {#parameters}

Обратный вызов события принимает следующие параметры:

- `id` - (обязательный) идентификатор элемента
- `event` - (обязательный) нативный объект события HTML

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика к событию
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
