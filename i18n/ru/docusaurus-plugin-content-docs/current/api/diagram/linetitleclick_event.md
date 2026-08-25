---
sidebar_label: lineTitleClick
title: Событие lineTitleClick
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о событии lineTitleClick. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# lineTitleClick

### Описание {#description}

@short: Срабатывает при клике по текстовому элементу линии

### Использование {#usage}

~~~jsx
lineTitleClick: (
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

### Использование {#usage-1}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// прикрепление обработчика к событию
diagram.events.on("lineTitleClick", (lineId, titleId, event) => {
    console.log("lineTitleClick");
});
~~~

**Change log**: Добавлено в v4.1

**Полезная статья**: [Обработка событий](guides/event_handling.md)
