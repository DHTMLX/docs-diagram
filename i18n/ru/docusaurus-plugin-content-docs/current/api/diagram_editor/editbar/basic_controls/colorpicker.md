---
sidebar_label: Colorpicker
title: Базовые элементы управления Editbar - Colorpicker
description: Ознакомьтесь с элементом управления Colorpicker панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Suite.
---

# Colorpicker

@short: Базовый элемент управления для выбора цвета.

![Элемент управления Colorpicker](/img/editbar-basic-controls/colorpicker.png)

## Использование {#usage}

~~~jsx
{
    type: "colorpicker",
    key?: string | string[],
    wrap?: boolean, // по умолчанию false

    css?: string,
    disabled?: boolean, // по умолчанию false
    hidden?: boolean, // по умолчанию false
    height?: string | number | "content", // по умолчанию "content"
    width?: string | number | "content", // по умолчанию "content"
    padding?: string | number,

    customColors?: string[],
    grayShades?: boolean, // по умолчанию true
    icon?: string,
    mode?: "palette" | "picker", // по умолчанию "palette"
    palette?: string[][],
    paletteOnly?: boolean, // по умолчанию false
    pickerOnly?: boolean, // по умолчанию false
    placeholder?: string,

    // при `wrap:true` см. свойства label для Fieldset
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

- `type` - (обязательный) тип элемента управления. Установите значение `"colorpicker"`
- `key` - (необязательный) имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
- `wrap` - (необязательный) включает отображение внешнего обрамления. По умолчанию — *false*
- `css` - (необязательный) добавляет CSS-классы к элементу управления
- `disabled` - (необязательный) определяет, включен (*false*) или отключен (*true*) элемент управления. По умолчанию — *false*
- `hidden` - (необязательный) определяет, скрыт ли элемент управления. По умолчанию — *false*
- `height` - (необязательный) высота элемента управления. По умолчанию — `"content"`
- `width` - (необязательный) ширина элемента управления. По умолчанию — `"content"`
- `padding` - (необязательный) задает отступ между ячейкой и рамкой элемента управления Colorpicker
- `customColors` - (необязательный) отображает раздел с пользовательскими цветами в нижней части Colorpicker
- `grayShades` - (необязательный) определяет, отображается ли в палитре раздел с оттенками серого. По умолчанию — *true*
- `icon` - (необязательный) CSS-класс иконки из используемого шрифта иконок
- `mode` - (необязательный) режим элемента управления: `"palette"` | `"picker"`. По умолчанию — `"palette"`
- `palette` - (необязательный) содержит массивы цветов, которые должны отображаться в Colorpicker
- `paletteOnly` - (необязательный) определяет, отображается ли Colorpicker только в режиме палитры. По умолчанию — *false*
- `pickerOnly` - (необязательный) определяет, отображается ли Colorpicker только в режиме выбора цвета. По умолчанию — *false*
- `placeholder` - (необязательный) подсказка для поля ввода
- `label` - (необязательный) задает подпись элемента управления
- `labelPosition` - (необязательный) определяет положение подписи: `"left"` | `"top"`. По умолчанию — `"top"`
- `labelWidth` - (необязательный) задает ширину подписи элемента управления

### Служебные свойства и методы {#service-properties-and-methods}

:::warning
Обратите внимание: мы настоятельно рекомендуем не переопределять служебные свойства и методы для стандартных типов элементов управления, поскольку это может привести к нарушению их работы.
:::

- `$on` - (необязательный) - позволяет задать слушатель события. Объект содержит следующие свойства:
    - `eventName`  - колбэк-функция, которая вызывается со следующими параметрами:
        - `object` - объект со следующими свойствами:
            - `control` - элемент управления [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) виджета Form
            - `editor` - объект Diagram Editor
            - `id` - id элемента Diagram
        - `arguments` - (необязательный) - [исходные аргументы события](https://docs.dhtmlx.com/suite/category/form-colorpicker-events/)
- `$handler` - (необязательный) - колбэк-функция, которая позволяет обрабатывать действия при возникновении событий `change` и `input` элемента управления [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) виджета Form и события `change` DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `id` - id элемента Diagram
        - `key` - имя заданного/изменяемого свойства или путь к нему в объекте элемента Diagram
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) виджета Form, на основе которого создан компонент
        - `value` - новое значение элемента управления [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) виджета Form
- `$setValue` - (необязательный) - колбэк-функция, которая позволяет задать значение элемента управления [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) виджета Form при инициализации элемента управления и при изменении значения в DataCollection. Вызывается со следующим параметром:
    - `object` - объект со следующими свойствами:
        - `editor` - объект Diagram Editor
        - `control` - объект элемента управления [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) виджета Form, на основе которого создан компонент
        - `value` - значение элемента Diagram
- `$layout` - (необязательный) - колбэк-функция, которая позволяет задать структуру элемента управления. Возвращает конфигурацию элемента управления [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) виджета Form. Вызывается со следующим параметром:
    - `object` - конфигурация элемента управления без служебных свойств

## Пример {#example}

~~~jsx {7-25}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "colorpicker",
                        wrap: true,
                        label: "Fill",
                        placeholder: "Select color",
                        grayShades: false,
                        palette: [
                            ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900", "#7fc7af", "#dad8a7"],
                            ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b", "#948c75", "#d5ded9"],
                            ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a", "#cbe86b", "#f2e9e1"],
                            ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58", "#dce9be", "#555152"],
                            ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc", "#005f6b", "#008c9e"],
                            ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634", "#73626e", "#b38184"],
                            ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f", "#fc913a", "#f9d423"],
                            ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2", "#fecea8", "#ff847c"],
                            ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951", "#80bca3", "#f6f7bd"],
                            ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5", "#40c0cb", "#f9f2e7"]
                        ]
                    }
                ]
            }
        }
    }
});
~~~
