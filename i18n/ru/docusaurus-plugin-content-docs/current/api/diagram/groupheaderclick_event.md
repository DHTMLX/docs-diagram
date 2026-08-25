---
sidebar_label: groupHeaderClick
title: Событие groupHeaderClick
description: Изучите событие groupHeaderClick в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# groupHeaderClick

### Описание {#description}

@short: Срабатывает при клике на заголовок группы

Если клик выполняется над заголовком дорожки, событие срабатывает на подзаголовке этой дорожки

### Использование {#usage}

~~~jsx
groupHeaderClick: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `id` - (обязательный) идентификатор группы
- `event` - (обязательный) нативный объект события HTML
- `subHeaderId` - (необязательный) идентификатор подзаголовка дорожки

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("groupHeaderClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
