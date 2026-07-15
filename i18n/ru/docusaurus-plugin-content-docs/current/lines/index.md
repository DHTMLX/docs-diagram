---
sidebar_label: Линии
title: Линии
description: Вы можете узнать о линиях в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# Линии {#lines}

## Обзор {#overview}

Внешний вид линий, соединяющих фигуры, определяется режимом, в котором инициализирована диаграмма: [по умолчанию](#lines-in-the-default-mode), [организационная диаграмма](#lines-in-the-org-chart-mode), [ментальная карта](#lines-in-the-mindmap-mode) или [PERT](#links-in-the-pert-mode).

### Линии в режиме по умолчанию {#lines-in-the-default-mode}

В режиме по умолчанию Diagram различные фигуры можно соединять ["прямыми" (по умолчанию) или "ломаными"](lines/configuration_properties.md) линиями в нужной последовательности, чтобы составить схему определённого процесса.

Чтобы добавить текст к линии в режиме по умолчанию Diagram/Diagram Editor, используйте свойство `text` объекта [lineTitle](/line_titles/).

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### Линии в режиме организационной диаграммы {#lines-in-the-org-chart-mode}

Режим организационной диаграммы Diagram представляет собой организационную диаграмму, содержащую набор фигур, соединённых [линиями "elbow"](lines/configuration_properties.md) в иерархическом порядке.

<iframe src="https://snippet.dhtmlx.com/98tzmzpg?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

Вы можете задать вертикальное направление соединения фигур для родительской фигуры через атрибут конфигурации `dir: "vertical"` объекта фигуры.

### Линии в режиме ментальной карты {#lines-in-the-mindmap-mode}

Режим ментальной карты Diagram используется для отображения ещё одного вида иерархической диаграммы. Фигуры соединяются [линиями "curved"](lines/configuration_properties.md) и располагаются вокруг центральной фигуры.

<iframe src="https://snippet.dhtmlx.com/lo1vm0e8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

Этот режим полезен, когда нужно представить основную тему или идею, окружённую ветвями подтем.

Расположение дочерних фигур относительно корневой фигуры определяется автоматически основным алгоритмом.
Чтобы изменить направление дочерних фигур по умолчанию, используйте свойство конфигурации [`typeConfig`](api/diagram/typeconfig_property.md) при инициализации диаграммы.

### Связи в режиме PERT {#links-in-the-pert-mode}

Режим PERT диаграммы Diagram предназначен для отображения последовательностей задач и проектов, а также связей между ними. Фигуры типов `"task"`, `"milestone"` и `"project"` соединяются [соединителями `"links"`](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode).

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>


## Настройка соединений между фигурами {#setting-connections-between-shapes}

Чтобы соединить фигуры в Diagram, можно использовать один из следующих двух способов:

- **с помощью объектов линий**

Вам нужно указать отдельные объекты, которые будут описывать логику соединения фигур. Например:

~~~jsx
const data = [
    // фигуры
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager" },
    { id: "3", text: "Technical Director" },
    { id: "4", text: "Manager" },
    { id: "5", text: "Technical Director" },
    // соединители
    { "id": "1-2", "from": "1", "to": "2", "type": "dash" },
    { "id": "1-3", "from": "1", "to": "3", "type": "dash" },
    { "id": "1-4", "from": "1", "to": "4", "type": "line" },
    { "id": "1-5", "from": "1", "to": "5", "type": "line" }
];
~~~

Свойство `type` в объекте линии позволяет задать индивидуальный тип для каждой линии.

:::note
См. [полный список свойств конфигурации объекта линии](lines/configuration_properties.md).
:::

- **с помощью атрибута `"parent"`**

:::note
Этот способ не работает в режиме по умолчанию Diagram/Diagram Editor.
:::

Вы можете указать свойство `parent` в объекте конфигурации фигуры и задать в качестве значения id её родительской фигуры:

~~~jsx
const data = [
    // фигуры
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" }
];
~~~

В этом случае все соединители будут иметь одинаковый тип.

### Установка типа линии по умолчанию {#setting-the-default-line-type}

Вы можете задать общий тип для всех соединительных линий диаграммы через параметр `lineType` свойства [`lineConfig`](api/diagram/lineconfig_property.md) объекта конфигурации диаграммы:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

Значение параметра `lineType` применяется, если [объект линии](lines/configuration_properties.md) не содержит свойства `type`.

### Установка типа соединения линии {#setting-the-connection-type-of-the-line}

Вы можете указать тип соединения для линий диаграммы через параметр `connectType` свойства [`lineConfig`](api/diagram/lineconfig_property.md) объекта конфигурации диаграммы. Он предоставляет следующие типы:

- `"elbow"` (тип по умолчанию для режимов Diagram по умолчанию и организационной диаграммы)
- `"straight"`
- `"curved"` (тип по умолчанию для режима ментальной карты Diagram). Обратите внимание, что тип соединительной линии `"curved"` используется только в режиме ментальной карты Diagram

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        connectType: "straight" // "elbow" | "straight" для режима по умолчанию
    }
});
diagram.data.parse(data);
~~~

Значение параметра `connectType` применяется, если [объект линии](lines/configuration_properties.md) не содержит свойства `connectType`.
