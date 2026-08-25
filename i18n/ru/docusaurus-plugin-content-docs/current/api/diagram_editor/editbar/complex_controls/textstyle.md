---
sidebar_label: Text style
title: Сложные элементы управления Editbar - Text style
description: Вы можете изучить элемент управления Text style компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Text style

@short: Сложный элемент управления для настройки стиля текста в элементах Diagram

<img
  src={useBaseUrl('/img/editbar-complex-controls/textstyle.png')}
  alt="Элемент управления Text style" width='300'
/>

## Использование {#usage}

~~~jsx
{
    type: "textStyle",

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

- `type` - (обязательно) тип элемента управления. Укажите значение `"textStyle"`
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

- `$properties` - (опционально) позволяет переопределить значения [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) внутри сложного элемента управления. Вы можете настроить следующие элементы элемента управления **Text style** на основе базовых элементов управления:
    - `fontSize` - ([combo](api/diagram_editor/editbar/basic_controls/combo.md)) задает размер шрифта
    - `lineHeight` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задает высоту строки
    - `fontColor` - ([colorpicker](api/diagram_editor/editbar/basic_controls/colorpicker.md)) задает цвет шрифта
    - `fontWeight` - ([toggle](api/diagram_editor/editbar/basic_controls/toggle.md)) задает насыщенность шрифта
    - `fontStyle` - ([toggle](api/diagram_editor/editbar/basic_controls/toggle.md)) задает стиль шрифта

## Пример {#example}

~~~jsx {6-22}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textStyle",
                        label: "Text style",
                        $properties: {
                            fontSize: {
                                value: 20,
                                options: [
                                    { id: 10, value: "10px" },
                                    { id: 20, value: "20px" },
                                    { id: 30, value: "30px" },
                                    { id: 40, value: "40px" }
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
