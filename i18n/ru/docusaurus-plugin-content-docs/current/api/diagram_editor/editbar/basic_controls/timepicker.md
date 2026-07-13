---
sidebar_label: Timepicker
title: Основные элементы управления Editbar - Timepicker
description: Изучите элемент управления Timepicker панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Timepicker

@short: Базовый элемент управления для выбора значения времени путём перемещения ползунков вдоль шкал или непосредственного ввода значений часов и минут в соответствующие поля.

![Элемент управления Timepicker](/img/editbar-basic-controls/timepicker.png)

## Использование {#usage}

~~~jsx
{
    type: "timepicker",
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    controls?: boolean, // по умолчанию false
    icon?: string,
    placeholder?: string,
    timeFormat?: 12 | 24, // по умолчанию 24
    valueFormat?: "string" | "timeObject", // по умолчанию "string"

    // для `wrap:true` ознакомьтесь со свойствами label компонента Fieldset
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

- `type` - (обязательный) тип элемента управления. Установите значение `"timepicker"`
- `key` - (необязательный) имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (необязательный) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `css` - (необязательный) добавляет стилевые классы к элементу управления
- `hidden` - (необязательный) определяет, скрыт ли элемент управления. По умолчанию *false*
- `disabled` - (необязательный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `width` - (необязательный) ширина элемента управления. По умолчанию `"content"`
- `height` - (необязательный) высота элемента управления. По умолчанию `"content"`
- `padding` - (необязательный) задаёт отступ между ячейкой и границей элемента управления Timepicker
- `controls` - (необязательный) определяет, оснащён ли timepicker кнопками Close и Save. По умолчанию *false*
- `icon` - (необязательный) CSS-класс иконки из используемого шрифта иконок
- `placeholder` - (необязательный) подсказка для поля ввода
- `timeFormat` - (необязательный) определяет, какой формат часов активирован: 12-часовой или 24-часовой. Установите значение *12* или *24* соответственно. По умолчанию *24*
- `valueFormat` - (необязательный) определяет формат значения, применяемого при работе с событиями элемента управления timepicker: `"string"` | `"timeObject"`. По умолчанию `"string"`
- `label` - (необязательный) задаёт метку для элемента управления
- `labelWidth` - (необязательный) задаёт ширину метки элемента управления
- `labelPosition` - (необязательный) определяет положение метки: `"left"` | `"top"`. По умолчанию `"top"`

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание, что мы настоятельно не рекомендуем переопределять служебные свойства и методы для стандартных типов элементов управления, так как это может нарушить их функциональность.
:::

- `$on` - (необязательный) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - функция обратного вызова, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-timepicker-events/)
- `$handler` - (необязательный) - функция обратного вызова, которая позволяет обрабатывать действия при возникновении событий `change` и `input` элемента управления [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form, на основе которого построен компонент
        - `value` - новое значение элемента управления [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form
- `$setValue` - (необязательный) - функция обратного вызова, которая позволяет задавать значение элемента управления [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form, на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - функция обратного вызова, которая позволяет задавать структуру элемента управления. Возвращает конфигурацию элемента управления [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {8-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    {
                        type: "timepicker",
                        key: "time",
                        label: "Select time",
                        controls: true
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "time": "14:00" },
    { "id": "shape_3", "parent": "shape_1", "time": "18:30" }
]);
~~~
