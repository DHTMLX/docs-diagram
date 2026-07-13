---
sidebar_label: emptyAreaClick
title: Событие emptyAreaClick
description: Узнайте больше о событии emptyAreaClick в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# emptyAreaClick

### Описание {#description}

@short: Срабатывает при щелчке по пустому пространству в текущей области диаграммы

### Использование {#usage}

~~~jsx
emptyAreaClick: (event: MouseEvent) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующий параметр:

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
diagram.events.on("emptyAreaClick", () => {
    console.log("An empty space has been clicked");
});
~~~

**Полезная статья**: [Обработка событий](guides/event_handling.md)
