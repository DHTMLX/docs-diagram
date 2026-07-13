---
sidebar_label: Datepicker
title: Базовые элементы управления Editbar - Datepicker
description: Изучите элемент управления Datepicker панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Datepicker

@short: Базовый элемент управления для выбора даты.

![Элемент управления Datepicker](/img/editbar-basic-controls/datepicker.png)

## Использование {#usage}

~~~jsx
{
    type: "datepicker",
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    date?: Date | string,
    dateFormat?: string, // по умолчанию "%d/%m/%y"
    disabledDates?: (date: Date) => boolean,
    icon?: string,
    mark?: (date: Date) => string,
    mode?: "calendar" | "month" | "year", // по умолчанию "calendar"
    placeholder?: string,
    thisMonthOnly?: boolean, // по умолчанию false
    timeFormat?: 24 | 12, // по умолчанию 24
    timePicker?: boolean, // по умолчанию false
    valueFormat?: "string" | "Date", // по умолчанию "string"
    weekNumbers?: boolean, // по умолчанию false
    weekStart?: "saturday" | "sunday" | "monday", // по умолчанию "sunday"

    // для `wrap:true` см. свойства label элемента Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // по умолчанию "top"

    // служебные свойства и методы
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"datepicker"`
- `key` - (опциональный) имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (опциональный) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `css` - (опциональный) добавляет строку классов стилей к элементу управления
- `disabled` - (опциональный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `hidden` - (опциональный) определяет, скрыт ли элемент управления. По умолчанию *false*
- `height` - (опциональный) высота элемента управления. По умолчанию `"content"`
- `width` - (опциональный) ширина элемента управления. По умолчанию `"content"`
- `padding` - (опциональный) задаёт отступ между ячейкой и границей элемента управления Datepicker
- `date` - (опциональный) определяет дату, которая будет открыта при создании календаря
- `dateFormat` - (опциональный) определяет формат дат в календаре. По умолчанию *"%d/%m/%y"*. Формат даты должен включать разделители (пробел или символ), иначе будет выброшена ошибка
- `disabledDates` - (опциональный) позволяет отключать отдельные интервалы дат, при этом подписи дней затемняются
- `icon` - (опциональный) класс CSS иконки из используемого шрифта иконок
- `mark` - (опциональный) позволяет добавлять класс CSS к определённым дням
- `mode` - (опциональный) задаёт режим отображения календаря: `"calendar"` | `"month"` | `"year"`. По умолчанию `"calendar"`
- `placeholder` - (опциональный) подсказка для поля ввода
- `thisMonthOnly` - (опциональный) скрывает даты предыдущего/следующего месяца относительно текущего отображаемого
- `timeFormat` - (опциональный) определяет формат времени в timepicker, 12-часовой или 24-часовой: *12* | *24*. По умолчанию *24*
- `timePicker` - (опциональный) добавляет timepicker в календарь. По умолчанию *false*
- `valueFormat` - (опциональный) определяет формат значения, которое будет возвращено при получении текущего значения элемента управления: `"string"` | `"Date"`. По умолчанию `"string"`
- `weekNumbers` - (опциональный) определяет, отображать ли номера недель. По умолчанию *false*
- `weekStart` - (опциональный) задаёт первый день недели: `"saturday"` | `"monday"` | `"sunday"`. По умолчанию `"sunday"`
- `label` - (опциональный) задаёт подпись для элемента управления
- `labelWidth` - (опциональный) задаёт ширину подписи элемента управления
- `labelPosition` - (опциональный) определяет положение подписи: `"left"` | `"top"`. По умолчанию `"top"`

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: настоятельно рекомендуется не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может нарушить их работу.
:::

- `$on` - (опциональный) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - функция обратного вызова, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления Form [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/)
            - `editor` - объект Diagram Editor
            - `id` - идентификатор элемента Diagram
        - `arguments` - (опциональный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-datepicker-events/)
- `$handler` - (опциональный) - функция обратного вызова, позволяющая обрабатывать действия при возникновении событий `change` и `input` элемента управления формы и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - идентификатор элемента Diagram
        - `key` - имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/), на основе которого построен компонент
        - `value` - новое значение элемента управления Form [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/)
- `$setValue` - (опциональный) - функция обратного вызова, позволяющая задавать значение элемента управления Form [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/), на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (опциональный) - функция обратного вызова, позволяющая задавать структуру элемента управления. Возвращает конфигурацию элемента управления Form [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/). Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-21}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "datepicker",
                        key: "date_start",
                        label: "Date start",
                        wrap: true,
                    },
                    {
                        type: "datepicker",
                        key: "date_end",
                        label: "Date end",
                        wrap: true,
                        valueFormat: "Date",
                        timePicker: true,
                        weekStart: "monday"
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date },
    { "id": "shape_3", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date }
]);
~~~
