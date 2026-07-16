---
sidebar_label: Заголовки линий
title: Заголовки линий
description: Вы можете узнать о линиях в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и демонстрации в реальном времени, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Заголовки линий {#linetitles}

## Обзор {#overview}

Заголовки линий задают текст для линий, соединяющих фигуры. Вы можете добавить текст к линии как в Diagram, так и в редакторе, дважды щёлкнув по линии, либо с помощью панели инструментов линии в редакторе (щёлкните по линии, чтобы активировать её). Вы также можете использовать двойной щелчок для редактирования заголовков линий как в Diagram, так и в редакторе.

Ещё один способ добавить текст к линии и работать с ним - подготовить [набор данных](guides/loading_data.md#preparing-data-to-load).

:::note
Заголовки линий доступны только в режиме по умолчанию для Diagram/Diagram Editor (type: `"default"`).
:::

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Создание заголовков линий {#creating-line-titles}

Чтобы создать заголовок линии, укажите `type: "lineTitle"` внутри объекта заголовка линии при подготовке набора данных для загрузки в Diagram:

~~~jsx {5-6}
const data = [
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    // настройка заголовка линии
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];

// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### Свойства объекта заголовка линии {#properties-of-a-line-title-object}

Ознакомьтесь с [полным списком свойств конфигурации объекта заголовка линии](line_titles/configuration_properties.md), чтобы настроить внешний вид, а также позиционирование заголовков линий.

## Работа с заголовками линий {#working-with-line-titles}

Вы можете управлять заголовками линий с помощью [DataCollection API](/api/data_collection/).

:::note
Примеры ниже подходят как для Diagram, так и для Diagram Editor.
:::

### Добавление заголовка линии {#adding-a-line-title}

Вы можете добавить заголовок линии с помощью метода [`add`](api/data_collection/add_method.md) DataCollection:

~~~jsx {5-10}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.add({
    type: "lineTitle",
    parent: "line_1",
    text: "Some text",
    fill: "#BCE4CE"
});
~~~

Передайте объект с конфигурацией нового заголовка линии в качестве параметра метода.

:::note
Смотрите [полный список свойств конфигурации объекта заголовка линии](line_titles/configuration_properties.md).
:::

### Блокировка добавления заголовков линий {#blocking-line-titles-adding}

Если вам нужно предотвратить добавление заголовков линий, используйте событие [`beforeAdd`](api/data_collection/beforeadd_event.md) DataCollection:

~~~jsx {5}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.events.on("beforeAdd", (item) => item.type !== "lineTitle");
~~~

### Перебор заголовков линий {#iterating-over-line-titles}

Вы можете перебирать заголовки линий как дочерние элементы линий с помощью метода [`eachChild()`](api/data_collection/eachchild_method.md) DataCollection:

~~~jsx {7-9,11-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse([
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Text 1", distance: 50 },
    { type: "lineTitle", id: "title_2", parent: "line_1", text: "Text 2", distance: 70 }
]);
editor.diagram.data.eachChild("line_1", (child) => {
    console.log(child.id); // => "title_1", "title_2"
});
~~~

Передайте id линии, заголовки которой нужно перебрать, в качестве первого параметра. В приведённом выше примере колбек будет применён к каждому дочернему элементу указанной линии и вернёт их id.
