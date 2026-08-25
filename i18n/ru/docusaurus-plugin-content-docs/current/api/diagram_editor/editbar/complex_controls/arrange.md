---
sidebar_label: Arrange
title: Editbar Complex Controls - Arrange
description: Вы можете изучить элемент управления Arrange компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, опробуйте примеры кода и live-демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Arrange

@short: Комплексный элемент управления для редактирования ширины, высоты, угла поворота, координат x и y элемента Diagram

<img
  src={useBaseUrl('/img/editbar-complex-controls/arrange.png')}
  alt="Arrange control" width='300'
/>

:::info
Элемент управления **Arrange** доступен для всех элементов (кроме элементов `line` и `lineTitle`) в режиме *default* редактора Diagram.
:::

## Использование {#usage}

~~~jsx
{
    type: "arrange",

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

    // служебные свойства
    $properties?: object
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"arrange"`
- `hidden` - (опционально) определяет, скрыт ли элемент управления. По умолчанию - *false*
- `disabled` - (опционально) определяет, включён (*false*) или отключён (*true*) элемент управления
- `css` - (опционально) добавляет CSS-классы стилей к элементу управления
- `width` - (опционально) ширина элемента управления. По умолчанию - `"content"`
- `height` - (опционально) высота элемента управления. По умолчанию - `"content"`
- `padding` - (опционально) задаёт отступ для содержимого внутри группы элементов управления. По умолчанию - *"0 16px"*
- `label` - (опционально) задаёт метку для элемента управления
- `labelAlignment` - (опционально) определяет положение метки элемента управления. По умолчанию - `"left"`
- `align` - (опционально) задаёт выравнивание элементов управления внутри группы элементов управления. По умолчанию - `"start"`
- `compact` - (опционально) задаёт компактный режим, убирает отступы и рамку. По умолчанию - *false*

### Служебные свойства {#service-properties}

- `$properties` - (опционально) позволяет переопределить значения [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) внутри комплексного элемента управления. Вы можете настроить следующие элементы **Arrange** на основе базовых элементов управления:
    - `x` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задаёт положение элемента Diagram по оси x
    - `y` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задаёт положение элемента Diagram по оси y
    - `width` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задаёт ширину элемента Diagram (px)
    - `height` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задаёт высоту элемента Diagram (px)
    - `angle` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) задаёт угол поворота элемента Diagram

## Пример {#example}

~~~jsx {7-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    {
                        type: "arrange",
                        disabled: true,
                        $properties: {
                            angle: { hidden: true } // конфигурация базового элемента управления "input"
                        }
                    }
                ]
            }
        }
    }
});
~~~
