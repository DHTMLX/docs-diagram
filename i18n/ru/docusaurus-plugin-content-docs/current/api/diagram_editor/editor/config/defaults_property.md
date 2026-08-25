---
sidebar_label: defaults
title: Свойство defaults редактора
description: Изучите свойство defaults редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# defaults

### Описание {#description}

@short: Необязательный. Объект, задающий конфигурацию по умолчанию для фигуры или линии

### Использование {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### Параметры {#parameters}

Объект `defaults` может содержать набор пар `key:value`, где *key* — тип фигуры или линии, а *value* — набор настроек конфигурации соответствующей [фигуры](shapes/configuration_properties.md) или [линии](lines/configuration_properties.md).

:::note
Атрибуты `type` и `id` нельзя задавать в конфигурации фигуры/линии по умолчанию.
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

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    defaults
});
~~~

:::info
После определения настроек по умолчанию для фигуры/линии определённых типов вы можете либо опускать эти свойства, либо переопределять их значения при [подготовке набора данных](guides/loading_data.md#preparing-data-to-load) для фигур/линий этих типов.
:::

**Журнал изменений**: Возможность задавать конфигурацию по умолчанию для линий была добавлена в v4.2

**Полезные статьи**:

- [Настройка конфигурации фигуры по умолчанию](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [Настройка предпросмотра фигур](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**Связанный пример**: [Diagram editor. Настройка типа линии (коннектора) по умолчанию. Попробуйте соединить фигуру A с фигурой B](https://snippet.dhtmlx.com/22abzn5m)
