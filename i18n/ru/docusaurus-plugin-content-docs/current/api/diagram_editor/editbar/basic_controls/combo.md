---
sidebar_label: Combo
title: Базовые элементы управления Editbar - Combo
description: Ознакомьтесь с элементом управления Combo панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

# Combo

@short: Базовый элемент управления для ввода данных, представляющий собой усовершенствованный редактируемый раскрывающийся список с набором опций.

![Элемент управления Combo](/img/editbar-basic-controls/combo.png)

## Использование {#usage}

~~~jsx
{
    type: "combo",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    filter?: (item: any, input: string) => boolean,
    eventHandlers?: {
        [eventName: string]: {
            [className: string]: (event: Event, id: string | number) => void | boolean;
        };
    },
    itemHeight?: number | string, // по умолчанию 32
    itemsCount?: boolean | ((count: number) => string),
    listHeight?: number | string, // по умолчанию 224
    multiselection?: boolean, // по умолчанию false
    placeholder?: string,
    readOnly?: boolean, // по умолчанию false
    selectAllButton?: boolean, // по умолчанию false
    template?: (item: object) => string,
    virtual?: boolean, // по умолчанию false

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

Объект конфигурации опции внутри Combo:

~~~jsx
{
    id: string | number,
    value: string | number
}
~~~

## Описание {#description}

### Свойства Combo {#combo-properties}

#### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"combo"`
- `options` - (обязательный) массив опций Combo, каждая опция может быть задана как *string* или как *object* с набором пар `key:value` - [атрибуты опций и их значения](#option-properties)
- `key` - (необязательный) имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (необязательный) включает отображение внешнего обрамления. По умолчанию — *false*
- `css` - (необязательный) добавляет CSS-классы к элементу управления
- `disabled` - (необязательный) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `hidden` - (необязательный) определяет, скрыт ли элемент Combo. По умолчанию — *false*
- `height` - (необязательный) высота элемента управления. По умолчанию — `"content"`
- `width` - (необязательный) ширина элемента управления. По умолчанию — `"content"`
- `padding` - (необязательный) задает отступ между ячейкой и рамкой элемента управления Combo
- `filter` - (необязательный) задает пользовательскую функцию для фильтрации опций Combo. [Подробнее](https://docs.dhtmlx.com/suite/combobox/customization/#custom-filter-for-options)
- `eventHandlers` - (необязательный) добавляет обработчики событий к HTML-элементам пользовательского шаблона элементов Combo. [Подробнее](https://docs.dhtmlx.com/suite/combobox/api/combobox_eventhandlers_config/)
- `itemHeight` - (необязательный) задает высоту ячейки в списке опций. По умолчанию — *32*
- `itemsCount` - (необязательный) отображает общее количество выбранных опций
- `listHeight` - (необязательный) задает высоту списка опций. По умолчанию — *224*
- `multiselection` - (необязательный) включает возможность выбора нескольких опций в Combo. По умолчанию — *false*
- `placeholder` - (необязательный) задает подсказку в поле ввода Combo
- `readOnly` - (необязательный) делает Combo доступным только для чтения (можно выбирать опции только из списка, без ввода текста в поле). По умолчанию — *false*
- `selectAllButton` - (необязательный) определяет, отображается ли кнопка «Выбрать все». По умолчанию — *false*
- `template` - (необязательный) задает шаблон отображения опций во всплывающем списке
- `virtual` - (необязательный) включает динамическую подгрузку данных при прокрутке списка опций. По умолчанию — *false*
- `label` - (необязательный) задает подпись элемента управления
- `labelPosition` - (необязательный) определяет положение подписи: `"left"` | `"top"`. По умолчанию — `"top"`
- `labelWidth` - (необязательный) задает ширину подписи элемента управления

#### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может привести к нарушению их работы.
:::

- `$on` - (необязательный) - позволяет задать слушатель события. Объект содержит следующие свойства:
    - `eventName`  - колбэк-функция, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [Combo](https://docs.dhtmlx.com/suite/form/combo/) виджета Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-combo-events/)
- `$handler` - (необязательный) - колбэк-функция, которая позволяет обрабатывать действия при возникновении события `change` элемента управления [Combo](https://docs.dhtmlx.com/suite/form/combo/) виджета Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Combo](https://docs.dhtmlx.com/suite/form/combo/) виджета Form, на основе которого создан компонент
        - `value` - новое значение элемента управления [Combo](https://docs.dhtmlx.com/suite/form/combo/) виджета Form
- `$setValue` - (необязательный) - колбэк-функция, которая позволяет задать значение элемента управления [Combo](https://docs.dhtmlx.com/suite/form/combo/) виджета Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Combo](https://docs.dhtmlx.com/suite/form/combo/) виджета Form, на основе которого создан компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - колбэк-функция, которая позволяет задать структуру элемента управления. Возвращает конфигурацию элемента управления [Combo](https://docs.dhtmlx.com/suite/form/combo/) виджета Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

### Свойства опции {#option-properties}

- `id` - атрибут `id` возвращается и передается в данные формы. Этот атрибут всегда должен быть заполнен во избежание непредвиденного поведения
- `value` - атрибут `value` отображается в поле ввода

## Пример {#example}

~~~jsx {7-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
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
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": undefined },
    { "id": "shape_3", "parent": "shape_1", "responsible": "Henry Bennet" }
]);
~~~

~~~jsx {7-14} title="С включенным множественным выбором"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Henry Bennet", "Mike Frebel"] }
]);
~~~

~~~jsx {7-14} title="Задание опций в виде объектов"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", { id: 1, value: "Greg Mash" }]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Mike Frebel", 1] }
]);
~~~
