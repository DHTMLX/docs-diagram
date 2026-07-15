---
sidebar_label: Textarea
title: Основные элементы управления Editbar - Textarea
description: Изучите элемент управления Textarea панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Textarea

@short: Базовый элемент управления для ввода простого многострочного текста.

![Элемент управления Textarea](/img/editbar-basic-controls/textarea.png)

## Использование {#usage}

~~~jsx
{
    type: "textarea",
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    maxlength?: number | string,
    minlength?: number | string,
    placeholder?: string,
    readOnly?: boolean, // по умолчанию false

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

- `type` - (обязательный) тип элемента управления. Установите значение `"textarea"`
- `key` - (необязательный) имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (необязательный) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `css` - (необязательный) добавляет стилевые классы к элементу управления
- `hidden` - (необязательный) определяет, скрыт ли элемент управления. По умолчанию *false*
- `disabled` - (необязательный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `width` - (необязательный) ширина элемента управления. По умолчанию `"content"`
- `height` - (необязательный) высота элемента управления. По умолчанию `"content"`
- `padding` - (необязательный) задаёт отступ между ячейкой и границей элемента управления Textarea
- `maxlength` - (необязательный) максимальное [количество символов, разрешённое в textarea](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)
- `minlength` - (необязательный) минимальное [количество символов, разрешённое в textarea](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)
- `placeholder` - (необязательный) подсказка для textarea
- `readOnly` - (необязательный) определяет, доступен ли textarea только для чтения. По умолчанию *false*
- `label` - (необязательный) задаёт метку для элемента управления
- `labelWidth` - (необязательный) задаёт ширину метки элемента управления
- `labelPosition` - (необязательный) определяет положение метки: `"left"` | `"top"`. По умолчанию `"top"`

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание, что мы настоятельно не рекомендуем переопределять служебные свойства и методы для стандартных типов элементов управления, так как это может нарушить их функциональность.
:::

- `$on` - (необязательный) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - колбек, который вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [Textarea](https://docs.dhtmlx.com/suite/form/textarea/) Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-textarea-events/)
- `$handler` - (необязательный) - колбек, который позволяет обрабатывать действия при возникновении событий `change` и `input` элемента управления [Textarea](https://docs.dhtmlx.com/suite/form/textarea/) Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Textarea](https://docs.dhtmlx.com/suite/form/textarea/) Form, на основе которого построен компонент
        - `value` - новое значение элемента управления [Textarea](https://docs.dhtmlx.com/suite/form/textarea/) Form
- `$setValue` - (необязательный) - колбек, который позволяет задавать значение элемента управления [Textarea](https://docs.dhtmlx.com/suite/form/textarea/) Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Textarea](https://docs.dhtmlx.com/suite/form/textarea/) Form, на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - колбек, который позволяет задавать структуру элемента управления. Возвращает конфигурацию элемента управления [Textarea](https://docs.dhtmlx.com/suite/form/textarea/) Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textarea",
                        key: "text",
                        label: "Textarea label",
                        height: 250,
                        wrap: true
                    }
                ]
            }
        }
    }
});
~~~
