---
sidebar_label: Checkbox
title: Базовые элементы управления Editbar - Checkbox
description: Ознакомьтесь с элементом управления Checkbox панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

# Checkbox

@short: Базовый элемент управления для отображения заданного значения или изменения его на противоположное.

![Элемент управления Checkbox](/img/editbar-basic-controls/checkbox.png)

## Использование {#usage}

~~~jsx
{
    type: "checkbox",
    key?: string | string[],
    text?: string,
    value?: string,

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

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

Этот элемент управления можно использовать как со значением типа *boolean*, так и со значением типа *string*, если указано свойство `value`. [Ознакомьтесь с примером ниже](#example), чтобы понять принцип работы.

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"checkbox"`
- `key` - (необязательный) имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `text` - (необязательный) текстовое значение элемента управления. Отображается справа от элемента управления
- `value` - (необязательный) значение элемента Checkbox
- `css` - (необязательный) добавляет CSS-классы к элементу управления
- `disabled` - (необязательный) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `hidden` - (необязательный) определяет, скрыт ли элемент Checkbox. По умолчанию — *false*
- `height` - (необязательный) высота элемента управления. По умолчанию — `"content"`
- `width` - (необязательный) ширина элемента управления. По умолчанию — `"content"`
- `padding` - (необязательный) задает отступ между ячейкой и рамкой элемента управления Checkbox
- `label` - (необязательный) задает подпись элемента управления
- `labelPosition` - (необязательный) определяет положение подписи: `"left"` | `"top"`. По умолчанию — `"top"`
- `labelWidth` - (необязательный) задает ширину подписи элемента управления

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может привести к нарушению их работы.
:::

- `$on` - (необязательный) - позволяет задать слушатель события. Объект содержит следующие свойства:
    - `eventName`  - колбэк-функция, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) виджета Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-checkbox-events/)
- `$handler` - (необязательный) - колбэк-функция, которая позволяет обрабатывать действия при возникновении события `change` элемента управления [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) виджета Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) виджета Form, на основе которого создан компонент
        - `value` - новое значение элемента управления [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) виджета Form
- `$setValue` - (необязательный) - колбэк-функция, которая позволяет задать значение элемента управления [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) виджета Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) виджета Form, на основе которого создан компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - колбэк-функция, которая позволяет задать структуру элемента управления. Возвращает конфигурацию элемента управления [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) виджета Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-17}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkbox",
                        label: "String value",
                        key: "other",
                        value: "enable"
                    },
                    {
                        type: "checkbox",
                        label: "Boolean value",
                        key: "fixed"
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "type": "rectangle", "other": "", "fixed": false },
    { "type": "rectangle", "other": "enable", "fixed": true, "x": 400 }
]);
~~~
