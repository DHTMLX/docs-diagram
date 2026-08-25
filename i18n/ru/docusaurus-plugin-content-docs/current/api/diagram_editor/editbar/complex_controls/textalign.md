---
sidebar_label: Text align
title: Сложные элементы управления Editbar - Text align
description: Вы можете изучить элемент управления Text align компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Text align

@short: Сложный элемент управления для настройки выравнивания текста в элементах Diagram

<img
  src={useBaseUrl('/img/editbar-complex-controls/textalign.png')}
  alt="Элемент управления Text align" width='300'
/>

## Использование {#usage}

~~~jsx
{
    type: "textAlign",

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

    // Служебные свойства
    $properties?: object
}
~~~

## Описание {#description}

### Базовые свойства {#basic-properties}

- `type` - (обязательно) тип элемента управления. Укажите значение `"textAlign"`
- `hidden` - (опционально) определяет, скрыт ли элемент управления. По умолчанию — *false*
- `disabled` - (опционально) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `css` - (опционально) добавляет стилевые классы к элементу управления
- `width` - (опционально) ширина элемента управления. По умолчанию — `"content"`
- `height` - (опционально) высота элемента управления. По умолчанию — `"content"`
- `padding` - (опционально) задает отступы для содержимого внутри группы элементов управления. По умолчанию — *"0 16px"*
- `label` - (опционально) задает подпись для элемента управления
- `labelAlignment` - (опционально) определяет положение подписи. По умолчанию — `"left"`
- `align` - (опционально) задает выравнивание элементов управления внутри группы. По умолчанию — `"between"`
- `compact` - (опционально) задает компактный режим, убирает отступы и рамку. По умолчанию — *false*

### Служебные свойства {#service-properties}

- `$properties` - (опционально) позволяет переопределить значения [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) внутри сложного элемента управления. Вы можете настроить следующие элементы элемента управления **Text align** на основе базовых элементов управления:
    - `textAlign` - ([toggleGroup](api/diagram_editor/editbar/basic_controls/togglegroup.md)) задает горизонтальное выравнивание текста
    - `textVerticalAlign` - ([toggleGroup](api/diagram_editor/editbar/basic_controls/togglegroup.md)) задает вертикальное выравнивание текста

## Пример {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textAlign",
                        label: "Text align"
                    }
                ]
            }
        }
    }
});
~~~
