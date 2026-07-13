---
sidebar_label: Базовые наборы фигур
title: Базовые наборы фигур
description: Вы можете узнать о базовых наборах фигур в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# Базовые наборы фигур {#basic-sets-of-shapes}

Библиотека DHTMLX Diagram предоставляет наборы фигур, которые можно использовать для построения диаграммы. Каждый режим Diagram: [по умолчанию](#shapes-in-the-default-mode), [организационная диаграмма](#shapes-in-the-org-chart-mode), [ментальная карта](#shapes-in-the-mindmap-mode) и [PERT](#shapes-in-the-pert-mode) имеет *базовый набор* типов фигур.

:::tip
Вы можете добавить фигуру любого типа в диаграмму, инициализированную в любом режиме. Используйте имя нужной фигуры в качестве значения атрибута `type` внутри объекта фигуры при [подготовке набора данных для загрузки в диаграмму](guides/loading_data.md#preparing-data-to-load).
:::

См. [полный список свойств конфигурации объекта фигуры](shapes/configuration_properties.md).

## Фигуры в режиме по умолчанию {#shapes-in-the-default-mode}

В режиме `default` Diagram базовый набор включает фигуры **блок-схемы**. Ознакомьтесь с доступными типами фигур блок-схемы:

![](/img/flowshapes_types.png)

Также есть элемент `"text"`, представляющий собой простой текст, который можно использовать в диаграмме как фигуру и соединять с другими фигурами.

![](/img/text_item.png)

**Связанный пример**: [Редактор диаграмм. Режим по умолчанию. Широкая блок-схема](https://snippet.dhtmlx.com/4d4k3o8p)

:::note
Вы можете группировать фигуры Diagram в режиме по умолчанию. [Ознакомьтесь с соответствующим руководством](/groups/).
:::

### Свойства {#properties}

Ознакомьтесь со свойствами конфигурации, специфичными для [фигур в режиме `default` Diagram](shapes/configuration_properties.md#properties-specific-for-the-default-mode) и для [**фигур блок-схемы** и элемента `"text"`](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes).

## Фигуры в режиме организационной диаграммы {#shapes-in-the-org-chart-mode}

В режиме **организационной диаграммы** Diagram базовый набор включает два типа фигур: `"card"` и `"img-card"`.

Каждая фигура типа `"card"` имеет текст и цветную полосу заголовка. Фигуры, находящиеся на одном уровне, имеют заголовки одинакового цвета. Примеры фигур `"card"` показаны на диаграмме типа "организационная диаграмма" ниже:

![](/img/orgchart_card_shapes.png)

**Связанный пример**: [Диаграмма. Режим организационной диаграммы. Базовая инициализация](https://snippet.dhtmlx.com/5ign6fyy?mode=result)

Тип `"img-card"` можно использовать для добавления фигур с изображениями. Не забудьте указать изображения для карточек через атрибут `img` объекта фигуры. Следующая организационная диаграмма построена с использованием фигур типа `"img-card"`:

![](/img/orgchart_imgcard_shapes.png)

**Связанный пример**: [Редактор диаграмм. Режим организационной диаграммы. Базовая инициализация](https://snippet.dhtmlx.com/og4qm3ja?mode=result)

### Свойства {#properties-1}

Ознакомьтесь со свойствами конфигурации, специфичными для [фигур в режиме **организационной диаграммы** Diagram](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode), [фигур `"card"`](shapes/configuration_properties.md#properties-specific-for-card-shapes)
и [фигур `"img-card"`](shapes/configuration_properties.md#properties-specific-for-img-card-shapes).

## Фигуры в режиме ментальной карты {#shapes-in-the-mindmap-mode}

В режиме `mindmap` Diagram базовым является тип фигур `"topic"`. Каждая фигура имеет текст и цветную рамку. Цвет контура зависит от уровня, к которому относится фигура. Примеры фигур `"topic"` показаны на следующей диаграмме типа "ментальная карта":

![](/img/mindmap_basic.png)

**Связанный пример**: [Диаграмма. Режим ментальной карты. Базовая инициализация](https://snippet.dhtmlx.com/3igf1gd5)

### Свойства {#properties-2}

Ознакомьтесь со свойствами конфигурации, специфичными для [фигур в режиме `mindmap` Diagram](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode) и для [фигур `"topic"`](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes).

## Фигуры в режиме PERT {#shapes-in-the-pert-mode}

Базовые типы фигур в режиме **PERT** Diagram:

- тип `"task"` - фигура, имеющая заголовок и отображающая даты и продолжительность:

![](/img/pert_task_shape.png)

- тип `"milestone"` - фигура без продолжительности, обозначающая ключевую точку проекта:

![](/img/pert_milestone_shape.png)

- тип `"project"` - контейнер, используемый для [группировки фигур типов `"task"` и `"milestone"`](/groups/#grouping-shapes-in-the-pert-mode):

![](/img/pert_project_group.png)


**Связанный пример**: [Диаграмма. PERT-диаграмма. Инициализация ](https://snippet.dhtmlx.com/4h5fi7xd)

### Свойства {#properties-3}

Ознакомьтесь со свойствами конфигурации, специфичными для [фигур `"task"`](shapes/configuration_properties.md#properties-specific-for-task-shapes), [фигур `"milestone"`](shapes/configuration_properties.md#properties-specific-for-milestone-shapes) и для [группы `"project"`](groups/configuration_properties.md#properties-specific-for-project-object).

## Установка типа фигуры {#setting-the-type-of-a-shape}

Чтобы установить тип фигуры, используйте свойство [`type`](shapes/configuration_properties.md) внутри объекта фигуры при подготовке соответствующей JSON-структуры для загрузки в диаграмму:

~~~jsx
const data = [
    { "id": 1, "x": 280, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 280, "y": 120, "text": "Read N", "type": "output" },
    { "id": 3, "x": 280, "y": 240, "text": "M=1\nF=2", "type": "process" },
    { "id": 4, "x": 280, "y": 360, "text": "F=F*M", "type": "process" },
    { "id": 5, "x": 280, "y": 480, "text": "Is M=N?", "type": "decision" }
];
~~~

:::note
См. [полный список свойств конфигурации объекта фигуры](shapes/configuration_properties.md). Не добавляйте пользовательские свойства при создании объектов данных для фигур из базовых наборов. Чтобы добавить пользовательское свойство, вам нужно [создать пользовательскую фигуру](shapes/custom_shape.md).
:::

### Установка типа фигуры по умолчанию {#setting-the-default-shape-type}

Вы также можете задать тип по умолчанию для всех фигур через атрибут [`defaultShapeType`](api/diagram/defaultshapetype_property.md) объекта конфигурации диаграммы:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // type: "org" | type: "mindmap" | type: "pert"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

Это значение будет применено, если объект конфигурации фигуры не содержит свойства `type`.

