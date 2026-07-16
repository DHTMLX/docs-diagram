---
sidebar_label: emptyAreaMouseDown
title: Событие emptyAreaMouseDown
description: Узнайте больше о событии emptyAreaMouseDown в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# emptyAreaMouseDown

### Описание {#description}

@short: Срабатывает при нажатии кнопки указывающего устройства, когда указатель находится над пустым пространством в текущей области диаграммы

### Использование {#usage}

~~~jsx
emptyAreaMouseDown: (event: MouseEvent) => void;
~~~

### Параметры {#parameters}

Колбек события принимает следующий параметр:

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
diagram.events.on("emptyAreaMouseDown", (e) => {
    console.log("emptyAreaMouseDown");
});
~~~

**Журнал изменений**: Добавлено в v4.1

**Полезная статья**: [Обработка событий](guides/event_handling.md)
