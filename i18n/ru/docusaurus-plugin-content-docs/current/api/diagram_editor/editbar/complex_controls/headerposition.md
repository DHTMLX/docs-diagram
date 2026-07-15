---
sidebar_label: Header position
title: Сложные элементы управления Editbar - Header position
description: Вы можете изучить элемент управления Header position компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Header position

@short: Комплексный элемент управления для изменения положения заголовка группы

<img
  src={useBaseUrl('/img/editbar-complex-controls/headerposition.png')}
  alt="Header position control" width='300'
/>

:::info
Элемент управления **Header position** доступен только для элементов `group` и `swimlane` в режиме *default* в Diagram Editor.
:::

## Использование {#usage}

~~~jsx
{
    type: "headerPosition",

    hidden?: boolean, // false по умолчанию
    disabled?: boolean, // false по умолчанию

    css?: string,
    width?: string | number | "content", // "content" по умолчанию
    height?: string | number | "content", // "content" по умолчанию
    padding?: string | number, // "0 16px" по умолчанию

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" по умолчанию
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // "start" по умолчанию
    compact?: boolean, // false по умолчанию

    // Служебные свойства
    $properties?: object
}
~~~

## Описание {#description}

### Базовые свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"headerPosition"`
- `hidden` - (опциональный) определяет, скрыт ли элемент управления. *false* по умолчанию
- `disabled` - (опциональный) определяет, включен (*false*) или отключен (*true*) элемент управления. *false* по умолчанию
- `css` - (опциональный) добавляет CSS-классы к элементу управления
- `width` - (опциональный) ширина элемента управления. `"content"` по умолчанию
- `height` - (опциональный) высота элемента управления. `"content"` по умолчанию
- `padding` - (опциональный) задаёт отступы для содержимого внутри группы элементов управления. *"0 16px"* по умолчанию
- `label` - (опциональный) задаёт подпись для элемента управления
- `labelAlignment` - (опциональный) определяет положение подписи. `"left"` по умолчанию
- `align` - (опциональный) задаёт выравнивание элементов управления внутри группы. `"start"` по умолчанию
- `compact` - (опциональный) задаёт компактный режим, убирает отступы и рамку. *false* по умолчанию

### Служебные свойства {#service-properties}

- `$properties` - (опциональный) позволяет переопределить значения [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) внутри сложного элемента управления. Вы можете настроить следующий элемент **Header position** на основе базовых элементов управления:
    - `position` - ([toggleGroup](api/diagram_editor/editbar/basic_controls/togglegroup.md)) - задаёт положение заголовка группы

## Пример {#example}

~~~jsx {6-25}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "headerPosition",
                        label: "Header position",
                        $properties: {
                            position: {
                                options: [
                                    {
                                        icon: "dxi dxi-format-vertical-align-top",
                                        value: "top"
                                    },
                                    {
                                        icon: "dxi dxi-format-vertical-align-bottom",
                                        value: "bottom"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
