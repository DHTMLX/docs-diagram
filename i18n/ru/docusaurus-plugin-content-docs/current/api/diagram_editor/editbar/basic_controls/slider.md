---
sidebar_label: Slider
title: Основные элементы управления Editbar - Slider
description: Изучите элемент управления Slider панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Slider

@short: Базовый элемент управления для выбора числового значения путём перемещения ползунка вдоль шкалы с фиксированным набором значений.

![Элемент управления Slider](/img/editbar-basic-controls/slider.png)

## Использование {#usage}

~~~jsx
{
    type: "slider",
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    css?: string,
    padding?: string | number,
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"

    inverse?: boolean, // по умолчанию false
    majorTick?: number,
    max?: number, // по умолчанию 100
    min?: number, // по умолчанию 0
    mode?: "vertical" | "horizontal", // по умолчанию "horizontal"
    range?: boolean, // по умолчанию false
    step?: number, // по умолчанию 1
    tick?: number,
    tickTemplate?: (position: number) => string,
    tooltip?: boolean, // по умолчанию true

    // для `wrap:true` ознакомьтесь со свойствами label компонента Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // по умолчанию "top"

    // служебные свойства и методы
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

## Описание {#description}

### Основные свойства {#basic-properties}

- `type` - (обязательный) тип элемента управления. Установите значение `"slider"`
- `key` - (необязательный) имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (необязательный) позволяет отображать внешнюю обёртку. По умолчанию *false*
- `disabled` - (необязательный) определяет, включён (*false*) или отключён (*true*) элемент управления. По умолчанию *false*
- `hidden` - (необязательный) определяет, скрыт ли элемент управления. По умолчанию *false*
- `css` - (необязательный) добавляет стилевые классы к элементу управления
- `height` - (необязательный) высота элемента управления. По умолчанию `"content"`
- `width` - (необязательный) ширина элемента управления. По умолчанию `"content"`
- `padding` - (необязательный) задаёт отступ между ячейкой и границей элемента управления slider
- `inverse` - (необязательный) включает/отключает инверсный режим слайдера. По умолчанию *false*
- `majorTick` - (необязательный) задаёт интервал отображения числовых значений на шкале слайдера
- `max` - (необязательный) максимальное значение слайдера. По умолчанию *100*
- `min` - (необязательный) минимальное значение слайдера. По умолчанию *0*
- `mode` - (необязательный) направление шкалы слайдера. По умолчанию `"horizontal"`
- `range` - (необязательный) включает/отключает выбор диапазона значений на слайдере. По умолчанию *false*
- `step` - (необязательный) шаг, с которым будет перемещаться ползунок слайдера. По умолчанию *1*
- `tick` - (необязательный) задаёт интервал шагов для отображения шкалы слайдера
- `tickTemplate` - (необязательный) задаёт шаблон для отображения значений на шкале
- `tooltip` - (необязательный) включает всплывающие подсказки со значениями делений при наведении на ползунок слайдера. По умолчанию *true*

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание, что мы настоятельно не рекомендуем переопределять служебные свойства и методы для стандартных типов элементов управления, так как это может нарушить их функциональность.
:::

- `$on` - (необязательный) - позволяет задать обработчик события. Объект содержит следующие свойства:
    - `eventName`  - функция обратного вызова, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-slider-events/)
- `$handler` - (необязательный) - функция обратного вызова, которая позволяет обрабатывать действия при возникновении события `change` элемента управления [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя задаваемого/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form, на основе которого построен компонент
        - `value` - новое значение элемента управления [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form
- `$setValue` - (необязательный) - функция обратного вызова, которая позволяет задавать значение элемента управления [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form, на основе которого построен компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - функция обратного вызова, которая позволяет задавать структуру элемента управления. Возвращает конфигурацию элемента управления [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $lineTitle: [
                    {
                        type: "slider",
                        key: "distance",
                        label: "Distance",
                        wrap: true,
                        min: 0,
                        max: 100,
                        step: 1,
                        tick: 5,
                        majorTick: 10,
                        tickTemplate: value => value
                    },
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1", "type": "rectangle", "text": "shape" },
    { "id": "shape_2","type": "rectangle", "text": "shape", "x": 400 },
    { "id": "line", "type": "line", "from": "shape_1", "to": "shape_2" },
    { "type": "lineTitle", "parent": "line", "text": "Title", "distance": 50 }
]);
~~~
