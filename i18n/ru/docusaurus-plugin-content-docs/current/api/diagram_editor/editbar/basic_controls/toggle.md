---
sidebar_label: Toggle
title: Основные элементы управления Editbar - Toggle
description: Изучите элемент управления Toggle панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Toggle

@short: Базовый элемент управления, представляющий собой специальную кнопку, которая может менять своё состояние с нажатого на ненажатое при клике.

![Элемент управления Toggle](/img/editbar-basic-controls/toggle.png)

## Использование {#usage}

~~~jsx
{
    type: "toggle",
    key?: string | string[],

    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false
    full?: boolean, // по умолчанию false

    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number,

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

Элемент управления можно использовать как со значением типа *boolean*, так и со значением типа *string*, если задано свойство `value`. Свойство `value` необходимо для присвоения заданного значения в качестве значения применяемого свойства. [Смотрите пример ниже](#example), чтобы понять принцип работы.

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"toggle"`
- `key` - (необязательный) имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
- `hidden` - (необязательный) определяет, скрыт ли элемент управления. По умолчанию *false*
- `disabled` - (необязательный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `full` - (необязательный) определяет, будет ли toggle растянут на ширину, заданную свойством `width`. По умолчанию *false*
- `text` - (необязательный) задаёт текст внутри toggle. При инициализации вместе со свойством `offText` указанный текст будет отображаться в выбранном (нажатом) состоянии
- `offText` - (необязательный) задаёт текст, который будет отображаться в невыбранном (ненажатом) состоянии toggle
- `icon` - (необязательный) задаёт CSS-класс иконки, отображаемой внутри toggle. При инициализации вместе со свойством `offIcon` указанные CSS-классы иконок будут отображаться в выбранном (нажатом) состоянии toggle
- `offIcon` - (необязательный) задаёт CSS-класс иконки, которая будет отображаться в невыбранном (ненажатом) состоянии toggle
- `value` - (необязательный) задаёт значение в выбранном (нажатом) состоянии. Если не определено, элемент управления используется со значением типа *boolean*
- `css` - (необязательный) добавляет стилевые классы к элементу управления
- `width` - (необязательный) ширина элемента управления. По умолчанию `"content"`
- `height` - (необязательный) высота элемента управления. По умолчанию `"content"`
- `padding` - (необязательный) задаёт отступ между ячейкой и границей элемента управления Toggle

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание, что мы настоятельно не рекомендуем переопределять служебные свойства и методы для стандартных типов элементов управления, так как это может нарушить их функциональность.
:::

- `$on` - (необязательный) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - колбек, который вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-toggle-events/)
- `$handler` - (необязательный) - колбек, который позволяет обрабатывать действия при возникновении события `change` элемента управления [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form, на основе которого построен компонент
        - `value` - новое значение элемента управления [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form
- `$setValue` - (необязательный) - колбек, который позволяет задавать значение элемента управления [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form, на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - колбек, который позволяет задавать структуру элемента управления. Возвращает конфигурацию элемента управления [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-14} title="Применение значения типа boolean для toggle"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "toggle",
                        key: ["header", "enable"],
                        icon: "dxi dxi-eye",
                        offIcon: "dxi dxi-eye-off",
                        text: "Visible",
                        offText: "Invisible"
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {7-12} title="Присвоение заданного значения в качестве значения применяемого свойства"
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggle",
                        key: "fontStyle",
                        value: "italic",
                        icon: "dxi dxi-format-italic"
                    }
                ]
            }
        }
    }
});
~~~
