---
sidebar_label: items
title: Свойство items Toolbar
description: Узнайте о свойстве items компонента Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# items

### Описание {#description}

@short: Необязательный. Массив элементов управления, отображаемых на Toolbar Diagram Editor

### Использование {#usage}

~~~jsx
items?: (object | string)[];
~~~

### Настройка items через строки {#configuring-items-via-strings}

Свойство `items` позволяет указать [**служебные элементы**](guides/diagram_editor/toolbar.md#service-elements) в виде массива строк:

~~~jsx
items: [ "file", "edit", "view", "arrange", "spacer", "scale" ];
~~~

Полный список служебных элементов вы можете посмотреть [здесь](guides/diagram_editor/toolbar.md#service-elements).

### Настройка items через объекты {#configuring-items-via-objects}

Свойство `items` позволяет указать [**служебные элементы**](guides/diagram_editor/toolbar.md#service-elements) и [**базовые элементы**](guides/diagram_editor/toolbar.md#base-elements) в виде массива объектов:

~~~jsx
items: [
    {
        type: string,
        id?: string,
        value?: string,
        hotkey?: string,
        icon?: string,
        hidden?: boolean,
        disabled?: boolean,
        css?: string | string[],
        items?: (string | object)[],
        checkIcon?: (editor: object) => string,
        handler?: (editor: object, event: Event) => void
    }, {...}
];
~~~

#### Параметры {#parameters}

Для всех [**служебных элементов**](guides/diagram_editor/toolbar.md#service-elements), кроме `separator` / `spacer` / `scale`, можно указать объект со следующими параметрами:

- `type` - (обязательный) - тип служебного элемента. Полный список типов служебных элементов вы можете посмотреть [здесь](guides/diagram_editor/toolbar.md)
- `id` - (необязательный) - ID служебного элемента. По умолчанию ID служебного элемента включает `$` и `type` служебного элемента: `$file`
- `value` - (необязательный) - метка служебного элемента
- `hotkey` - (необязательный) - метка сочетания горячих клавиш служебного элемента
- `icon` - (необязательный) - класс css для иконки служебного элемента
- `hidden` - (необязательный) - скрывает служебный элемент
- `disabled` - (необязательный) - отключает служебный элемент
- `css` - (необязательный) - применяет пользовательский класс css к служебному элементу
- `items` - (необязательный) - определяет структуру дочерних элементов
- `checkIcon` - (необязательный) - обработчик, который возвращает класс css иконки. Вызывается со следующим аргументом:
    - `editor` - объект Diagram Editor
- `handler` - (необязательный) - обработчик, который запускается при возникновении события `click` или `inputChange`. Вызывается со следующими аргументами:
    - `editor` - объект Diagram Editor
    - `event` - [нативное событие](https://developer.mozilla.org/en-US/docs/Web/API/Event)

### Пример 1 {#example-1}

В примере ниже показано, как настроить элементы Toolbar через строки:

~~~jsx {10-14}
// Настройка элементов Toolbar через строки
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // отображение Toolbar по умолчанию
        // или настройте Toolbar через объект
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                "file",
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

### Пример 2 {#example-2}

В примере ниже показано, как настроить элементы Toolbar через объекты:

~~~jsx {7-38}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                {
                    type: "file",
                    items: [
                        "importJson",
                        {
                            type: "exportJson",
                            value: "Export to JSON"
                        },
                        {
                            id: "custom_id_1",
                            type: "menuItem",
                            value: "Server export",
                            icon: "dxi dxi-vault",
                            items: [
                                "exportPdf",
                                {
                                    id: "custom_id_2",
                                    type: "menuItem",
                                    value: "PNG",
                                    handler: editor => {
                                        editor.diagram.export.png();
                                        // пользовательская логика здесь
                                    }
                                }
                            ]
                        }
                    ]
                },
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

**Журнал изменений**: Добавлено в v6.0

**Полезная статья**:  [Настройка Toolbar](guides/diagram_editor/toolbar.md)

**Связанный пример**: [Diagram Editor. Режим по умолчанию. Настройка toolbar. Добавлен поиск по фигурам ](https://snippet.dhtmlx.com/846cz71r)
