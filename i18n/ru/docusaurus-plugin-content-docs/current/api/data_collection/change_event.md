---
sidebar_label: change
title: Событие change объекта Data Collection
description: Вы можете узнать о событии change объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# change

### Описание {#description}

@short: Срабатывает при изменении набора данных диаграммы

### Использование {#usage}

~~~jsx
change: (
    id?: string,
    status?: "add" | "update" | "delete" | "load"
    updatedItem?: object
) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующие параметры:

- `id` - (необязательный) ID измененного элемента
- `status` - (необязательный) статус изменения: `"add"`, `"update"`, `"delete"`, `"load"`
- `updatedItem` - (необязательный) объект измененного элемента

:::info
Бывают случаи, когда функция-обработчик не принимает никаких параметров, например, когда набор данных парсится в диаграмму и все фигуры удаляются
:::

### Пример {#example}

~~~jsx {9-11}
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика к событию
diagram.events.on("change", function (id, status, shape) {
    console.log("The " + id + " has been " + status);
});
~~~
