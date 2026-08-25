---
sidebar_label: Свойства линий
title: Свойства линий
description: Вы можете узнать о свойствах линий в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# Свойства линий {#line-properties}

:::note
Указывайте значения цвета в формате HEX.
:::

## Общие свойства {#common-properties}

### Использование {#usage}

~~~jsx
const data = [
    // объект линии
    {
        type: "line" | "dash",
        id?: string | number,
        from?: string | number,
        to?: string | number,
        connectType?: "straight" | "elbow" | "curved",
        strokeWidth?: number, // 2 по умолчанию
        stroke?: string
    },
    // другие объекты линий
]
~~~

### Описание {#description}

Каждый объект линии может включать следующие свойства:

- `type` - (обязательно) тип соединительной линии: "*line*" или "*dash*"
- `id` - (опционально) id соединителя
- `from` - (опционально) id родительской фигуры
- `to` - (опционально) id дочерней фигуры
- `connectType` - (опционально) тип соединения линии: ["straight"](/lines/#lines-in-the-default-mode), ["elbow"](/lines/#lines-in-the-org-chart-mode) (тип по умолчанию в режимах по умолчанию/организационной диаграммы), ["curved"](/lines/#lines-in-the-mindmap-mode) (тип по умолчанию в режиме ментальной карты)
- `strokeWidth` - (опционально) толщина линии, по умолчанию 2
- `stroke` - (опционально) цвет линии; по умолчанию "#2198F3" в режиме по умолчанию и "#CCC" в режимах организационной диаграммы/ментальной карты

## Свойства, специфичные для режима по умолчанию {#properties-specific-for-the-default-mode}

### Использование {#usage-1}

~~~jsx
const data = [
    // объект линии
    {
        // ... общие свойства
        forwardArrow?: string, // "filled" по умолчанию
        backArrow?: string, // "filled" по умолчанию
        fromSide?: "top" | "bottom" | "left" | "right" | "center",
        toSide?: "top" | "bottom" | "left" | "right" | "center",
        cornersRadius?: number,
        customGap?: number,
        points?: [
            { x: number, y: number, custom?: boolean },
            // другие объекты точек
        ]
    },
    // другие объекты линий
]
~~~

### Описание {#description-1}

При подготовке набора данных для линий, загружаемых в диаграмму в режиме по умолчанию, вы можете добавить следующие свойства в объект конфигурации линии:

- `forwardArrow` - (опционально) задаёт прямую стрелку соединителя и определяет тип стрелки (по умолчанию `"filled"`)
- `backArrow` - (опционально) задаёт обратную стрелку соединителя и определяет тип стрелки (по умолчанию `"filled"`)
- `fromSide` - (опционально) сторона фигуры, от которой начнётся соединение ("*top*", "*bottom*", "*left*","*right*", "*center*")
- `toSide` - (опционально) сторона фигуры, к которой будет присоединена другая фигура ("*top*", "*bottom*", "*left*", "*right*", "*center*")
- `cornersRadius` - (опционально) радиус скругления углов соединителя
- `customGap` - (опционально) задаёт расстояние от фигуры до прямоугольного изгиба соединительной линии
- `points` - (опционально) задаёт массив объектов точек для линии. Каждый объект содержит следующие свойства:
    - `x` - (обязательно) координата x точки
    - `y` - (обязательно) координата y точки
    - `custom` - (опционально) определяет, является ли точка фиксированной. Если *true*, положение точки можно изменить только после взаимодействия с ней

### Пример {#example}

~~~jsx
const data = [
    // настройка фигур
    { "id": 1, "x": 200, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 200, "y": 320, "text": "Call Client and \n set-up Appointment", "type": "process" },
    // настройка линий
    {
        "type": "line",
        "stroke": "#0AB169",
        "connectType": "straight",
        "from": 1,
        "to": 2,
        "fromSide": "bottom",
        "toSide": "top",
        "forwardArrow": "filled"
    }
];
~~~

## Свойства, специфичные для связей в режиме PERT {#properties-specific-for-links-in-the-pert-mode}

### Использование {#usage-2}

~~~jsx
const dataset = {
    data: [...], // массив фигур (задачи, вехи, проекты)
    links: [
        // объект связи
        {
            id?: string | number,
            source: string | number,
            target: string | number
        },
        // другие объекты связей
    ]
}
~~~

### Описание {#description-2}

При подготовке набора данных для связей, загружаемых в диаграмму в режиме PERT, вы можете добавить следующие свойства в объект конфигурации связи:

- `id` - (опционально) id соединителя связи
- `source` - (обязательно) id задачи, от которой начинается связь
- `target` - (обязательно) id задачи, которой заканчивается связь

:::info важно
Обратите внимание, что в диаграмме PERT поддерживаются только связи типа `type: "0"` ("finish" -> "start"). Все остальные [типы связей, используемые в диаграмме DHTMLX Gantt](https://docs.dhtmlx.com/gantt/desktop__link_properties.html), также будут обрабатываться как `type: "0"`.
:::

:::tip
Обратите внимание, что, поскольку id элементов в коллекции данных Diagram должны быть уникальными, при загрузке данных или добавлении новой связи к существующему id связи добавляется префикс `$link`.

Например:

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // будет доступна в диаграмме как "$link:1"
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### Пример {#example-1}

~~~jsx {11-16}
const dataset = {
    data: [
        // настройка объекта проекта
        { id: "1", text: "Project #1", type: "project", parent: null },
        // настройка объектов задач
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
};
~~~

**Журнал изменений**:

- Тип соединителей `links`, используемый в режиме PERT диаграммы Diagram, был добавлен в v6.1
- Свойство `title` объекта `line` устарело в v6.0

**Полезная статья**: [Настройка линий](/lines/)
