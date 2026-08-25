---
sidebar_label: Select
title: Базовые элементы управления Editbar - Select
description: Изучите элемент управления Select панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Select

@short: Базовый элемент управления, представляющий собой расширенное поле выбора с набором опций.

![Элемент управления Select](/img/editbar-basic-controls/select.png)

## Использование {#usage}

~~~jsx
{
    type: "select",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,
    icon?: string,

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

Конфигурационный объект опции внутри Select:

~~~jsx
{
    value: string | number,
    content: string,
    disabled?: boolean
}
~~~

## Описание {#description}

### Свойства Select {#select-properties}

#### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"select"`
- `options` - (обязательный) массив опций Select, каждая опция может быть задана как *строка* или как *объект* с набором пар `key:value` - [атрибуты опций и их значения](#option-properties)
- `key` - (опциональный) имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (опциональный) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `css` - (опциональный) добавляет классы стилей к элементу управления
- `disabled` - (опциональный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `hidden` - (логический) определяет, скрыт ли Select. По умолчанию *false*
- `height` - (опциональный) высота элемента управления. По умолчанию `"content"`
- `width` - (опциональный) ширина элемента управления. По умолчанию `"content"`
- `padding` - (опциональный) задаёт отступ между ячейкой и границей элемента управления Select
- `icon` - (опциональный) класс CSS [иконки](https://docs.dhtmlx.com/suite/helpers/icon/) из используемого шрифта иконок
- `label` - (опциональный) задаёт подпись для элемента управления
- `labelWidth` - (опциональный) задаёт ширину подписи элемента управления
- `labelPosition` - (опциональный) определяет положение подписи: `"left"` | `"top"`. По умолчанию `"top"`

#### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: настоятельно рекомендуется не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может нарушить их работу.
:::

- `$on` - (опциональный) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - колбек, который вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления Form [Select](https://docs.dhtmlx.com/suite/form/select/)
            - `editor` - объект Diagram Editor
            - `id` - идентификатор элемента Diagram
        - `arguments` - (опциональный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-select-events/)
- `$handler` - (опциональный) - колбек, позволяющий обрабатывать действия при возникновении события `change` элемента управления Form [Select](https://docs.dhtmlx.com/suite/form/select/) и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - идентификатор элемента Diagram
        - `key` - имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Select](https://docs.dhtmlx.com/suite/form/select/), на основе которого построен компонент
        - `value` - новое значение элемента управления Form [Select](https://docs.dhtmlx.com/suite/form/select/)
- `$setValue` - (опциональный) - колбек, позволяющий задавать значение элемента управления Form [Select](https://docs.dhtmlx.com/suite/form/select/) при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Select](https://docs.dhtmlx.com/suite/form/select/), на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (опциональный) - колбек, позволяющий задавать структуру элемента управления. Возвращает конфигурацию элемента управления Form [Select](https://docs.dhtmlx.com/suite/form/select/). Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

### Свойства опции {#option-properties}

- `value` - (обязательный) задаёт значение опции select
- `content` - (обязательный) содержимое, отображаемое в опции select
- `disabled` - (опциональный) определяет, включена (*false*) или отключена (*true*) опция. По умолчанию *false*

## Пример {#example}

~~~jsx {7-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "select",
                        label: "Position",
                        key: "position",
                        wrap: true,
                        options: [
                            "",
                            "Technical Director",
                            "Manager",
                            "QA Lead",
                            { value: 4, content: "Team Lead", disabled: true },
                            { value: 5, content: "Programmer" }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
