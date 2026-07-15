---
sidebar_label: Конфигурация
title: Конфигурация Diagram
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о конфигурации Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Конфигурация Diagram {#diagram-configuration}

DHTMLX Diagram предоставляет широкий набор опций для конфигурации. Вы можете изменять масштаб диаграммы, задавать тип фигур и линий по умолчанию, устанавливать отступы между фигурами, применять выделение и настраивать панель инструментов со значками для фигур.

### Настройка режима Diagram {#setting-the-diagram-mode}

Вы можете выбрать один из следующих режимов Diagram: `"default"`, `"org"`, `"mindmap"`, `"pert"`. Их подробное описание приведено в статье [Обзор Diagram](/). Вы можете указать необходимый тип с помощью параметра конфигурации [type](api/diagram/type_property.md), как показано ниже:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // `type: "org"` | `type: "mindmap"` | `type: "pert"`
});
diagram.data.parse(data);
~~~

### Настройка типа фигур по умолчанию {#setting-the-default-shape-type}

Вы можете задать тип по умолчанию для всех фигур с помощью атрибута [`defaultShapeType`](api/diagram/defaultshapetype_property.md) объекта конфигурации диаграммы:

~~~jsx {3}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // или type: "org", или type: "mindmap"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

Это значение будет применено, если объект конфигурации фигуры не содержит свойство `type`.

Типы фигур по умолчанию:

- `"rectangle"` - для диаграммы в режиме по умолчанию
- `"card"`  - для диаграммы в режиме по умолчанию или в режиме организационной диаграммы
- `"topic"` - для диаграммы в режиме mindmap
- `"task"` - для диаграммы в режиме PERT

## Настройка типа линий по умолчанию {#setting-the-default-line-type}

Вы можете задать общий тип для всех соединительных линий диаграммы с помощью параметра `lineType` свойства [`lineConfig`](api/diagram/lineconfig_property.md) объекта конфигурации диаграммы:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

Это значение применяется, если объект линии не содержит свойство `type`.

## Настройка конфигурации фигуры по умолчанию {#setting-the-default-configuration-of-a-shape}

Вы можете избежать работы с большим набором данных при его подготовке для загрузки в диаграмму. Вы можете задать конфигурацию по умолчанию для всех фигур и линий нужных типов и таким образом сократить количество записей в коде.

Для этого используйте свойство [`defaults`](api/diagram/defaults_property.md) объекта конфигурации диаграммы:

<iframe src="https://snippet.dhtmlx.com/7bn52dl1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Объект `defaults` содержит набор пар `key:value`, где *key* — это тип фигуры или линии, а *value* — соответствующая конфигурация фигуры или линии по умолчанию.

:::note
Атрибуты `type` и `id` нельзя задавать в конфигурации фигуры/линии по умолчанию
:::

Ознакомьтесь с полным списком свойств конфигурации [фигуры](shapes/configuration_properties.md) и [линии](lines/configuration_properties.md).

## Расположение фигур в режиме mindmap Diagram {#arranging-shapes-in-the-mindmap-mode-of-diagram}

В режиме mindmap Diagram расположение дочерних фигур относительно корневой фигуры определяется автоматически основным алгоритмом.
Чтобы изменить направление дочерних фигур по умолчанию, используйте свойство конфигурации [`typeConfig`](api/diagram/typeconfig_property.md) при инициализации диаграммы.

:::note
Свойство конфигурации `typeConfig` недоступно в Diagram Editor
:::

Это свойство позволяет:

