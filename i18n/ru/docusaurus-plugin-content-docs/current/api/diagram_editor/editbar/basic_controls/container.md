---
sidebar_label: Container
title: Базовые элементы управления Editbar - Container
description: Ознакомьтесь с элементом управления Container панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

# Container

@short: Базовый элемент управления для встраивания HTML-кода.

![Элемент управления Container](/img/editbar-basic-controls/container.png)

## Использование {#usage}

~~~jsx
{
    type: "container",
    html: HTMLElement | string,
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

    // служебный метод
    $layout?: function
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"container"`
- `html` - (обязательный) HTML-содержимое элемента управления
- `wrap` - (необязательный) включает отображение внешнего обрамления. По умолчанию — *false*
- `css` - (необязательный) добавляет CSS-классы к элементу управления
- `disabled` - (необязательный) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `hidden` - (необязательный) определяет, скрыт ли элемент управления. По умолчанию — *false*
- `height` - (необязательный) высота элемента управления. По умолчанию — `"content"`
- `width` - (необязательный) ширина элемента управления. По умолчанию — `"content"`
- `padding` - (необязательный) задает отступ между ячейкой и рамкой элемента управления
- `label` - (необязательный) задает подпись элемента управления
- `labelWidth` - (необязательный) задает ширину подписи элемента управления
- `labelPosition` - (необязательный) определяет положение подписи: `"left"` | `"top"`. По умолчанию — `"top"`

#### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может привести к нарушению их работы.
:::

- `$layout` - (необязательный) - колбэк-функция, которая позволяет задать структуру элемента управления. Возвращает конфигурацию элемента управления [Container](https://docs.dhtmlx.com/suite/form/container/) виджета Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "container",
                        html: `
                            <h3>DHTMLX Diagram</h3>
                            <p>This is an example of simple customization of the editing panel using the container control.</p>
                            <p>You can also use this control to create your own controls.</p>
                            <img
                                style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto'
                                src='https://snippet.dhtmlx.com/codebase/data/common/img/01/developer-01.svg'
                            >
                        `
                    }
                ]
            }
        }
    }
});
~~~
