---
sidebar_label: load
title: Событие load класса Data Collection
description: Узнайте о событии load класса Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# load

### Описание {#description}

@short: Срабатывает при загрузке данных в диаграмму

### Использование {#usage}

~~~jsx
load: () => void;
~~~

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика к событию
diagram.events.on("load", () => {
    // некоторая логика
});
~~~
