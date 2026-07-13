---
sidebar_label: emptyAreaDblClick
title: Событие emptyAreaDblClick
description: Узнайте больше о событии emptyAreaDblClick в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# emptyAreaDblClick

### Описание {#description}

@short: Срабатывает при двойном щелчке по пустому пространству в текущей области диаграммы

### Использование {#usage}

~~~jsx
emptyAreaDblClick: (event: MouseEvent) => void;
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
diagram.events.on("emptyAreaDblClick", (e) => {
    console.log("emptyAreaDblClick");
});
~~~

**Журнал изменений**: Добавлено в v4.1

**Полезная статья**: [Обработка событий](guides/event_handling.md)
