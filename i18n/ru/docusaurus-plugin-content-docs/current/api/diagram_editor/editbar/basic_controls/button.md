---
sidebar_label: Button
title: Базовые элементы управления Editbar - Button
description: Вы можете изучить элемент управления Button компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Button

@short: Базовый элемент управления "кнопка", который может содержать иконку.

![Элемент управления Button](/img/editbar-basic-controls/button.png)

## Использование {#usage}

~~~jsx
{
    type: "button",
    text?: string,

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    // вид кнопки
    circle?: boolean, // по умолчанию false
    color?: "danger" | "secondary" | "primary" | "success", // по умолчанию "primary"
    full?: boolean, // по умолчанию false
    icon?: string,
    size?: "small" | "medium", // по умолчанию "medium"
    view?: "flat" | "link", // по умолчанию "flat"

    // служебные свойства и методы
    $on?: { [eventName: string]: function },
    $layout?: function
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательно) тип элемента управления. Установите значение `"button"`
- `text` - (необязательно) текстовая подпись кнопки
- `css` - (необязательно) добавляет стилевые классы к элементу управления
- `disabled` - (необязательно) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `hidden` - (необязательно) определяет, скрыт ли элемент управления. По умолчанию *false*
- `height` - (необязательно) высота элемента управления. По умолчанию `"content"`
- `width` - (необязательно) ширина элемента управления. По умолчанию `"content"`
- `padding` - (необязательно) задаёт отступ между ячейкой и границей элемента управления "кнопка"
- `circle` - (необязательно) делает углы кнопки скруглёнными. По умолчанию *false*
- `color` - (необязательно) определяет цветовую схему кнопки: `"danger"` | `"secondary"` | `"primary"` | `"success"`. По умолчанию `"primary"`
- `full` - (необязательно) растягивает кнопку на всю ширину Editbar. По умолчанию *false*
- `icon` - (необязательно) задаёт CSS-класс иконки, отображаемой внутри кнопки
- `size` - (необязательно) определяет размер кнопки: `"small"` | `"medium"`. По умолчанию `"medium"`
- `view` - (необязательно) определяет внешний вид кнопки: `"flat"` | `"link"`. По умолчанию `"flat"`

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание, что мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может нарушить их работу.
:::

- `$on` - (необязательно) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - колбек, который вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления Form [Button](https://docs.dhtmlx.com/suite/form/button/)
            - `editor` - объект Diagram Editor
            - `id` - идентификатор элемента Diagram
        - `arguments` - (необязательно) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-button-events/)
- `$layout` - (необязательно) - колбек, который позволяет задавать структуру элемента управления. Возвращает конфигурацию элемента управления Form [Button](https://docs.dhtmlx.com/suite/form/button/). Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {8-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "input", label: "Text", placeholder: "Push the button", key: "text" },
                    {
                        type: "button",
                        full: true,
                        text: "Change shape text",
                        color: "danger",
                        $on: {
                            click: ({ id, editor }) => {
                                editor.diagram.data.update(id, {
                                    text: "New text"
                                });
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
