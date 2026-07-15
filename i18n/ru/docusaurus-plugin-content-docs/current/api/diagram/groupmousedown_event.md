---
sidebar_label: groupMouseDown
title: Событие groupMouseDown
description: Узнайте больше о событии groupMouseDown в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# groupMouseDown

### Описание {#description}

@short: Срабатывает при нажатии кнопки указывающего устройства в момент, когда указатель находится над группой

Если кнопка указывающего устройства нажата, когда указатель находится над дорожкой, событие будет вызвано на ячейке этой дорожки

### Использование {#usage}

~~~jsx
groupMouseDown: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Параметры {#parameters}

Обратный вызов события принимает следующие параметры:

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
diagram.events.on("groupMouseDown", (id, event) => {
    console.log(id, event);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
