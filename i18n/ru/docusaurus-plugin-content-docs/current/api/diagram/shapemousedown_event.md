---
sidebar_label: shapeMouseDown
title: Событие shapeMouseDown
description: Подробнее о событии shapeMouseDown вы можете узнать в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# shapeMouseDown

### Описание {#description}

@short: Срабатывает при нажатии кнопки указывающего устройства в момент, когда указатель находится над фигурой

### Использование {#usage}

~~~jsx
shapeMouseDown: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующие параметры:

- `id` - (обязательный) идентификатор фигуры
- `event` - (обязательный) нативный объект события HTML

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// добавление обработчика события
diagram.events.on("shapeMouseDown", (id) => {
    console.log('An item "' + diagram.data.getItem(id).text + '"will be clicked');
});
~~~

**Полезная статья**: [Обработка событий](guides/event_handling.md)
