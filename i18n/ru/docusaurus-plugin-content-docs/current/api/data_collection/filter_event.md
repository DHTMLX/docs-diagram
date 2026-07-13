---
sidebar_label: filter
title: Событие filter объекта Data Collection
description: Вы можете узнать больше о событии filter объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# filter

### Описание {#description}

@short: срабатывает после фильтрации объекта Data Collection

### Использование {#usage}

~~~jsx
filter: (filter?: object) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события `filter` вызывается со следующим параметром:

- `object: {key: object }` - объект со всеми активными фильтрами, где
    - `key` - id активного фильтра
    - `object` - объект со свойствами [`rule` и `config`](api/data_collection/filter_method.md#parameters)

:::info
Для обработки внутренних событий объекта Data Collection в Diagram используйте метод `on()`.
:::

### Пример {#example}

~~~jsx {7-9}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.events.on("filter", (filter) => {
    console.log("Items were filtered");
});
~~~
