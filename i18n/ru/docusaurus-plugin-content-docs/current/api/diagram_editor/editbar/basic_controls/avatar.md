---
sidebar_label: Avatar
title: Базовые элементы управления Editbar - Avatar
description: Вы можете изучить элемент управления Avatar компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Avatar

@short: Базовый элемент управления для загрузки изображений.

![Элемент управления Avatar](/img/editbar-basic-controls/avatar.png)

## Использование {#usage}

~~~jsx
{
    type: "avatar",
    key?: string, // по умолчанию "img"
    wrap?: boolean, // по умолчанию false
    target?: string,

    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false
    readOnly?: boolean, // по умолчанию false

    removeIcon?: boolean, // по умолчанию true
    circle?: boolean, // по умолчанию false
    icon?: string,
    placeholder?: string,
    preview?: string,
    alt?: string,
    size?: "small" | "medium" | "large" | number, // по умолчанию "medium"

    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    // при `wrap:true` см. свойства label для Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // по умолчанию "top"

    accept?: string, // по умолчанию "image/*"
    fieldName?: string, // по умолчанию "file"
    autosend?: boolean, // по умолчанию false
    params?: { [key: string]: any },
    headerParams?: { [key: string]: any },
    updateFromResponse?: boolean,  // по умолчанию true

    // служебные свойства и методы
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательно) тип элемента управления. Установите значение `"avatar"`
- `key` - (необязательно) имя указанного/изменяемого свойства в объекте элемента Diagram. По умолчанию `"img"`
- `wrap` - (необязательно) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `target` - (необязательно) задаёт URL серверного скрипта, который будет обрабатывать загрузку файла; свойство обязательно, если изображение отправляется на сервер с помощью элемента управления
:::note
При загрузке изображения и его отправке на сервер с помощью свойства `target` обратите внимание, что на сервер будет отправлен [объект *value*](https://docs.dhtmlx.com/suite/form/api/avatar/api_avatar_properties/#description). Сам файл будет записан в наборе данных в формате *base64*. Вы можете переопределить эту логику с помощью [служебных методов](#service-properties-and-methods).
:::
- `hidden` - (необязательно) определяет, скрыт ли элемент управления. По умолчанию *false*
- `disabled` - (необязательно) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `readOnly` - (необязательно) задаёт режим "только для чтения" для элемента управления. По умолчанию *false*
- `removeIcon` - (необязательно) включает очистку элемента управления через интерфейс. По умолчанию *true*
- `circle` - (необязательно) задаёт режим отображения элемента управления со скруглёнными углами. По умолчанию *false*
- `icon` - (необязательно) позволяет задать CSS-класс иконки, отображаемой, если изображение не загружено; не работает вместе со свойством `preview`
- `placeholder` - (необязательно) позволяет задать текст, отображаемый, если изображение не загружено; не работает вместе со свойством `preview`
- `preview` - (необязательно) задаёт абсолютный путь к изображению предпросмотра. Изображение предпросмотра отображается, если изображение не загружено
- `alt` - (необязательно) задаёт атрибут тега &lt;img&gt; - альтернативный текст, отображаемый, если изображение не загружено
- `size` - (необязательно) позволяет задать один из трёх базовых размеров элемента управления: `"small"` | `"medium"` | `"large"`, или указать пользовательский размер в px. По умолчанию `"medium"`
- `css` - (необязательно) добавляет стилевые классы к элементу управления
- `width` - (необязательно) ширина элемента управления. По умолчанию `"content"`
- `height` - (необязательно) высота элемента управления. По умолчанию `"content"`
- `padding` - (необязательно) задаёт отступ между ячейкой и границей элемента управления Avatar
- `label` - (необязательно) задаёт подпись для элемента управления
- `labelWidth` - (необязательно) задаёт ширину подписи элемента управления
- `labelPosition` - (необязательно) определяет позицию подписи: `"left"` | `"top"`. По умолчанию `"top"`
- `accept` - (необязательно) позволяет указать тип/расширение выбранного файла. По умолчанию *"image/*"*. [Подробнее](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept)
- `fieldName` - (необязательно) задаёт имя поля файла в данных формы, отправляемых на сервер. По умолчанию `"file"`
- `autosend` - (необязательно) включает/отключает автоматическую отправку добавленного файла. По умолчанию *false*
- `params` - (необязательно) добавляет дополнительные параметры для отправки XMLHttpRequest
- `headerParams` - (необязательно) предоставляет дополнительные параметры для заголовков запроса
- `updateFromResponse` - (необязательно) обновляет атрибуты файла данными из ответа сервера. По умолчанию *true*

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание, что мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может нарушить их работу.
:::

- `$on` - (необязательно) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - функция обратного вызова, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления Form [Avatar](https://docs.dhtmlx.com/suite/form/avatar/)
            - `editor` - объект Diagram Editor
            - `id` - идентификатор элемента Diagram
        - `arguments` - (необязательно) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-avatar-events/)
- `$handler` - (необязательно) - функция обратного вызова, которая позволяет обрабатывать действия при срабатывании события `change` элемента управления Form [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - идентификатор элемента Diagram
        - `key` - имя указанного/изменяемого свойства в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Avatar](https://docs.dhtmlx.com/suite/form/avatar/), на основе которого построен компонент
        - `value` - новое значение элемента управления Form [Avatar](https://docs.dhtmlx.com/suite/form/avatar/)
- `$setValue` - (необязательно) - функция обратного вызова, которая позволяет задавать значение элемента управления Form [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления Form [Avatar](https://docs.dhtmlx.com/suite/form/avatar/), на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательно) - функция обратного вызова, которая позволяет задавать структуру элемента управления. Возвращает конфигурацию элемента управления Form [Avatar](https://docs.dhtmlx.com/suite/form/avatar/). Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                "img-card": [
                    {
                        type: "avatar",
                        accept: "image/*",
                        fieldName: "file",
                        target: "https://docs.dhtmlx.com/suite/backend/upload",
                        params: {
                            "firstCustomParam": "customValue"
                        },
                        headerParams: {
                            "firstCustomParam": "customValue"
                        },
                        autosend: true
                    }
                ]
            }
        }
    }
});
~~~
