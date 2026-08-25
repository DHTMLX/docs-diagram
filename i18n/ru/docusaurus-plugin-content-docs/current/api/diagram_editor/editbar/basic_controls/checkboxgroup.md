---
sidebar_label: CheckboxGroup
title: Базовые элементы управления Editbar - CheckboxGroup
description: Ознакомьтесь с элементом управления CheckboxGroup панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

# CheckboxGroup

@short: Базовый элемент управления для создания групп элементов Checkbox.

![Элемент управления CheckboxGroup](/img/editbar-basic-controls/checkboxgroup.png)

## Использование {#usage}

~~~jsx
{
    type: "checkboxGroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content", // по умолчанию "content"
        width?: string | number | "content", // по умолчанию "content"
        padding?: string | number,
    },
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    // при `wrap:true` см. свойства label для Fieldset
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

Объект конфигурации Checkbox внутри CheckboxGroup:

~~~jsx
{
    id: string,
    text: string,
    value?: string,

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number
}
~~~

Объекты с конфигурацией `checkbox` внутри элемента управления можно использовать как со значением типа *boolean*, так и со значением типа *string*, если указано свойство `value`. [Ознакомьтесь с примером ниже](#example), чтобы понять принцип работы.

## Описание {#description}

### Свойства CheckboxGroup {#checkboxgroup-properties}

#### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"checkboxGroup"`
- `key` - (необязательный) имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (необязательный) включает отображение внешнего обрамления. По умолчанию — *false*
- `options` - (обязательный) объект с параметрами CheckboxGroup. Может содержать следующие атрибуты:
    - `rows` - (необязательный) располагает [элементы Checkbox](#checkbox-properties) внутри элемента управления CheckboxGroup по вертикали
    - `cols` - (необязательный) располагает [элементы Checkbox](#checkbox-properties) внутри элемента управления CheckboxGroup по горизонтали
    - `css` - (необязательный) добавляет CSS-классы к CheckboxGroup
    - `height` - (необязательный) высота CheckboxGroup
    - `padding` - (необязательный) задает отступ между ячейкой и рамкой CheckboxGroup
    - `width` - (необязательный) ширина CheckboxGroup
- `css` - (необязательный) добавляет CSS-классы к элементу управления
- `disabled` - (необязательный) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `hidden` - (boolean) определяет, скрыт ли CheckboxGroup. По умолчанию — *false*
- `height` - (необязательный) высота элемента управления. По умолчанию — `"content"`
- `width` - (необязательный) ширина элемента управления. По умолчанию — `"content"`
- `padding` - (необязательный) задает отступ между ячейкой и рамкой элемента управления CheckboxGroup
- `label` - (необязательный) задает подпись элемента управления
- `labelWidth` - (необязательный) задает ширину подписи элемента управления
- `labelPosition` - (необязательный) определяет положение подписи: `"left"` | `"top"`. По умолчанию — `"top"`

#### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может привести к нарушению их работы.
:::

- `$on` - (необязательный) - позволяет задать слушатель события. Объект содержит следующие свойства:
    - `eventName`  - колбэк-функция, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) виджета Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-checkboxgroup-events/)
- `$handler` - (необязательный) - колбэк-функция, которая позволяет обрабатывать действия при возникновении события `change` элемента управления [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) виджета Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) виджета Form, на основе которого создан компонент
        - `value` - новое значение элемента управления [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) виджета Form
- `$setValue` - (необязательный) - колбэк-функция, которая позволяет задать значение элемента управления [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) виджета Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) виджета Form, на основе которого создан компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - колбэк-функция, которая позволяет задать структуру элемента управления. Возвращает конфигурацию элемента управления [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) виджета Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

### Свойства Checkbox {#checkbox-properties}

- `id` - (необязательный) id элемента управления, генерируется автоматически, если не задан
- `text` - (необязательный) текстовая подпись элемента Checkbox
- `value` - (необязательный) значение элемента Checkbox
- `css` - (необязательный) добавляет CSS-классы к элементу управления
- `disabled` - (необязательный) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `hidden` - (необязательный) определяет, скрыт ли элемент Checkbox. По умолчанию — *false*
- `height` - (необязательный) высота элемента управления. По умолчанию — `"content"`
- `width` - (необязательный) ширина элемента управления. По умолчанию — `"content"`
- `padding` - (необязательный) задает отступ между ячейкой и рамкой элемента управления Checkbox

## Пример {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkboxGroup",
                        label: "Select products",
                        key: "products",
                        options: {
                            rows: [
                                { id: "diagram", text: "DHTMLX Diagram", value: "diagram" },
                                { id: "suite", text: "DHTMLX Suite", value: "suite" },
                                { id: "gantt", text: "DHTMLX Gantt" },
                                { id: "spreadsheet", text: "DHTMLX Spreadsheet", disabled: true }
                            ]
                        }
                    }
                ]
            }
        }
    }
});
editor.parse([
    {
        "type": "rectangle",
        "products": {
            "diagram": "diagram",
            "suite": "",
            "gantt": true,
            "spreadsheet": false
        }
    }
]);
~~~
