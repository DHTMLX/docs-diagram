---
sidebar_label: ToggleGroup
title: Editbar Basic Controls - ToggleGroup
description: Вы можете изучить элемент управления ToggleGroup компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, опробуйте примеры кода и live-демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# ToggleGroup

@short: Базовый элемент управления для создания групп кнопок-переключателей.

![ToggleGroup control](/img/editbar-basic-controls/togglegroup.png)

## Использование {#usage}

~~~jsx
{
    type: "toggleGroup",
    options: object[],
    key?: string | string[],

    full?: boolean, // по умолчанию false
    gap?: number, // по умолчанию 0
    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false

    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    // служебные свойства и методы
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

Объект конфигурации Toggle внутри ToggleGroup:

~~~jsx
{
    id?: string,
    hidden?: boolean,
    disabled?: boolean,
    full?: boolean,
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number
}
~~~

Объекты с конфигурацией `toggle` внутри элемента управления можно использовать как со значением типа *boolean*, так и со значением типа *string*, если указано свойство `value`. Свойство `value` необходимо для назначения заданного значения в качестве значения применяемого свойства. [Смотрите пример ниже](#example), чтобы разобраться в этом.

## Описание {#description}

### Свойства ToggleGroup {#togglegroup-properties}

#### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"toggleGroup"`
- `key` - (опционально) имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `options` - (обязательный) массив опций ToggleGroup, каждая опция задаётся в виде *объекта* с набором пар `key:value` - [атрибуты опций и их значения](#toggle-properties)
- `hidden` - (опционально) определяет, скрыт ли ToggleGroup. По умолчанию - *false*
- `disabled` - (опционально) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию - *false*
- `full` - (опционально) определяет, будет ли ToggleGroup растянут до ширины, указанной свойством `width`. По умолчанию - *false*
- `gap` - (опционально) задаёт отступ между элементами (кнопками) опции. По умолчанию - *0*
- `css` - (опционально) добавляет CSS-классы стилей к элементу управления
- `width` - (опционально) ширина элемента управления. По умолчанию - `"content"`
- `height` - (опционально) высота элемента управления. По умолчанию - `"content"`
- `padding` - (опционально) задаёт отступ между ячейкой и границей элемента управления ToggleGroup

#### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание, что мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, так как это может нарушить их работу.
:::

- `$on` - (опционально) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - функция обратного вызова, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) компонента Form
            - `editor` - объект Diagram Editor
            - `id` - идентификатор элемента Diagram
        - `arguments` - (опционально) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-togglegroup-events/)
- `$handler` - (опционально) - функция обратного вызова, которая позволяет обрабатывать действия при возникновении события `change` элемента управления [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) компонента Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - идентификатор элемента Diagram
        - `key` - имя указанного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) компонента Form, на основе которого построен компонент
        - `value` - новое значение элемента управления [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) компонента Form
- `$setValue` - (опционально) - функция обратного вызова, которая позволяет задавать значение элемента управления [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) компонента Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) компонента Form, на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (опционально) - функция обратного вызова, которая позволяет задавать структуру элемента управления. Возвращает конфигурацию элемента управления [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) компонента Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

### Свойства Toggle {#toggle-properties}

- `id` - (опционально) идентификатор элемента управления, генерируется автоматически, если не задан
- `hidden` - (опционально) определяет, скрыта ли опция. По умолчанию - *false*
- `disabled` - (опционально) определяет, включена (*false*) или отключена (*true*) опция. По умолчанию - *false*
- `full` - (опционально) определяет, будет ли опция растянута до ширины, указанной свойством `width`. По умолчанию - *false*
- `text` - (опционально) задаёт текст внутри опции. Если инициализирован вместе со свойством `offText`, указанный текст будет отображаться в выбранном (нажатом) состоянии
- `icon` - (опционально) задаёт CSS-класс иконки, отображаемой внутри опции. Если инициализирован вместе со свойством `offIcon`, указанные CSS-классы иконок будут отображаться в выбранном (нажатом) состоянии опции
- `offText` - (опционально) задаёт текст, который будет отображаться в невыбранном (ненажатом) состоянии опции
- `offIcon` - (опционально) задаёт CSS-класс иконки, которая будет отображаться в невыбранном (ненажатом) состоянии опции
- `value` - (опционально) задаёт значение в выбранном (нажатом) состоянии. Если не определено, опция используется со значением типа *boolean*

## Пример {#example}

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggleGroup",
                        key: "textAlign",
                        gap: 4,
                        $on: {
                            beforeChange: (spec, values) => !Object.values(values).every(i => !i),
                        },
                        options: [
                            {
                                icon: "dxi dxi-format-align-left",
                                value: "left"
                            },
                            {
                                icon: "dxi dxi-format-align-center",
                                value: "center"
                            },
                            {
                                icon: "dxi dxi-format-align-right",
                                value: "right"
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
