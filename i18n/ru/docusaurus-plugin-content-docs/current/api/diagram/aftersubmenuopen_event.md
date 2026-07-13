---
sidebar_label: afterSubmenuOpen
title: Событие afterSubmenuOpen
description: Подробнее о событии afterSubmenuOpen вы можете узнать в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# afterSubmenuOpen

### Описание {#description}

@short: Срабатывает после открытия меню подзаголовка

### Использование {#usage}

~~~jsx
afterSubmenuOpen: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующие параметры:

- `id` - (обязательный) идентификатор дорожки
- `event` - (обязательный) нативный объект события HTML
- `subHeaderId` - (обязательный) идентификатор подзаголовка дорожки

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("afterSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
