---
sidebar_label: Header
title: Editbar Complex Controls - Header
description: Вы можете изучить элемент управления Header компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, опробуйте примеры кода и live-демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Header

@short: Комплексный элемент управления для отображения и изменения заголовка элементов `"group"` и `"swimlane"` редактора Diagram

<img
  src={useBaseUrl('/img/editbar-complex-controls/header.png')}
  alt="Header control" width='300'
/>

:::info
Элемент управления **Header** доступен только для элементов `group` и `swimlane` в режиме *default* редактора Diagram.
:::

## Использование {#usage}

~~~jsx
{
    type: "header",

    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false

    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number, // по умолчанию "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // по умолчанию "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // по умолчанию "start"
    compact?: boolean // по умолчанию false
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"header"`
- `hidden` - (опционально) определяет, скрыт ли элемент управления. По умолчанию - *false*
- `disabled` - (опционально) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию - *false*
- `css` - (опционально) добавляет CSS-классы стилей к элементу управления
- `width` - (опционально) ширина элемента управления. По умолчанию - `"content"`
- `height` - (опционально) высота элемента управления. По умолчанию - `"content"`
- `padding` - (опционально) задаёт отступ для содержимого внутри группы элементов управления. По умолчанию - *"0 16px"*
- `label` - (опционально) задаёт метку для элемента управления
- `labelAlignment` - (опционально) определяет положение метки. По умолчанию - `"left"`
- `align` - (опционально) задаёт выравнивание элементов управления внутри группы элементов управления. По умолчанию - `"start"`
- `compact` - (опционально) задаёт компактный режим, убирает отступы и рамки. По умолчанию - *false*

## Пример {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "header",
                        label: "Group header style"
                    }
                ]
            }
        }
    }
});
~~~
