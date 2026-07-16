---
sidebar_label: Панель редактирования
title: Руководства по редактору — Панель редактирования
description: Узнайте о панели редактирования редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Панель редактирования

Вы можете настраивать элементы управления панели редактирования отдельно для каждого элемента Diagram и для [группы элементов](guides/items_index.md), учитывая различные условия. Для этого используйте конфигурацию [`properties`](api/diagram_editor/editbar/config/properties_property.md) панели редактирования.

Если вы хотите настроить элементы управления панели редактирования для отдельной [фигуры](/category/shapes), укажите соответствующий **тип фигуры** в конфигурации [`properties`](api/diagram_editor/editbar/config/properties_property.md), как показано в примере ниже:

~~~jsx {6-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [ // настройка элементов управления панели редактирования для фигуры "pert"
                    { type: "arrange", $properties: { angle: { hidden: true } }},
                    // ...остальная настройка элементов управления панели редактирования
                ],
                // ...остальная настройка фигур
            }
        }
    }
});
~~~

Чтобы настроить [группу элементов](guides/items_index.md), используйте следующие служебные свойства в конфигурации [`properties`](api/diagram_editor/editbar/config/properties_property.md):

- [`$default`](#configure-editbar-for-the-grid-area) — позволяет настраивать элементы управления панели редактирования, если не выбрано ни одного элемента или выбрано несколько элементов
- [`$shape`](#configure-editbar-for-shapes) — позволяет настраивать элементы управления панели редактирования для [всех фигур, включая пользовательские](/category/shapes)
- [`$group`](#configure-editbar-for-group-elements) — позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`group`](/groups/)
- [`$swimlane`](#configure-editbar-for-swimlanes) — позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`swimlane`](/swimlanes/)
- [`$line`](#configure-editbar-for-lines) — позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`line`](/lines/)
- [`$lineTitle`](#configure-editbar-for-line-titles) — позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`lineTitle`](/line_titles/)

<iframe src="https://snippet.dhtmlx.com/ealq0m4l?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Настройка панели редактирования для области сетки {#configure-editbar-for-the-grid-area}

Служебное свойство `$default` позволяет настраивать элементы управления панели редактирования, если не выбрано ни одного элемента или выбрано несколько элементов.

~~~jsx
properties: {
    $default: [
        {
            type: "gridStep",
            readOnly: true,
            // ...
        }
    ]
}
~~~

**Похожие сложные элементы управления:** [Шаг сетки](api/diagram_editor/editbar/complex_controls/gridstep.md), [Граница](api/diagram_editor/editbar/complex_controls/border.md), [Упорядочивание](api/diagram_editor/editbar/complex_controls/arrange.md)

## Настройка панели редактирования для фигур {#configure-editbar-for-shapes}

Служебное свойство `$shape` позволяет настраивать элементы управления панели редактирования для [всех фигур, включая пользовательские](/category/shapes).

~~~jsx
properties: {
    $shape: [
        {
            type: "position",
            $properties: {
                dx: { disabled: true },
                // ...
            },
            // ...
        }
    ]
}
~~~

**Похожие сложные элементы управления:** [Граница](api/diagram_editor/editbar/complex_controls/border.md), [Упорядочивание](api/diagram_editor/editbar/complex_controls/arrange.md), [Позиция](api/diagram_editor/editbar/complex_controls/position.md), [Размер](api/diagram_editor/editbar/complex_controls/size.md), [Выравнивание текста](api/diagram_editor/editbar/complex_controls/textalign.md), [Стиль текста](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Настройка панели редактирования для элементов группы {#configure-editbar-for-group-elements}

Служебное свойство `$group` позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`group`](/groups/).

~~~jsx
properties: {
    $group: [
        {
            type: "header",
            label: "Group header style",
            // ...
        }
    ]
}
~~~

**Похожие сложные элементы управления:** [Граница](api/diagram_editor/editbar/complex_controls/border.md), [Упорядочивание](api/diagram_editor/editbar/complex_controls/arrange.md), [Заголовок](api/diagram_editor/editbar/complex_controls/header.md), [Общий заголовок](api/diagram_editor/editbar/complex_controls/headercommon.md), [Позиция заголовка](api/diagram_editor/editbar/complex_controls/headerposition.md), [Размер](api/diagram_editor/editbar/complex_controls/size.md), [Выравнивание текста](api/diagram_editor/editbar/complex_controls/textalign.md), [Стиль текста](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Настройка панели редактирования для дорожек {#configure-editbar-for-swimlanes}

Служебное свойство `$swimlane` позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`swimlane`](/swimlanes/).

~~~jsx
properties: {
    $swimlane: [
        {
            type: "header",
            label: "Swimlane header style",
            // ...
        }
    ]
}
~~~

**Похожие сложные элементы управления:** [Граница](api/diagram_editor/editbar/complex_controls/border.md), [Упорядочивание](api/diagram_editor/editbar/complex_controls/arrange.md), [Заголовок](api/diagram_editor/editbar/complex_controls/header.md), [Общий заголовок](api/diagram_editor/editbar/complex_controls/headercommon.md), [Позиция заголовка](api/diagram_editor/editbar/complex_controls/headerposition.md), [Размер](api/diagram_editor/editbar/complex_controls/size.md), [Выравнивание текста](api/diagram_editor/editbar/complex_controls/textalign.md), [Стиль текста](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Настройка панели редактирования для линий {#configure-editbar-for-lines}

Служебное свойство `$line` позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`line`](/lines/).

~~~jsx
properties: {
    $line: [
        {
            type: "lineShape",
            label: "Line connection type",
            // ...
        }
    ]
}
~~~

**Похожие сложные элементы управления:** [Граница](api/diagram_editor/editbar/complex_controls/border.md), [Форма линии](api/diagram_editor/editbar/complex_controls/lineshape.md), [Вид указателя](api/diagram_editor/editbar/complex_controls/pointerview.md)

## Настройка панели редактирования для заголовков линий {#configure-editbar-for-line-titles}

Служебное свойство `$lineTitle` позволяет настраивать элементы управления панели редактирования для всех элементов с типом [`lineTitle`](/line_titles/).

~~~jsx
properties: {
    $lineTitles: [
        {
            type: "textAlign",
            label: "Text align",
            // ...
        },
        // ...
    ]
}
~~~

**Похожие сложные элементы управления:** [Выравнивание текста](api/diagram_editor/editbar/complex_controls/textalign.md), [Стиль текста](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Создание и настройка пользовательских элементов управления панели редактирования {#create-and-configure-custom-editbar-controls}

Вы можете использовать свойство [`controls`](api/diagram_editor/editbar/config/controls_property.md) представления панели редактирования, чтобы создать пользовательский элемент управления на основе [**базовых элементов управления**](api/diagram_editor/editbar/basic_controls_overview.md) и/или [**сложных элементов управления**](api/diagram_editor/editbar/complex_controls_overview.md).

:::warning
Не рекомендуется использовать тип элемента управления по умолчанию (см. [***базовые элементы управления***](api/diagram_editor/editbar/basic_controls_overview.md) и/или [***сложные элементы управления***](api/diagram_editor/editbar/complex_controls_overview.md)) в качестве имени для пользовательского элемента управления. Используйте уникальное имя для каждого пользовательского элемента управления, чтобы избежать ошибок!
:::

После создания пользовательского элемента управления примените его к нужному элементу Diagram с помощью свойства [`properties`](api/diagram_editor/editbar/config/properties_property.md).

<iframe src="https://snippet.dhtmlx.com/w8mrh3ay?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
