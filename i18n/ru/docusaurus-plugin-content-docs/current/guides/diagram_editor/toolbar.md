---
sidebar_label: Панель инструментов
title: Руководства редактора - Панель инструментов
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о панели инструментов редактора. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Панель инструментов {#toolbar}

Панель инструментов — это верхняя часть Diagram Editor, которая помогает пользователям управлять процессом редактирования.

![](/img/diagram-editor-toolbar/scale-default-mode.png)

Чтобы настроить панель инструментов, вы можете использовать следующие свойства:

- [`css`](api/diagram_editor/toolbar/config/css_property.md) — применяет пользовательский класс CSS

- [`navigationType`](api/diagram_editor/toolbar/config/navigationtype_property.md) — определяет действие, которое активирует элемент панели инструментов. Вы можете указать одно из следующих действий:
    - `"click"` — активирует элемент панели инструментов при клике пользователя
    - `"pointer"` — активирует элемент панели инструментов при наведении указателя мыши

- [`items`](api/diagram_editor/toolbar/config/items_property.md) — массив [`items`](#service-elements) (элементов управления), размещённых на панели инструментов. Есть 2 способа настроить элементы панели инструментов:
    - [**Настройка элементов с помощью строк**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-strings)
    - [**Настройка элементов с помощью объектов**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects)

~~~jsx {9-40}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // отображает панель инструментов по умолчанию
        // или настройте панель инструментов через объект
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
                                        // custom logic here
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

## Служебные элементы {#service-elements}

Элементы панели инструментов представлены **служебными элементами**. Вы можете использовать и настраивать следующие служебные элементы:

- `file` — формирует группу служебных элементов для импорта и экспорта файлов

    <details>
    Элемент `file` имеет следующую структуру:

    ~~~jsx
    - file
        - importJson
        - export
            - exportJson
            - exportPdf
            - exportPng
    ~~~

    Набор элементов `file` выглядит следующим образом:

    ![](/img/diagram-editor-toolbar/file-default-mode.png)
    </details>

- `importJson` — открывает диалоговое окно для импорта файла в формате JSON

- `export` — формирует группу служебных элементов для экспорта файла в выбранном формате

    <details>
    Элемент `export` имеет следующую структуру:

    ~~~jsx
    - export
        - exportJson
        - exportPdf
        - exportPng
    ~~~
    </details>

- `exportJson` — экспортирует файл в формате JSON

- `exportPdf` — экспортирует файл в формате PDF

- `exportPng` — экспортирует файл в формате PNG

<hr/>

- `edit` — формирует группу служебных элементов для управления и редактирования фигур, линий, групп и дорожек

    <details>
    В режиме `default` набор элементов `edit` имеет следующую структуру по умолчанию:

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - duplicate
        - copy
        - paste
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-default-mode.png)

    В режимах `org`/`mindmap` набор элементов `edit` имеет следующую структуру по умолчанию:

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-org-mode.png)
    </details>

- `undo` — выполняет шаг назад в истории изменений

- `redo` — выполняет шаг вперёд в истории изменений

- `duplicate` — дублирует выбранные элементы

- `copy` — копирует выбранные файлы в объект `model`

- `paste` — вставляет скопированные файлы из объекта `model`

- `copyStyle` — копирует стили выбранного элемента в объект `model`

- `pasteStyle` — применяет стили, сохранённые в объекте `model`, к выбранным элементам

- `selectAll` — выбирает все элементы, доступные для выбора

- `selectNone` — снимает выделение со всех доступных элементов

<hr/>

- `view` — формирует группу служебных элементов для управления отображением элементов Diagram Editor

    <details>
    В режиме `default` набор элементов `view` имеет следующую структуру по умолчанию:

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - shapebar
        - editbar
        - grid
        - separator
        - connectionPoints
        - resizePoints
        - magnetic
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-default-mode.png)

    В режимах `org`/`mindmap` набор элементов `view` имеет следующую структуру по умолчанию:

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - editbar
        - separator
        - grid
        - separator
        - resizePoints
        - itemsDraggable
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-org-mode.png)
    </details>

- `theme` — формирует группу служебных элементов для применения тем

    <details>
    Элемент `theme` имеет следующую структуру:

    ~~~jsx
    - theme
        - themeLight
        - themeDark
        - themeLightContrast
        - themeDarkContrast
    ~~~
    </details>

- `themeLight` — применяет тему **Light**

- `themeDark` — применяет тему **Dark**

- `themeLightContrast` — применяет тему **LightContrast**

- `themeDarkContrast` — применяет тему **DarkContrast**

- `shapebar` — показывает/скрывает панель `Shapebar`

- `editbar` — показывает/скрывает панель `Editbar`

- `grid` — показывает/скрывает `grid` в области сетки

- `connectionPoints` — показывает/скрывает **точки соединения**

- `resizePoints` — показывает/скрывает **точки изменения размера**

- `magnetic` — включает/выключает функциональность `magnetic`

- `zoomIn` — увеличивает значение масштаба на 0.05 (5%)

- `zoomOut` — уменьшает значение масштаба на 0.05 (5%)

<hr/>

- `arrange` — формирует группу служебных элементов для упорядочивания элементов Diagram Editor

    <details>
    В режиме `default` набор элементов `arrange` имеет следующую структуру по умолчанию:

    ~~~jsx
    - arrange
        - layout
            - layoutMode
                - layoutModeDirect
                - layoutModeEdges
            - separator
            - layoutOrthogonal
            - layoutRadial
        - align
            - alignHorizontalLeft
            - alignHorizontalCenter
            - alignHorizontalRight
            - separator
            - alignVerticalTop
            - alignVerticalCenter
            - alignVerticalBottom
        - distribute
            - distributeVertical
            - distributeHorizontal
    ~~~

    ![](/img/diagram-editor-toolbar/arrange-default-mode.png)
    </details>

