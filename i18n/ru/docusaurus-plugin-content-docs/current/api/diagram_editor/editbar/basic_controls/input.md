---
sidebar_label: Input
title: Базовые элементы управления Editbar - Input
description: Изучите элемент управления Input панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Input

@short: Базовый элемент управления с полем ввода для набора текста.

![Элемент управления Input](/img/editbar-basic-controls/input.png)

## Использование {#usage}

~~~jsx
{
    type: "input",
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    icon?: string,
    inputType?: "text" | "password" | "number", // по умолчанию "text"
    max?: number | string,
    maxlength?: number | string,
    min?: number | string,
    minlength?: number | string,
    placeholder?: string,
    readOnly?: boolean, // по умолчанию false

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

- `type` - (обязательный) тип элемента управления. Установите значение `"input"`
- `key` - (опциональный) имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (опциональный) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `css` - (опциональный) добавляет классы стилей к элементу управления
- `disabled` - (опциональный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `hidden` - (опциональный) определяет, скрыт ли элемент управления. По умолчанию *false*
- `height` - (опциональный) высота элемента управления. По умолчанию `"content"`
- `width` - (опциональный) ширина элемента управления. По умолчанию `"content"`
- `padding` - (опциональный) задаёт отступ между ячейкой и границей элемента управления Input
- `icon` - (опциональный) класс CSS [иконки](https://docs.dhtmlx.com/suite/helpers/icon/) из используемого шрифта иконок
- `inputType` - (опциональный) задаёт тип поля ввода: `"text"` | `"password"` | `"number"`. По умолчанию `"text"`
Используйте значение `"password"`, чтобы задать поле для ввода пароля
- `max` - (опциональный) - [максимальное значение, допустимое в поле ввода](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values). Атрибут работает только с типом поля ввода: *"number"*
- `maxlength` - (опциональный) максимальное [количество символов, допустимое в поле ввода](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters). Атрибут работает со следующими типами поля ввода: *"text", "password"*
- `min` - (опциональный) [минимальное значение, допустимое в поле ввода](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values). Атрибут работает только с типом поля ввода: *"number"*
- `minlength` - (опциональный) минимальное [количество символов, допустимое в поле ввода](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters). Атрибут работает со следующими типами поля ввода: *"text", "password"*
- `placeholder` - (опциональный) подсказка для поля ввода
- `readOnly` - (опциональный) определяет, доступно ли поле ввода только для чтения. По умолчанию *false*
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
            - `control` - элемент управления Form [Input](https://docs.dhtmlx.com/suite/form/input/)
            - `editor` - объект Diagram Editor
            - `id` - идентификатор элемента Diagram
        - `arguments` - (опциональный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-input-events/)
- `$handler` - (опциональный) - функция обратного вызова, позволяющая обрабатывать действия при возникновении событий `change` и `input` элемента управления Form [Input](https://docs.dhtmlx.com/suite/form/input/) и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - идентификатор элемента Diagram
        - `key` - имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Input](https://docs.dhtmlx.com/suite/form/input/), на основе которого построен компонент
        - `value` - новое значение элемента управления Form [Input](https://docs.dhtmlx.com/suite/form/input/)
- `$setValue` - (опциональный) - функция обратного вызова, позволяющая задавать значение элемента управления Form [Input](https://docs.dhtmlx.com/suite/form/input/) при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Input](https://docs.dhtmlx.com/suite/form/input/), на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (опциональный) - функция обратного вызова, позволяющая задавать структуру элемента управления. Возвращает конфигурацию элемента управления Form [Input](https://docs.dhtmlx.com/suite/form/input/). Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-22}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "input",
                        inputType: "text",
                        key: "text",
                        label: "Input with a string value",
                        placeholder: "Enter a string value"
                    },
                    {
                        type: "input",
                        inputType: "number",
                        key: "x",
                        label: "Input with a number value",
                        placeholder: "Enter a number value",
                        min: 0,
                        max: 100,
                    }
                ]
            }
        }
    }
});
~~~
