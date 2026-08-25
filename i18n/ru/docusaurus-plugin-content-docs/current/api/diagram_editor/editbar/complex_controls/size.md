---
sidebar_label: Size
title: Сложные элементы управления Editbar - Size
description: Вы можете изучить элемент управления Size компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Size

@short: Сложный элемент управления для изменения ширины и высоты элементов Diagram

<img
  src={useBaseUrl('/img/editbar-complex-controls/size.png')}
  alt="Элемент управления Size" width='300'
/>

:::info
Элемент управления **Size** доступен только для элементов `shape`, `group` и `swimlane` в Diagram Editor.
:::

## Использование {#usage}

~~~jsx
{
    type: "size",

    hidden?: boolean, // по умолчанию false
    disabled?: boolean, // по умолчанию false

    css?: string,
    width?: string | number | "content", // по умолчанию "content"
    height?: string | number | "content", // по умолчанию "content"
    padding?: string | number, // по умолчанию "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // по умолчанию "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // по умолчанию "start"
    compact?: boolean, // по умолчанию false

    // Служебные свойства
    $properties?: object
}
~~~

## Описание {#description}

### Базовые свойства {#basic-properties}

- `type` - (обязательно) тип элемента управления. Укажите значение `"size"`
- `hidden` - (опционально) определяет, скрыт ли элемент управления. По умолчанию — *false*
- `disabled` - (опционально) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `css` - (опционально) добавляет стилевые классы к элементу управления
- `width` - (опционально) ширина элемента управления. По умолчанию — `"content"`
- `height` - (опционально) высота элемента управления. По умолчанию — `"content"`
- `padding` - (опционально) задает отступы для содержимого внутри группы элементов управления. По умолчанию — *"0 16px"*
- `label` - (опционально) задает подпись для элемента управления
- `labelAlignment` - (опционально) определяет положение подписи. По умолчанию — `"left"`
- `align` - (опционально) задает выравнивание элементов управления внутри группы. По умолчанию — `"start"`
- `compact` - (опционально) задает компактный режим, убирает отступы и рамку. По умолчанию — *false*

### Служебные свойства {#service-properties}

- `$properties` - (опционально) позволяет переопределить значения [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) внутри сложного элемента управления. Вы можете настроить следующие элементы элемента управления **Size** на основе базовых элементов управления:
    - `width` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задает ширину элемента Diagram (в пикселях)
    - `height` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задает высоту элемента Diagram (в пикселях)

## Пример {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "size",
                        label: "Shape size"
                    }
                ]
            }
        }
    }
});
~~~
