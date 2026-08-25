---
sidebar_label: lineClick
title: Событие lineClick
description: Изучите событие lineClick в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# lineClick

### Описание {#description}

@short: Срабатывает при клике на соединительную линию

### Использование {#usage}

~~~jsx
lineClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Параметры {#parameters}

Обратный вызов события принимает следующие параметры:

- `id` - (обязательный) идентификатор соединительной линии
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
diagram.events.on("lineClick", (id) => {
    console.log(id);
});
~~~

**Журнал изменений**: Добавлено в v3.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
