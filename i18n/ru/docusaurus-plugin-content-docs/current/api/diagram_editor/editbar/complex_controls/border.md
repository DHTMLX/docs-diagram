---
sidebar_label: Border
title: Editbar Complex Controls - Border
description: Вы можете изучить элемент управления Border компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, опробуйте примеры кода и live-демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Border

@short: Комплексный элемент управления для отображения и изменения границ элемента Diagram

<img
  src={useBaseUrl('/img/editbar-complex-controls/border.png')}
  alt="Border control" width='300'
/>

:::info
Элемент управления **Border** недоступен для элемента `lineTitle`.
:::

## Использование {#usage}

~~~jsx
{
    type: "border",

    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false

    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number, // по умолчанию "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // по умолчанию "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // по умолчанию "between"
    compact?: boolean, // по умолчанию false

    // служебные свойства
    $properties?: object
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"border"`
- `hidden` - (опционально) определяет, скрыт ли элемент управления. По умолчанию - *false*
- `disabled` - (опционально) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию - *false*
- `css` - (опционально) добавляет CSS-классы стилей к элементу управления
- `width` - (опционально) ширина элемента управления. По умолчанию - `"content"`
- `height` - (опционально) высота элемента управления. По умолчанию - `"content"`
- `padding` - (опционально) задаёт отступ для содержимого внутри группы элементов управления. По умолчанию - *"0 16px"*
- `label` - (опционально) задаёт метку для элемента управления
- `labelAlignment` - (опционально) определяет положение метки. По умолчанию - `"left"`
- `align` - (опционально) задаёт выравнивание элементов управления внутри группы элементов управления. По умолчанию - `"between"`
- `compact` - (опционально) задаёт компактный режим, убирает отступы и рамку. По умолчанию - *false*

### Служебные свойства {#service-properties}

- `$properties` - (опционально) позволяет переопределить значения [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) внутри комплексного элемента управления. Вы можете настроить следующие элементы **Border** на основе базовых элементов управления:
    - `stroke` - ([colorpicker](api/diagram_editor/editbar/basic_controls/colorpicker.md)) задаёт цвет границы
    - `strokeType` - ([combo](api/diagram_editor/editbar/basic_controls/combo.md)) задаёт тип границы
    - `strokeWidth` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задаёт ширину границы

## Пример {#example}

~~~jsx {7-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    {
                        type: "border",
                        label: "Border style",
                        $properties: {
                            strokeType: { hidden: true }
                        }
                    }
                ]
            }
        }
    }
});
~~~
