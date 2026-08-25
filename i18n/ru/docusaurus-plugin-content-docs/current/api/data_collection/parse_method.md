---
sidebar_label: parse()
title: Метод parse для Data Collection
description: Вы можете узнать о методе parse объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# parse()

### Описание {#description}

@short: Загружает данные из локального источника данных в диаграмму и обрабатывает их

### Использование {#usage}

~~~jsx
parse(
    data: object[] | { data: object[]; links: object[] } | string,
    driver?: object | string
): void;
~~~

### Параметры {#parameters}

- `data: object[] | { data: object[]; links: object[] } | string` - (обязательный) данные для загрузки. Вы можете загружать данные в любом поддерживаемом формате. Структура данных зависит от режима диаграммы:
    - для режимов Diagram default, org chart и mindmap данные задаются в виде массива, содержащего набор объектов данных
    ~~~jsx
    data: object[]; // массив всех фигур и соединений
    ~~~
    - для режима Diagram PERT это объект, который содержит:
      -  массив `data` (для фигур: `"task"`, `"milestone"`, `"project"`)
      -  массив `links` (для соединений между фигурами)
    ~~~jsx
    {
        data: object[]; // массив фигур (задач, вех, проектов)
        links: object[] // массив соединений между фигурами
    };
    ~~~
- `driver` - (опциональный) `DataDriver` или тип данных (`"json"`, `"csv"`, `"xml"`); по умолчанию — `"json"`

### Пример {#example}

- для режима org chart диаграммы:

~~~jsx
const data = [
    {
        id: "1",
        text: "Chairman & CEO",
        title: "Henry Bennett",
        img: "../common/img/avatar-1.png"
    },
    {
        id: "2",
        text: "Manager",
        title: "Mildred Kim",
        img: "../common/img/avatar-2.png"
    },
    {
        id: "3",
        text: "Technical Director",
        title: "Jerry Wagner",
        img: "../common/img/avatar-3.png"
    },
    { id: "1-2", from: "1", to: "2", type: "line" },
    { id: "1-3", from: "1", to: "3", type: "line" }
];

const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});

diagram.data.parse(data);
~~~

- для режима PERT диаграммы:

~~~jsx
const dataset = {
    data: [
        { id: "1", text: "Project #1", type: "project", parent: null },
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
    ],
    links: [
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" },
    ]
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});

diagram.data.parse(dataset);
~~~

**Related article**:  [Загрузка и хранение данных](guides/loading_data.md)

**Related samples**:
- [Diagram. Режим Org chart. Базовая инициализация](https://snippet.dhtmlx.com/5ign6fyy)
- [Diagram. PERT-диаграмма. Инициализация](https://snippet.dhtmlx.com/4h5fi7xd)
