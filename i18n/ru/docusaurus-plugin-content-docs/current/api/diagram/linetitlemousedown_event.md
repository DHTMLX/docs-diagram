---
sidebar_label: lineTitleMouseDown
title: Событие lineTitleMouseDown
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о событии lineTitleMouseDown. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# lineTitleMouseDown

### Описание {#description}

@short: Срабатывает при нажатии кнопки указывающего устройства, когда указатель находится над текстовым элементом линии

### Использование {#usage}

~~~jsx
lineTitleMouseDown: (
    lineId: string | number,
    titleId: string | number,
    event: MouseEvent
) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `lineId` - (обязательный) идентификатор линии
- `titleId` - (обязательный) идентификатор текстового элемента линии
- `event` - (обязательный) объект нативного события HTML

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// прикрепление обработчика к событию
diagram.events.on("lineTitleMouseDown", (lineId, titleId, event) => {
    console.log("lineTitleMouseDown");
});
~~~

**Change log**: Добавлено в v4.1

**Полезная статья**: [Обработка событий](guides/event_handling.md)
