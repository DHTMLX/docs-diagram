---
sidebar_label: Line shape
title: Сложные элементы управления Editbar - Line shape
description: Вы можете изучить элемент управления Line shape компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Line shape

@short: Комплексный элемент управления для отображения коннекторов и управления ими

<img
  src={useBaseUrl('/img/editbar-complex-controls/lineshape.png')}
  alt="Line shape control" width='300'
/>

:::info
Элемент управления **Line shape** доступен только для элемента `line` в режиме *default* в Diagram Editor.
:::

## Использование {#usage}

~~~jsx
{
    type: "lineShape",

    hidden?: boolean, // false по умолчанию
    disabled?: boolean, // false по умолчанию

    css?: string,
    width?: string | number | "content", // "content" по умолчанию
    height?: string | number | "content", // "content" по умолчанию
    padding?: string | number, // "0 16px" по умолчанию

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" по умолчанию
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "between" по умолчанию
    compact?: boolean, // false по умолчанию

    // Служебные свойства
    $properties?: object
}
~~~

## Описание {#description}

### Базовые свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"lineShape"`
- `hidden` - (опциональный) определяет, скрыт ли элемент управления. *false* по умолчанию
- `disabled` - (опциональный) определяет, включен (*false*) или отключен (*true*) элемент управления. *false* по умолчанию
- `css` - (опциональный) добавляет CSS-классы к элементу управления
- `width` - (опциональный) ширина элемента управления. `"content"` по умолчанию
- `height` - (опциональный) высота элемента управления. `"content"` по умолчанию
- `padding` - (опциональный) задаёт отступы для содержимого внутри группы элементов управления. *"0 16px"* по умолчанию
- `label` - (опциональный) задаёт подпись для элемента управления
- `labelAlignment` - (опциональный) определяет положение подписи. `"left"` по умолчанию
- `align` - (опциональный) задаёт выравнивание элементов управления внутри группы. `"between"` по умолчанию
- `compact` - (опциональный) задаёт компактный режим, убирает отступы и рамку. *false* по умолчанию

### Служебные свойства {#service-properties}

- `$properties` - (опциональный) позволяет переопределить значения [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) внутри сложного элемента управления. Вы можете настроить следующий элемент **Line shape** на основе базовых элементов управления:
    - `connectType` - ([toggleGroup](api/diagram_editor/editbar/basic_controls/togglegroup.md)) задаёт тип коннектора

## Пример {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $line: [
                    {
                        type: "lineShape",
                        label: "Line connection type"
                    }
                ]
            }
        }
    }
});
~~~
