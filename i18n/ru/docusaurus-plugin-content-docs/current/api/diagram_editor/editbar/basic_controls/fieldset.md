---
sidebar_label: Fieldset
title: Базовые элементы управления Editbar - Fieldset
description: Изучите элемент управления Fieldset панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Fieldset

@short: Базовый элемент управления для создания сложных элементов управления с помощью параметров конфигурации Editbar [`controls`](api/diagram_editor/editbar/config/controls_property.md) или [`properties`](api/diagram_editor/editbar/config/properties_property.md).

![Элемент управления Fieldset](/img/editbar-basic-controls/fieldset.png)

## Использование {#usage}

~~~jsx
{
    type: "fieldset",

    compact?: boolean,
    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false

    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // по умолчанию "start"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // по умолчанию "left"

    rows?: object[],
    cols?: object[],

    $layout?: function
}
~~~

Свойства `rows` и `cols` могут содержать массив объектов указанных элементов управления или вложенную структуру, приведённую ниже:

~~~jsx
{
    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // по умолчанию "start"
    rows?: object[],
    cols?: object[]
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"fieldset"`
- `compact` - (опциональный) задаёт компактный режим, убирает отступы и рамку. По умолчанию *false*
- `disabled` - (опциональный) определяет, включена (*false*) или отключена (*true*) группа элементов управления. По умолчанию *false*
- `hidden` - (опциональный) определяет, скрыта ли группа элементов управления. По умолчанию *false*
- `css` - (опциональный) имя класса(ов) CSS, применяемого к группе элементов управления
- `width` - (опциональный) задаёт ширину группы элементов управления. По умолчанию `"content"`
- `height` - (опциональный) задаёт высоту группы элементов управления. По умолчанию `"content"`
- `padding` - (опциональный) задаёт отступ для содержимого внутри группы элементов управления
- `align` - (опциональный) задаёт выравнивание элементов управления внутри группы. По умолчанию `"start"`
- `label` - (опциональный) задаёт подпись для элемента управления
- `labelAlignment` - (опциональный) определяет положение подписи: `"left"` | `"right"` | `"center"`. По умолчанию `"left"`
- `rows` - (опциональный) располагает элементы управления внутри группы вертикально
- `cols` - (опциональный) располагает элементы управления внутри группы горизонтально

#### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: настоятельно рекомендуется не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может нарушить их работу.
:::

- `$layout` - (опциональный) - функция обратного вызова, позволяющая задавать структуру элемента управления. Возвращает конфигурацию элемента управления Form [Fieldset](https://docs.dhtmlx.com/suite/form/fieldset/). Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-28} title="Создание fieldset с помощью свойства properties"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "fieldset",
                        label: "Task details",
                        rows: [
                            { type: "input", key: "name", label: "Task name" },
                            { type: "input", key: "id", label: "ID", readOnly: true },
                            {
                                align: "between",
                                cols: [
                                    { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                    { type: "datepicker", key: "date_end", label: "Date end", width: "48%" },
                                ]
                            },
                            {
                                type: "combo",
                                key: "responsible",
                                label: "Responsible",
                                placeholder: "Select responsible",
                                options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {10-33} title="Создание сложного элемента управления с помощью свойства controls"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "details" }
                ]
            },
            controls: {
                details: {
                    type: "fieldset",
                    label: "Task details",
                    rows: [
                        { type: "input", key: "name", label: "Task name" },
                        { type: "input", key: "id", label: "ID", readOnly: true },
                        {
                            align: "between",
                            cols: [
                                { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                { type: "datepicker", key: "date_end", label: "Date end", width: "48%" }
                            ]
                        },
                        {
                            type: "combo",
                            key: "responsible",
                            label: "Responsible",
                            placeholder: "Select responsible",
                            options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                        }
                    ]
                }
            }
        }
    }
});
~~~
