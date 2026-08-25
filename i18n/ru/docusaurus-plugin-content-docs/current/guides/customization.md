---
sidebar_label: Настройка элементов
title: Настройка элементов
description: Вы можете узнать о настройке элементов в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Настройка элементов {#customizing-items}

Вы можете изменять внешний вид элементов диаграммы с помощью различных [конфигурационных свойств](/category/items-api/) внутри их объектов. Вы также можете изменить внешний вид диаграммы, создавая пользовательские фигуры.

## Стилизация фигур и линий с помощью конфигурационных свойств {#styling-shapes-and-lines-via-the-configuration-properties}

### Стилизация фигур {#styling-shapes}

Объект фигуры предоставляет широкий набор свойств, которые можно использовать для изменения внешнего вида фигур.

<iframe src="https://snippet.dhtmlx.com/a9t2z2dt?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

Хороший способ оформить все фигуры одного типа сразу — задать настройки стилизации для фигур через свойство [`defaults`](api/diagram/defaults_property.md) диаграммы:

~~~jsx
const defaults = {
  start: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  end: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  // ...
};
~~~

[Полный список свойств объекта фигуры](shapes/configuration_properties.md).

### Стилизация линий {#styling-lines}

Чтобы изменить внешний вид соединительных линий, используйте необходимые конфигурационные свойства внутри объекта линии.

~~~jsx
const data = [
    {
      id: "1-2",
      from: "1",
      to: "2",
      type: "line",
      strokeType: "dash", // пунктирная линия
      stroke: "#fa55d1" // цвет линии
    }
];
~~~

[Полный список свойств объекта линии](lines/configuration_properties.md).

Посмотрите пример:

<iframe src="https://snippet.dhtmlx.com/um7gy2tb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Определение шаблона фигуры {#defining-the-shapes-template}

Вы можете создать индивидуально настроенную диаграмму, добавляя в неё новые типы фигур и определяя для них шаблоны. Для этого используйте метод [`addShape()`](api/diagram/addshape_method.md) объекта диаграммы.

### Пример в режиме по умолчанию {#example-in-the-default-mode}

<iframe src="https://snippet.dhtmlx.com/2tzyfois?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Пример в режиме org chart {#example-in-the-org-chart-mode}

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Пример в режиме mindmap {#example-in-the-mindmap-mode}

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Пример в режиме PERT {#example-in-the-pert-mode}

<iframe src="https://snippet.dhtmlx.com/mtk92awx?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Стилизация целевых фигур {#styling-target-shapes}

При использовании диаграмм в режимах org chart и mindmap в Diagram Editor вы можете задать пользовательский стиль для целевых элементов.

:::note
Стилизация не применяется к родителю перемещаемого элемента, а также к перемещаемому элементу, у которого установлено `giveItem: false`
:::

~~~jsx
<style>
    .dhx_diagram_item.dhx_action__target--take {
        // стили для целевого элемента, который может захватить другой элемент
    }
    .dhx_diagram_item.dhx_action__target--doesnt_take {
        // стили для целевого элемента, который не может захватить другой элемент
    }
</style>
~~~

## Стилизация групп с помощью конфигурационных свойств {#styling-groups-via-the-configuration-properties}

### Стилизация группы {#styling-the-group}

Чтобы задать пользовательский стиль для группы, используйте свойство `style` [объекта группы](groups/configuration_properties.md). Например:

<iframe src="https://snippet.dhtmlx.com/pdkgis8g?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Стилизация заголовка группы {#styling-the-group-header}

Вы можете изменить стиль заголовка группы по умолчанию с помощью атрибутов свойства `header` [объекта группы](groups/configuration_properties.md).

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Стилизация дорожек с помощью конфигурационных свойств {#styling-swimlanes-via-the-configuration-properties}

### Стилизация дорожки {#styling-the-swimlane}

Вы можете настроить параметры `strokeWidth`, `stroke` и `fill` дорожки с помощью свойства `style` [объекта дорожки](swimlanes/configuration_properties.md#properties-of-a-swimlane):

~~~jsx
const data = [
    {
        "type": "$swimlane",
        "width": 970,
        "height": 790,
        "header": {
            "text": "Game levels and locations",
            "closable": true
        },
        "layout": [
            ["1"],
            ["2"],
            ["3"],
            ["4"],
            ["5"]
        ],
        "style": {
            "strokeWidth": 5,
            "stroke": "#083796",
            "fill": "#D4DAE4"
        }
    }
];
~~~

### Стилизация заголовков и подзаголовков дорожки {#styling-the-swimlane-headerssub-headers}

Свойства `header`, `subHeaderRows` и `subHeaderCols` [объекта дорожки](swimlanes/configuration_properties.md#properties-of-a-swimlane) включают наборы дополнительных атрибутов для настройки заголовка и подзаголовков дорожки.

Например, вы можете изменить цвета фона верхних подзаголовков дорожки с помощью свойства `subHeaderCols`:

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template"
         },
        "layout": [
            [1, 2, 3, 4]
        ],
        "subHeaderCols": {
            "headers": [
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    }
];
~~~

Посмотрите полный пример:

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Стилизация ячеек дорожки {#styling-swimlane-cells}

Если вам нужно настроить отдельную ячейку дорожки, используйте свойство `style` [объекта ячейки дорожки](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell) (`type:"$sgroup"`).

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ],
        // ...
    },
    {
        "id": 1,
        "type": "$sgroup",
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    }
];
~~~

**Связанный пример**: [Diagram. Стандартный режим. Шаблон диаграммы Waterfall](https://snippet.dhtmlx.com/k5vlvj8i)
