---
sidebar_label: groupClick
title: Событие groupClick
description: Изучите событие groupClick в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# groupClick

### Описание {#description}

@short: Срабатывает при клике на группу

Если клик выполняется над дорожкой, событие срабатывает на ячейке этой дорожки

### Использование {#usage}

~~~jsx
groupClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `id` - (обязательный) идентификатор группы
- `event` - (обязательный) нативный объект события HTML

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("groupClick", (id, event) => {
    console.log(id, event);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
