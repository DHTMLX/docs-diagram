---
sidebar_label: defaults
title: Свойство defaults
description: Вы можете изучить свойство defaults в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# defaults

### Описание {#description}

@short: Опционально. Объект, который задаёт конфигурацию по умолчанию для фигуры или линии

### Использование {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### Параметры {#parameters}

Свойство `defaults` представляет собой объект, включающий набор пар `key:value`, где *key* — это тип фигуры или линии, а *value* — объект с набором параметров конфигурации соответствующей [фигуры](shapes/configuration_properties.md) или [линии](lines/configuration_properties.md).

:::note
Вы не можете задавать `type` и `id` в конфигурации фигуры/линии по умолчанию
:::

### Пример {#example}

~~~jsx {24}
const defaults = {
    // настройки по умолчанию для всех фигур типа "rectangle"
    rectangle: {
        fill: "#CEEFE1",
        stroke: "#0AB169",
        strokeWidth: 2,
        width: 140,
        height: 140,
        text: "Default text"
    },
    // настройки по умолчанию для всех линий типа "line"
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // настройки по умолчанию для всех линий типа "dash"
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    defaults
});
~~~

:::note
После определения настроек по умолчанию для фигур/линий отдельных типов вы можете либо не указывать эти свойства, либо переопределить их значения при [подготовке набора данных](guides/loading_data.md#preparing-data-to-load) для фигур/линий этих типов.
:::

**Журнал изменений**: Возможность задавать конфигурацию по умолчанию для линий добавлена в v4.2

**Полезные статьи**:

- [Настройка конфигурации фигуры по умолчанию](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [Настройка предпросмотра фигур](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)
