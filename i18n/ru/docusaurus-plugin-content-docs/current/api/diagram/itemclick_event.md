---
sidebar_label: itemClick
title: Событие itemClick
description: Узнайте больше о событии itemClick в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# itemClick

### Описание {#description}

@short: Срабатывает при клике по элементу

Если клик выполнен над дорожкой, событие будет вызвано на ячейке этой дорожки

### Использование {#usage}

~~~jsx
itemClick: (
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

// подключение обработчика события
diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