- `layout` — формирует группу служебных элементов для автоматического размещения элементов Diagram Editor

    <details>
    Элемент `layout` имеет следующую структуру:

    ~~~jsx
    - layout
        - layoutMode
            - layoutModeDirect
            - layoutModeEdges
        - separator
        - layoutOrthogonal
        - layoutRadial
    ~~~
    </details>

- `layoutMode` — формирует группу служебных элементов для управления режимом автоматического размещения

    <details>
    Элемент `layoutMode` имеет следующую структуру:

    ~~~jsx
    - layoutMode
        - layoutModeDirect
        - layoutModeEdges
    ~~~
    </details>

- `layoutModeDirect` — применяет режим `direct` для соединителей элементов

- `layoutModeEdges` — применяет режим `edges` для соединителей элементов

- `layoutOrthogonal` — применяет режим `orthogonal` для расположения элементов

- `layoutRadial` — применяет режим `radial` для расположения элементов

- `align` — формирует группу служебных элементов для управления выравниванием элементов Diagram Editor

    <details>
    Элемент `align` имеет следующую структуру:

    ~~~jsx
    - align
        - alignHorizontalLeft
        - alignHorizontalCenter
        - alignHorizontalRight
        - separator
        - alignVerticalTop
        - alignVerticalCenter
        - alignVerticalBottom
    ~~~
    </details>

- `alignHorizontalLeft` — выравнивает элементы по горизонтали слева

- `alignHorizontalCenter` — выравнивает элементы по горизонтали по центру

- `alignHorizontalRight` — выравнивает элементы по горизонтали справа

- `alignVerticalTop` — выравнивает элементы по вертикали сверху

- `alignVerticalCenter` — выравнивает элементы по вертикали по центру

- `alignVerticalBottom` — выравнивает элементы по вертикали снизу

- `distribute` — формирует группу служебных элементов для распределения элементов Diagram Editor

    <details>
    Элемент `distribute` имеет следующую структуру:
    ~~~jsx
    - distribute
        - distributeVertical
        - distributeHorizontal
    ~~~
    </details>

- `distributeVertical` — распределяет элементы по вертикали

- `distributeHorizontal` — распределяет элементы по горизонтали

<hr/>

- `scale` — элемент управления, который позволяет пользователям увеличивать или уменьшать значение масштаба на 0.05 (5%)

    <details>
    Элемент `scale` выглядит следующим образом:

    ![](/img/diagram-editor-toolbar/scale-default-mode.png)
    </details>

- [`separator`](https://docs.dhtmlx.com/suite/toolbar/api/api_separator_properties/) — горизонтальная (между пунктами меню) или вертикальная (между элементами управления панели инструментов) линия, разделяющая элементы/группы элементов между собой.

- [`spacer`](https://docs.dhtmlx.com/suite/toolbar/api/api_spacer_properties/) — пространство на панели инструментов, используемое для выравнивания элементов управления

## Базовые элементы {#base-elements}

Помимо [**служебных элементов**](#service-elements), вы также можете указывать и настраивать следующие **базовые элементы**, используя подход с [объектами](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects):

- [Button](https://docs.dhtmlx.com/suite/toolbar/button/)
- [Custom HTML](https://docs.dhtmlx.com/suite/toolbar/customhtmlbutton/)
- [Datepicker](https://docs.dhtmlx.com/suite/toolbar/datepicker/)
- [ImageButton]( https://docs.dhtmlx.com/suite/toolbar/image_button/)
- [Input](https://docs.dhtmlx.com/suite/toolbar/input/)
- [MenuItem](https://docs.dhtmlx.com/suite/toolbar/menuitem/)
- [NavItem](https://docs.dhtmlx.com/suite/toolbar/navitem/)
- [SelectButton](https://docs.dhtmlx.com/suite/toolbar/selectbutton/)
- [Separator](https://docs.dhtmlx.com/suite/toolbar/separator/)
- [Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/)
- [Title](https://docs.dhtmlx.com/suite/toolbar/title/)

В примере ниже показано, как добавить элемент управления [Button](https://docs.dhtmlx.com/suite/toolbar/button/) на панель инструментов:

~~~jsx {8-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org", // "default" | "org" | "mindmap"
    view: {
        // toolbar: true, // отображает панель инструментов по умолчанию
        // или настройте панель инструментов через объект
        toolbar: {
            items: [
                {
                    type: "button",
                    value: "Best button"
                }
            ]
        }
    }
});
~~~

В дополнение к внутренним свойствам **базовых элементов** (за исключением [Separator](https://docs.dhtmlx.com/suite/toolbar/separator/), [Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/) и [Title](https://docs.dhtmlx.com/suite/toolbar/title/)) вы также можете использовать следующие свойства:

- `checkIcon` - (необязательный) - обработчик, который возвращает класс CSS для иконки. Он вызывается со следующим аргументом:
    - `editor` - объект Diagram Editor

~~~jsx
checkIcon?: (editor: IDiagramEditor) => string; // Используйте только для базовых элементов, содержащих иконку
~~~

- `handler` - (необязательный) - обработчик, который запускается при возникновении события `click` или `inputChange`. Он вызывается со следующими аргументами:
    - `editor` - объект Diagram Editor
    - `event` - [нативное событие](https://developer.mozilla.org/en-US/docs/Web/API/Event)

~~~jsx
handler?: (editor: object, event: Event) => void;
~~~

**Связанный пример**: [Diagram с редактором. Режим по умолчанию. Настройка карточек, панели редактирования, панели инструментов и панели фигур](https://snippet.dhtmlx.com/1p0wemnn)
