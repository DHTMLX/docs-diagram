---
sidebar_label: Swimlanes
title: Swimlanes
description: Вы можете узнать о Swimlanes в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и демонстрации в реальном времени, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Swimlanes {#swimlanes}

## Обзор Swimlane {#swimlane-overview}

Swimlane представляет собой прямоугольный элемент Diagram, состоящий из ячеек (или дорожек), расположенных вертикально или горизонтально. Каждая ячейка (*type: "$sgroup"*) может включать дочерние элементы, такие как фигуры или Groups.

:::note
Swimlanes доступны только в режиме по умолчанию для Diagram/Diagram Editor (type: `"default"`).
:::

<iframe src="https://snippet.dhtmlx.com/z6x5m3gb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

Swimlanes помогут визуализировать любой процесс (бизнес-процесс, производственный, сервисный или любой другой) или его отдельные части от начала до конца.

## Создание Swimlanes {#creating-swimlanes}

Чтобы создать Swimlane, укажите `type: "$swimlane"`  и определите структуру layout объекта Swimlane при подготовке набора данных для загрузки в Diagram:

~~~jsx
const data = [
    // настройка swimlane
    {
        type: "$swimlane",
        height: 500,
        width: 850,
        // layout swimlane должен содержать не менее одной ячейки
        layout: [
            [1] // ячейка с id:"1" и type:"$sgroup"
        ]
    }
];

// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

Приведённый выше пример кода показывает простейшую конфигурацию Swimlane с настройками по умолчанию (т.е. без заголовка и подзаголовка).

### Структура Swimlane {#swimlane-structure}

Структура Swimlane может быть весьма разной. Она определяется через свойство конфигурации [layout](swimlanes/configuration_properties.md) объекта Swimlane. Это свойство позволяет располагать ячейки Swimlane по строкам и столбцам.

Всё, что нужно сделать - указать массив с матрицей в качестве значения этого свойства. Матрица может быть как одним массивом:

~~~jsx
// swimlane с 3 столбцами
layout: [
    [1, 2, 3]
]
~~~

так и набором массивов, разделённых запятыми:

~~~jsx
// swimlane с 2 строками и 3 столбцами
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

где:

- каждая ячейка в layout имеет уникальный номер;
- количество массивов определяет количество строк (если массивов несколько, количество ячеек должно быть одинаковым во всех массивах);
- количество ячеек в массиве определяет количество столбцов.

### Свойства объекта Swimlane {#properties-of-a-swimlane-object}

Ознакомьтесь с [полным списком свойств конфигурации объекта Swimlane](swimlanes/configuration_properties.md), чтобы иметь возможность создавать различные Swimlanes с разными настройками в зависимости от ваших потребностей.

## Настройка ячейки Swimlane {#configuring-a-swimlane-cell}

При инициализации Swimlane на странице id ячейки Swimlane, а также её конфигурация, генерируются автоматически. Чтобы изменить конфигурацию ячейки по умолчанию, создайте объект ячейки, который должен включать атрибуты `type: "$sgroup"` и `id`, и укажите в нём необходимые настройки конфигурации:

~~~jsx
const data = [
    // настройка swimlane
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    },
    // настройка ячейки swimlane
    {
        type: "$sgroup",
        id: 3,
        style: {
            fill: "#D4DAE4"
        }
    }
];
~~~

### Свойства объекта ячейки {#properties-of-a-cell-object}

Ознакомьтесь с [полным списком свойств конфигурации ячейки Swimlane](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell).

## Группировка ячеек {#grouping-cells}

Если для каждой ячейки указан уникальный номер, все ячейки будут отрисованы с границами:

~~~jsx
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

![](/img/swimlane_cells.png)

При необходимости вы можете сгруппировать диапазон ячеек и убрать границу(ы) между ними. Для этого выберите любую ячейку из диапазона и замените уникальные номера ячейки(ек) из диапазона номером этой ячейки.<br/>
Ниже приведён пример группировки первых двух ячеек, расположенных в первой строке:

~~~jsx
layout: [
    [1, 1, 3],
    [4, 5, 6]
]
~~~

Результат будет выглядеть следующим образом:

![](/img/swimlane_merge_cell_row.png)

Ниже приведён пример группировки ячеек, расположенных во втором столбце:

~~~jsx
layout: [
    [1, 2, 3],
    [4, 2, 6]
]
~~~

Результат:

![](/img/swimlane_merge_cell_col.png)

**Связанный пример**:	[Редактор Diagram. Режим по умолчанию. Настройка столбцов и строк в Swimlanes](https://snippet.dhtmlx.com/uzx5ulal)

## Размеры Swimlane и её ячеек {#sizes-of-a-swimlane-and-its-cells}

Размер Swimlane определяется атрибутами конфигурации `width` и `height` Swimlane.

~~~jsx
const data = [
    // настройка swimlane
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    }
];
~~~

### Ширина ячейки {#cell-width}

Ширина ячейки зависит от ширины Swimlane, количества столбцов и высоты левого/правого заголовка и подзаголовка Swimlane. Например:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 3 столбца
            [1, 2, 3]
        ],
        header: {
            position: "left",
            height: 40
        },
        subHeaderRows: {
            enable: true,
            position: "left",
            height: 40
        }
    }
];
~~~

Ширина каждой ячейки может быть рассчитана как *(830-40-40)/3 = 250*.

### Высота ячейки {#cell-height}

Высота ячейки зависит от высоты Swimlane, количества строк и высоты верхнего/нижнего заголовка и подзаголовка Swimlane. Например:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 2 строки
            [1, 2, 3],
            [4, 5, 6]
        ],
        header: {
            position: "top",
            height: 40
        },
        subHeaderCols: {
            enable: true,
            position: "top",
            height: 40
        }
    }
];
~~~

Высота каждой ячейки может быть рассчитана как *(500-40-40)/2 = 210*.
