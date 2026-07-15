---
sidebar_label: properties
title: Свойство properties компонента Editbar
description: Вы можете ознакомиться со свойством properties компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# properties

### Описание {#description}

@short: Необязательно. Набор конфигураций, которые изменяют элементы управления для элементов Diagram (фигур, групп, дорожек и т. д.)

:::info
Конфигурация `properties` позволяет выполнять следующие действия:
- изменять элементы управления Editbar для всех или отдельных элементов Diagram на основе [**Базовых элементов управления**](api/diagram_editor/editbar/basic_controls_overview.md) и/или [**Сложных элементов управления**](api/diagram_editor/editbar/complex_controls_overview.md)
- применять пользовательские элементы управления Editbar, заданные с помощью свойства [`controls`](api/diagram_editor/editbar/config/controls_property.md), к элементам Diagram
- задавать условия применения элемента управления Editbar (пользовательского или стандартного) к элементам Diagram

Подробнее о настройке см. руководство [**Настройка Editbar**](guides/diagram_editor/editbar.md)!
:::

### Использование {#usage}

~~~jsx
properties?: {
    [type: string]: object[] | function, // пользовательские конфигурации для элементов управления, применяемых к элементам диаграммы
};
~~~

### Параметры {#parameters}

- `type` - имя элемента Diagram или группы элементов
    - `object` - объект конфигурации элемента Diagram

    или

    - `function` - колбек, который должен возвращать массив объектов с конфигурацией элементов управления элемента Diagram. Функция вызывается с объектом, включающим следующие параметры:
        - `item` - (необязательно) объект выбранного элемента
        - `editor` - (обязательно) объект Diagram Editor

Вы можете настроить элементы управления Editbar для отдельного элемента Diagram, например `rectangle`, `circle`, `card` и т. д.:

~~~jsx
properties: {
    // изменение элементов управления Editbar для отдельных элементов (фигур)
    rectangle: [], // настройка элементов управления для типа "rectangle"
    circle: [], // настройка элементов управления для типа "circle"
    card: [], // настройка элементов управления для типа "card"
    estimate: [], // настройка элементов управления для пользовательского типа "estimate"
    // другие элементы
}
~~~

Вы также можете настроить элементы управления Editbar для отдельной группы элементов Diagram. Для настройки групп предусмотрены следующие служебные свойства:

- [`$default`](guides/diagram_editor/editbar.md#configure-editbar-for-the-grid-area) - позволяет настраивать элементы управления Editbar, если не выбран ни один элемент или выбрано несколько элементов
- [`$shape`](guides/diagram_editor/editbar.md#configure-editbar-for-shapes) - позволяет настраивать элементы управления Editbar для всех фигур, включая пользовательские
- [`$group`](guides/diagram_editor/editbar.md#configure-editbar-for-group-elements) - позволяет настраивать элементы управления Editbar для всех элементов с типом "group"
- [`$swimlane`](guides/diagram_editor/editbar.md#configure-editbar-for-swimlanes) - позволяет настраивать элементы управления Editbar для всех элементов с типом "swimlane"
- [`$line`](guides/diagram_editor/editbar.md#configure-editbar-for-lines) - позволяет настраивать элементы управления Editbar для всех элементов с типом "line"
- [`$lineTitle`](guides/diagram_editor/editbar.md#configure-editbar-for-line-titles) - позволяет настраивать элементы управления Editbar для всех элементов с типом "lineTitle"

~~~jsx
properties: {
    $default: [],
    $shape: [],
    $group: [],
    $swimlane: [],
    $line: [],
    $lineTitle: [],
    // ... другие параметры
}
~~~

### Пример {#example}

~~~jsx {10-44}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // отображает Editbar по умолчанию
        // или настройте Editbar с помощью объекта
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            properties: {
                $shape: ({ item, editor }) => {
                    const controls = [
                        { type: "position" },
                        { type: "size" }
                    ];
                    if (item.hasOwnProperty("title")) {
                        controls.push({ type: "input", key: "title", label: "Title", wrap: true });
                    }
                    if (item.hasOwnProperty("text")) {
                        controls.push({ type: "textarea", key: "text", height: 200, label: "Text", wrap: true });
                    }
                    if (item.hasOwnProperty("img")) {
                        controls.push({ type: "avatar", key: "img", label: "Image", wrap: true });
                    }
                    return controls;
                },
                $group: [
                    {
                        type: "arrange",
                        $properties: {
                            angle: { hidden: true }
                        }
                    },
                    { type: "header" },
                    {
                        type: "border",
                        $properties: {
                            stroke: { key: ["style", "stroke"] },
                            strokeType: { hidden: true },
                            strokeWidth: { key: ["style", "strokeWidth"], width: "85%" }
                        }
                    }
                ]
            }
        }
    }
});
~~~

**Журнал изменений**: Свойство добавлено в v6.0

**Полезная статья:** [**Настройка Editbar**](guides/diagram_editor/editbar.md)

**Связанный пример:** [Diagram Editor. Режим по умолчанию. Настройка editbar. Добавлен счётчик фигур](https://snippet.dhtmlx.com/ealq0m4l?mode=wide)