- [задать направление сразу для всех дочерних фигур](#setting-direction-for-all-child-shapes)
- [указать отдельное направление для конкретных дочерних фигур](#setting-direction-for-individual-child-shape)

### Настройка направления для всех дочерних фигур {#setting-direction-for-all-child-shapes}

Чтобы разместить дочерние фигуры справа/слева от корневой фигуры, используйте атрибут `direction` свойства [`typeConfig`](api/diagram/typeconfig_property.md):

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Настройка направления для отдельной дочерней фигуры {#setting-direction-for-individual-child-shape}

Вы можете задать обязательное направление для конкретных дочерних фигур с помощью атрибута `side` свойства [`typeConfig`](api/diagram/typeconfig_property.md). Этот атрибут представляет собой объект, содержащий набор пар `key:value`, где *key* — направление фигур (left, right), а *value* — массив с идентификаторами фигур.

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Остальные дочерние фигуры, не заданные в опции side, будут расположены автоматически в соответствии с основным алгоритмом.

## Настройка формата даты в режиме PERT Diagram {#setting-date-format-in-the-pert-mode-of-diagram}

В режиме PERT Diagram вы можете задать необходимый формат отображения дат в фигурах типа `task`. Для этого используйте атрибут `dateFormat` свойства [`typeConfig`](api/diagram/typeconfig_property.md):

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

## Позиционирование Diagram и фигур {#positioning-diagram-and-shapes}

Вы можете задать позицию диаграммы на странице и установить отступы для фигур внутри атрибута [`margin`](api/diagram/margin_property.md) объекта конфигурации диаграммы:

<iframe src="https://snippet.dhtmlx.com/bwe9vm6i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Настройка автоматического расположения фигур {#configuring-autoplacement-for-shapes}

Библиотека DHTMLX Diagram позволяет настроить параметры автоматического расположения связанных фигур Diagram в иерархической структуре. Вы можете задать свойство [`autoplacement`](api/diagram/autoplacement_property.md) в объекте конфигурации Diagram и настроить режим соединения фигур, а также расстояние между несвязанными диаграммами:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100,
        placeMode: "radial",
        itemPadding: 10,
        levelPadding: 10
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

Это свойство может содержать следующие опции:

- `mode` - (*string*) необязательный, режим соединения фигур, `"direct"` (по умолчанию) или `"edges"`
- `graphPadding` - (*number*) необязательный, задаёт расстояние между несвязанными диаграммами, по умолчанию *200*
- `placeMode` - (*string*) необязательный, задаёт режим расположения фигур, `"orthogonal"` (по умолчанию) или `"radial"`
- `itemPadding` - (*number*) необязательный, минимальный отступ между элементами (минимальное значение — *1*), по умолчанию *20*
- `levelPadding` - (*number*) необязательный, минимальный отступ между уровнями иерархии (минимальное значение — *1*), по умолчанию *20*

:::note
Автоматическое расположение будет применено только после вызова метода [`autoPlace()`](api/diagram/autoplace_method.md). Оно работает только в режиме по умолчанию диаграммы и только для фигур. Автоматическое расположение не работает при использовании групп или дорожек.
:::

![Радиальное автоматическое расположение с настройками отступов](/img/radial_autoplacement.png)

**Связанный пример**: [Diagram. Режим по умолчанию. Радиальное автоматическое расположение с настройками отступов](https://snippet.dhtmlx.com/huut0l1s)

## Настройка масштаба Diagram {#adjusting-the-diagram-scale}

При необходимости вы можете масштабировать диаграмму под ваше приложение. Это можно сделать с помощью опции [`scale`](api/diagram/scale_property.md).
По умолчанию её значение равно 1. Поэтому, чтобы увеличить диаграмму, задайте значение опции больше 1, а чтобы уменьшить — меньше 1 соответственно.

<iframe src="https://snippet.dhtmlx.com/9h89c3gl?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Настройка панели инструментов для фигур {#setting-toolbar-for-shapes}

DHTMLX Diagram позволяет задать панель инструментов со значками для фигур Diagram, чтобы упростить взаимодействие с ними. Вы можете включить панель инструментов фигуры с помощью опции [`toolbar`](api/diagram/toolbar_property.md) объекта конфигурации диаграммы:

<iframe src="https://snippet.dhtmlx.com/4if395hd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Включение выделения элементов {#enabling-items-selection}

Вы можете активировать выделение элементов диаграммы с помощью атрибута [`select`](api/diagram/select_property.md) объекта конфигурации диаграммы. После того как вы включили выделение в диаграмме, вы можете использовать API объекта Selection, чтобы [работать с выделением элементов](guides/manipulating_items.md#selecting-items).

:::note
[Предустановленный набор событий](/api/selection/#events) объекта selection поможет вам определить способ обработки поведения диаграммы при выделении/снятии выделения элементов
:::

<iframe src="https://snippet.dhtmlx.com/jyoxn5h7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
