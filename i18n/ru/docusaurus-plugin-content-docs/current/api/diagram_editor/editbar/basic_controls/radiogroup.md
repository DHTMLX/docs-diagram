---
sidebar_label: RadioGroup
title: Базовые элементы управления Editbar - RadioGroup
description: Изучите элемент управления RadioGroup панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# RadioGroup

@short: Базовый элемент управления для создания групп радиокнопок.

![Элемент управления RadioGroup](/img/editbar-basic-controls/radiogroup.png)

## Использование {#usage}

~~~jsx
{
    type: "radiogroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content",
        padding?: string | number,
        width?: string | number | "content"
    },
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false

    css?: string,
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

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

Конфигурационный объект радиокнопки внутри RadioGroup:

~~~jsx
{
    value: string,
    text?: string,

    disabled?: boolean,
    hidden?: boolean,
    css?: string,
    height?: string | number | "content",
    width?: string | number | "content",
    padding?: string | number
}
~~~

## Описание {#description}

### Свойства RadioGroup {#radiogroup-properties}

#### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"radioGroup"`
- `key` - (опциональный) имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (опциональный) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `options` - (обязательный) объект с параметрами RadioGroup. Объект может содержать следующие атрибуты:
    - `rows` - (опциональный) располагает [радиокнопки](#radio-button-properties) внутри элемента управления RadioGroup вертикально
    - `cols` - (опциональный) располагает [радиокнопки](#radio-button-properties) внутри элемента управления RadioGroup горизонтально
    - `css` - (опциональный) добавляет классы стилей к RadioGroup
    - `height` - (опциональный) высота RadioGroup
    - `padding` - (опциональный) задаёт отступ между ячейкой и границей RadioGroup
    - `width` - (опциональный) ширина RadioGroup
- `disabled` - (опциональный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `hidden` - (логический) определяет, скрыт ли RadioGroup. По умолчанию *false*
- `css` - (опциональный) добавляет классы стилей к элементу управления
- `height` - (опциональный) высота элемента управления. По умолчанию `"content"`
- `width` - (опциональный) ширина элемента управления. По умолчанию `"content"`
- `padding` - (опциональный) задаёт отступ между ячейкой и границей элемента управления RadioGroup
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
            - `control` - элемент управления Form [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/)
            - `editor` - объект Diagram Editor
            - `id` - идентификатор элемента Diagram
        - `arguments` - (опциональный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-radiogroup-events/)
- `$handler` - (опциональный) - колбек, позволяющий обрабатывать действия при возникновении события `change` элемента управления Form [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - идентификатор элемента Diagram
        - `key` - имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/), на основе которого построен компонент
        - `value` - новое значение элемента управления Form [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/)
- `$setValue` - (опциональный) - колбек, позволяющий задавать значение элемента управления Form [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/), на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (опциональный) - колбек, позволяющий задавать структуру элемента управления. Возвращает конфигурацию элемента управления Form [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/). Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

### Свойства радиокнопки {#radio-button-properties}

- `value` - (обязательный) значение радиокнопки
- `text` - (опциональный) текстовая подпись радиокнопки
- `disabled` - (опциональный) определяет, включена (*false*) или отключена (*true*) радиокнопка. По умолчанию *false*
- `hidden` - (опциональный) определяет, скрыта ли радиокнопка. По умолчанию *false*
- `css` - (опциональный) добавляет классы стилей к элементу управления
- `height` - (опциональный) высота элемента управления. По умолчанию `"content"`
- `width` - (опциональный) ширина элемента управления. По умолчанию `"content"`
- `padding` - (опциональный) задаёт отступ между ячейкой и границей радиокнопки

## Пример {#example}

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "radioGroup",
                        key: "textAlign",
                        label: "Text align",
                        wrap: true,
                        options: {
                            rows: [
                                {
                                    text: "Left",
                                    value: "left"
                                },
                                {
                                    text: "Center",
                                    value: "center"
                                },
                                {
                                    text: "Right",
                                    value: "right"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
});
~~~
