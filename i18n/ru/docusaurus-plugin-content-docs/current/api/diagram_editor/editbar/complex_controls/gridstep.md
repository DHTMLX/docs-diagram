---
sidebar_label: Grid step
title: Editbar Complex Controls - Grid step
description: Вы можете изучить элемент управления Grid step компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, опробуйте примеры кода и live-демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Grid step

@short: Комплексный элемент управления для отображения и изменения шага сетки редактора Diagram

<img
  src={useBaseUrl('/img/editbar-complex-controls/gridstep.png')}
  alt="Gridstep control" width='300'
/>

## Использование {#usage}

~~~jsx
{
    type: "gridStep",

    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false

    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number, // по умолчанию "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // по умолчанию "left"
    readOnly?: boolean, // по умолчанию false
    wrap?: boolean // по умолчанию true
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"gridStep"`
- `hidden` - (опционально) определяет, скрыт ли элемент управления. По умолчанию - *false*
- `disabled` - (опционально) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию - *false*
- `css` - (опционально) добавляет CSS-классы стилей к элементу управления
- `width` - (опционально) ширина элемента управления. По умолчанию - `"content"`
- `height` - (опционально) высота элемента управления. По умолчанию - `"content"`
- `padding` - (опционально) задаёт отступ для содержимого внутри группы элементов управления. По умолчанию - *"0 16px"*
- `label` - (опционально) задаёт метку для элемента управления
- `labelAlignment` - (опционально) определяет положение метки. По умолчанию - `"left"`
- `readOnly` - (опционально) задаёт режим "только для чтения" для элемента управления. По умолчанию - *false*
- `wrap` - (опционально) позволяет отображать внешнюю обёртку. По умолчанию - *true*

## Пример {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "gridStep",
                        readOnly: true
                    }
                ]
            }
        }
    }
});
~~~
