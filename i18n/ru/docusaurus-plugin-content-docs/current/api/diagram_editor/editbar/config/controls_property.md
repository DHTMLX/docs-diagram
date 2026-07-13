---
sidebar_label: controls
title: Свойство controls Editbar
description: Узнайте больше о свойстве controls компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите гайды для разработчиков и справочник API, попробуйте примеры кода и демонстрации в реальном времени, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# controls

### Описание {#description}

@short: Необязательный параметр. Набор конфигураций, определяющих один или несколько пользовательских элементов управления

:::info
Свойство `controls` позволяет создавать пользовательские элементы управления `Editbar` на основе [**Базовых элементов управления**](api/diagram_editor/editbar/basic_controls_overview.md) и/или [**Сложных элементов управления**](api/diagram_editor/editbar/complex_controls_overview.md). Используйте свойство [`properties`](api/diagram_editor/editbar/config/properties_property.md), чтобы применять пользовательские элементы управления к нужным элементам (фигурам, группам, дорожкам и т. д.).

Подробнее о настройке читайте в гайде [**Конфигурация Editbar**](guides/diagram_editor/editbar.md)!
:::

:::important
Не рекомендуется переопределять элементы управления по умолчанию при создании пользовательского элемента управления. Используйте уникальное имя для каждого пользовательского элемента управления!
:::

### Использование {#usage}

~~~jsx
controls?: {
    [type: string]: object, // пользовательский элемент управления
};
~~~

### Параметры {#parameters}

- `type` - имя типа пользовательского элемента управления
    - `object` - конфигурационный объект нового элемента управления на основе [**Базовых элементов управления**](api/diagram_editor/editbar/basic_controls_overview.md) и/или [**Сложных элементов управления**](api/diagram_editor/editbar/complex_controls_overview.md)

~~~jsx
controls: {
      estimate: { /*...*/ }, // создание нового элемента управления "estimate" с пользовательскими конфигурациями
      // другой элемент управления
}
~~~

### Пример {#example}

~~~jsx {16-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // отображает Editbar по умолчанию
        // или настройте Editbar через объект
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            properties: {
                $shape: [
                    { type: "estimate" }, // применение пользовательского элемента управления "estimate"
                    { type: "name" } // применение пользовательского элемента управления "name"
                ]
            },
            controls: {
                // создание пользовательского элемента управления "estimate"
                estimate: {
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" }
                    ]
                },
                // создание пользовательского элемента управления "name"
                name: { type: "input", label: "Name", key: "name" }
            }
        }
    }
});
~~~

**Журнал изменений**: Свойство добавлено в v6.0

**Полезная статья:** [**Конфигурация Editbar**](guides/diagram_editor/editbar.md)

**Связанный пример:** [Diagram Editor. Стандартный режим. PERT-диаграмма с легендой](https://snippet.dhtmlx.com/w8mrh3ay?mode=wide)
