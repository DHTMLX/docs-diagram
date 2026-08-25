---
sidebar_label: groupDblClick
title: Событие groupDblClick
description: Изучите событие groupDblClick в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# groupDblClick

### Описание {#description}

@short: Срабатывает при двойном клике на группу

Если двойной клик выполняется над дорожкой, событие срабатывает на ячейке этой дорожки

### Использование {#usage}

~~~jsx
groupDblClick: (
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
diagram.events.on("groupDblClick", (id, event) => {
    console.log(id, event);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
