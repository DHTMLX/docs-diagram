---
sidebar_label: Загрузка и сохранение данных
title: Загрузка и сохранение данных
description: Вы можете узнать больше о загрузке и сохранении данных редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Загрузка и сохранение данных {#loading-and-storing-data}

Вы можете наполнить DHTMLX Diagram данными следующими способами:

- [загрузить данные из внешнего файла](#external-data-loading)
- [загрузить данные из локального источника данных](#loading-from-a-local-source)

## Подготовка данных к загрузке {#preparing-data-to-load}

DHTMLX Diagram принимает данные в формате JSON. Для режимов Diagram по умолчанию, org chart и mindmap это массив, содержащий набор объектов данных. Существует 5 типов объектов:

- **объекты фигур**

~~~jsx {2-5}
const data = [
   // настройка фигур
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // настройка линий
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // настройка заголовка линии
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

Библиотека предоставляет [различные типы фигур по умолчанию](shapes/default_shapes.md), которые имеют как общие, так и специфические параметры. Полный список доступных свойств объекта `shape` смотрите в [справочнике API](shapes/configuration_properties.md).

Вы также можете создать [собственный тип фигур](shapes/custom_shape.md) и добавить любые пользовательские свойства к объектам фигур.

- **объекты линий**

~~~jsx {6-8}
const data = [
   // настройка фигур
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // настройка линий
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // настройка заголовка линии
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

Наличие или отсутствие объектов линий в наборе данных зависит от выбранного [способа соединения фигур](/lines/#setting-connections-between-shapes). Полный список доступных свойств объекта `line` смотрите в [справочнике API](lines/configuration_properties.md).

- **объекты заголовков линий**

~~~jsx {9-10}
const data = [
   // настройка фигур
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // настройка линий
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // настройка заголовка линии
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

Полный список доступных свойств объекта **заголовка линии** смотрите в [справочнике API](line_titles/configuration_properties.md).

- **объекты групп**

~~~jsx
const data = [
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Top and collapsed header with tеxt alignment",
            "editable": true,
            "closable": true,
            "textAlign": "left", // "left", "center", "right"
            "textVerticalAlign": "center", // "top", "center", "bottom"
        },
        // дочерние элементы группы
        "groupChildren": [1.1, 1.2],
        "open": false,
    },
    // настройка фигур для добавления в группу
    { "type": "rectangle", "id": 1.1, "x": 50, "y": 75, "text": "Shape 1.1" },
    { "type": "rectangle", "id": 1.2, "x": 200, "y": 75, "text": "Shape 1.2" }
];
~~~

Полный список доступных свойств объекта `group` смотрите в [справочнике API](groups/configuration_properties.md).

- **объекты дорожки и её ячейки**

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template"
        },
        "layout": [
            [1, 2, 3, 4]
        ],
        "subHeaderCols": {
            "headers": [
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    },
   // настройка ячейки дорожки
    {
        "id": 1,
        "type": "$sgroup",
        "groupChildren": ["s1"],
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    },
   // настройка фигуры для добавления в ячейку
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    }
];
~~~

Полный список доступных свойств конфигурации объектов `swimlane` и его ячеек смотрите в [справочнике API](swimlanes/configuration_properties.md).

## Работа с данными Diagram в режиме PERT {#working-with-diagram-data-in-the-pert-mode}

Работа с Diagram в режиме PERT имеет следующие особенности:

- [данные, загружаемые в Diagram](#data-structure-of-diagram-in-the-pert-mode), имеют структуру данных DHTMLX Gantt
- при работе с данными в Diagram они обрабатываются через [Data Collection](/api/data_collection/) так же, как и данные в других режимах Diagram
- [экспортируемые данные Diagram](#saving-and-restoring-state) имеют структуру данных DHTMLX Gantt

### Структура данных Diagram в режиме PERT {#data-structure-of-diagram-in-the-pert-mode}

Структура данных Diagram в режиме PERT совпадает со [структурой данных DHTMLX Gantt](https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#json), что упрощает интеграцию и обмен данными между компонентами. Когда набор данных Gantt загружается в Diagram в режиме PERT, он автоматически располагает задачи и проекты на основе связей между ними. Есть массивы `data` (для фигур: "task", "milestone", "project") и `links` (для связей между фигурами):

~~~jsx
{
    data: object[]; // массив фигур (задачи, вехи, проекты)
    links: object[] // массив связей между фигурами
};
~~~

Такая структура позволяет обрабатывать фигуры и их связи независимо друг от друга. [Ознакомьтесь с важными замечаниями о работе со связями](#processing-links).

Diagram в режиме PERT поддерживает следующие типы фигур и связей:

- **объекты проектов**

~~~jsx {3-4}
const dataset = {
    data: [
        // настройка фигуры проекта
        { id: "1", text: "Project #1", type: "project", parent: null },
        // настройка фигур задач
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // настройка объекта связи
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

Полный список доступных свойств конфигурации объекта `project` смотрите в [справочнике API](groups/configuration_properties.md#properties-specific-for-project-object).

- **объекты задач**

~~~jsx {5-9}
const dataset = {
    data: [
        // настройка фигуры проекта
        { id: "1", text: "Project #1", type: "project", parent: null },
        // настройка фигур задач
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // настройка объектов связей
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

Полный список доступных свойств конфигурации объекта `task` смотрите в [справочнике API](shapes/configuration_properties.md#properties-specific-for-task-shapes).

- **объекты вех**

~~~jsx {7-8}
const dataset = {
    data: [
        // настройка фигуры проекта
        { id: "1", text: "Project #1", type: "project", parent: null },
        // настройка фигур задач
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        // настройка фигуры вехи
        { id: "1.2", text: "Task #2", parent: "1", type: "milestone", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        //  настройка объекта связи
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

Полный список доступных свойств конфигурации объекта `milestone` смотрите в [справочнике API](shapes/configuration_properties.md#properties-specific-for-milestone-shapes).

- **объекты связей**

~~~jsx {11-16}
const dataset = {
    data: [
        // настройка фигуры проекта
        { id: "1", text: "Project #1", type: "project", parent: null },
        // настройка фигур задач
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // настройка объектов связей
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

Полный список доступных свойств конфигурации объекта `link` смотрите в [справочнике API](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode).

#### Обработка связей {#processing-links}

:::info важно
Обратите внимание, что Diagram в режиме PERT поддерживает только связи типа `type: "0"` ("finish" -> "start"). Все остальные [типы связей, используемые в диаграмме DHTMLX Gantt](https://docs.dhtmlx.com/gantt/desktop__link_properties.html), также будут обрабатываться как `type: "0"`.
:::

:::tip
Обратите внимание, что, поскольку идентификаторы элементов в коллекции данных Diagram должны быть уникальными, при загрузке данных или добавлении новой связи к существующему идентификатору связи добавляется префикс `$link`.

Например:

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // будет доступен в диаграмме как "$link:1"
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### Особенности загрузки данных в режиме PERT {#specificity-of-data-loading-in-the-pert-mode}

Следуйте приведённым ниже рекомендациям, чтобы избежать ошибок и корректно отобразить Diagram:

- **Отсутствие циклических зависимостей**. Циклы между задачами, проектами, связями и смешанными элементами не поддерживаются. Если обнаруживается циклическая зависимость, появится исключение.
- **Связи между родителем и дочерними элементами не допускаются**. Прямые связи между родительским элементом (например, проектом) и его дочерними элементами не разрешены. Такие связи будут автоматически удалены в процессе обработки данных.
- **Избегайте пересекающихся связей**. Сведите количество пересекающихся связей к минимуму, поскольку они могут усложнить диаграмму и снизить её читаемость.
- **Последовательная обработка данных**. Данные обрабатываются в порядке поступления, что может повлиять на расположение элементов. Указывайте данные в логическом порядке, чтобы добиться наилучшего результата.
- **Последовательность задач**. Используйте линейные или последовательные связи между задачами и проектами, чтобы диаграмма оставалась понятной и не возникало визуального беспорядка.

Приведённые выше правила предназначены для создания чистых, ациклических графов, пригодных для PERT-анализа. Если данные нарушают эти правила, Diagram может автоматически исправить их (например, удалив недопустимые связи). Однако лучше проверить входные данные заранее.

### Отображение задач Gantt с несвязанными дочерними элементами в Diagram {#rendering-gantt-tasks-with-not-connected-children-in-the-diagram}

Обратите внимание, что элементы Gantt с `type: "task"` могут иметь дочерние элементы, визуально не связанные с родительской задачей. Такие связи не будут отображены в Diagram. Чтобы такие элементы визуально отображались в одном проекте, вы можете:

- либо назначить `type:"project"` родительскому элементу при загрузке данных в Diagram
- либо назначить id *родительского проекта* такой задачи её дочерним элементам

Например:

~~~jsx
{
    data: [
        { id: "1", type: "project" },
        { id: "1.1", type: "task", parent: "1" },
        { id: "1.1.1", type: "task", parent: "1.1" }
    ]
}
~~~

В приведённом выше примере:

- Элемент "1.1" не является проектом и отображается как задача.
- Поскольку элемент "1.1.1" связан с родителем "1.1", который не является проектом, он будет отображён в неверном месте.
- Чтобы элементы "1.1" и "1.1.1" визуально отображались в одном проекте:
    - либо назначьте id родительского проекта элемента "1.1" элементу "1.1.1" (используя параметр `parent: "1"`):
    ~~~jsx
    { id: "1.1.1", type: "task", parent: "1" }
    ~~~
    - либо используйте тип `"project"` вместо типа `"task"` для родительского элемента "1.1":
    ~~~jsx
     { id: "1.1", type: "project", parent: "1" }
    ~~~

## Внешняя загрузка данных {#external-data-loading}

Чтобы загрузить данные из внешнего файла, используйте метод [`load()`](api/data_collection/load_method.md). В качестве параметра он принимает URL файла с данными:

~~~jsx
diagram.data.load("../common/data.json");
~~~

Компонент выполнит AJAX-запрос и будет ожидать, что удалённый URL предоставит корректные данные в формате JSON.

Загрузка данных выполняется асинхронно, поэтому любой код, который должен выполниться после загрузки, нужно обернуть в промис:

~~~jsx
diagram.data.load("/some/data").then(() => {
   diagram.selection.add("123");
});
~~~

**Связанный пример**: [Diagram. Данные. Загрузка данных](https://snippet.dhtmlx.com/09isp2d8)

## Загрузка из локального источника {#loading-from-a-local-source}

Чтобы загрузить данные из локального источника данных, используйте метод [`parse()`](api/data_collection/parse_method.md). В качестве параметров нужно передать [заранее подготовленный набор данных](#preparing-data-to-load) и, при необходимости, DataDriver или тип данных ("json" (по умолчанию), "csv", "xml"):

~~~jsx
diagram.data.parse(data, driver);
~~~

**Связанный пример**: [Diagram. Режим по умолчанию. Широкая блок-схема](https://snippet.dhtmlx.com/4d4k3o8p)

### Загрузка данных в редактор {#loading-data-into-the-editor}

Чтобы загрузить набор данных в редактор, используйте метод [parse()](api/diagram_editor/editor/methods/parse_method.md) редактора.

~~~jsx
editor.parse(data);
~~~

**Связанный пример**: [Diagram editor. Режим по умолчанию. Базовая инициализация](https://snippet.dhtmlx.com/xshe9ut7)

## Сохранение и восстановление состояния {#saving-and-restoring-state}

Чтобы сохранить текущее состояние диаграммы, используйте метод [`serialize()`](api/data_collection/serialize_method.md). В зависимости от режима Diagram он преобразует данные диаграммы в:

- для режимов Diagram по умолчанию, org chart и mindmap — в массив объектов, где каждый объект содержит конфигурацию отдельной фигуры
- для режима Diagram PERT — в объект с массивом объектов `data` (для фигур: `"task"`, `"milestone"`, `"project"`) и массивом объектов `links` (для связей между фигурами).

~~~jsx
const state = diagram1.data.serialize();
~~~

Обратите внимание, что для режима Diagram PERT объекты *links* в экспортируемом объекте данных будут иметь [те же типы, что и в диаграмме DHTMLX Gantt](https://docs.dhtmlx.com/gantt/desktop__link_properties.html). Это означает, что если тип связи в данных Diagram совпадает с одним из типов связей Gantt, он останется прежним при сериализации. Если тип связи не указан или задан иначе (например, `type: "line"`), он будет преобразован в `type: "0"`.

Затем вы можете разобрать данные, сохранённые в этом состоянии, в другую диаграмму. Например:

~~~jsx
// создание новой диаграммы
const diagram2 = new dhx.Diagram("diagram_container");
// разбор состояния diagram1 в diagram2
diagram2.data.parse(state);
~~~

## Импорт данных в редактор {#importing-data-into-the-editor}

Если вы используете диаграмму вместе с редактором, вы можете импортировать данные из диаграммы в редактор с помощью метода [import()](api/diagram_editor/editor/methods/import_method.md) объекта editor:

~~~jsx
function runEditor() {
    expand();
    editor.import(diagram);
}
~~~

**Связанный пример**: [Diagram. Режим по умолчанию. Широкая блок-схема](https://snippet.dhtmlx.com/4d4k3o8p)

Состояние диаграммы будет импортировано в редактор при его запуске.
