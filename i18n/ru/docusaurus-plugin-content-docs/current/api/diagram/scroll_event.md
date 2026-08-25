---
sidebar_label: scroll
title: Событие scroll
description: Узнайте больше о событии scroll в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# scroll

### Описание {#description}

@short: Срабатывает при прокрутке диаграммы

### Использование {#usage}

~~~jsx
scroll: (position: object) => void;
~~~

### Параметры {#parameters}

Колбек события принимает следующий параметр:

- `position` - (обязательный) позиция прокрутки. Объект содержит координаты x и y текущей позиции прокрутки, например: `{x: 67, y: 130}`

### Пример {#example}

~~~jsx {10-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    scroll: true
});
// загрузка данных
diagram.data.parse(data);

// присоединение обработчика к событию
diagram.events.on("scroll", () => {
    console.log("The diagram has been scrolled")
});
~~~

**Полезные статьи**:

- [Прокрутка Diagram](guides/diagram/scrolling_diagram.md)
- [Обработка событий](guides/event_handling.md)
