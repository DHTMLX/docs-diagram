---
sidebar_label: lineConfig
title: Свойство lineConfig
description: Изучите свойство lineConfig в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# lineConfig

### Описание {#description}

@short: Опционально. Объект с конфигурацией по умолчанию для соединительных линий

### Использование {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // тип "curved" используется только в режиме mindmap
};
~~~

### Параметры {#parameters}

Объект `lineConfig` содержит следующие параметры:

- `lineType` - (опциональный) тип соединительной линии по умолчанию. Значение применяется, если объект линии не содержит свойство `"type"`
- `lineGap` - (опциональный) задаёт расстояние до прямоугольного изгиба соединительной линии
- `connectType` - (опциональный) задаёт тип соединения линий: `"elbow"` | `"straight"` | `"curved"` (тип `"curved"` используется только в режиме mindmap Diagram). Значение применяется, если объект линии не содержит свойство `"connectType"`

:::info
Значения настроек `lineType` и `connectType` будут применены, если объект линии не содержит аналогичных свойств.
:::

### Конфигурация по умолчанию {#default-config}

~~~jsx
lineConfig: {
    lineType: "line",
    lineGap: 10
}
~~~

Параметр `connectType` имеет следующие значения по умолчанию:

- `"elbow"` - для режимов default и org chart Diagram
- `"curved"` - для режима mindmap Diagram (этот тип используется только в режиме mindmap Diagram)

### Пример {#example}

~~~jsx {2-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineGap: 50,
        connectType: "straight"
    },
    // остальные параметры конфигурации
});
~~~

Результат применения свойства `lineGap` показан на изображении ниже:

![](/img/linegap_config.png)

**Связанный пример**: [Diagram. Режим Default. Диаграмма действий](https://snippet.dhtmlx.com/a9t2z2dt)

**Журнал изменений**:

- Параметр `connectType` добавлен в v6.1
- Параметр `lineGap` добавлен в v5.0 (см. [статью о миграции](migration.md#42---50))
- Добавлено в v4.2

**Полезная статья**: [Настройка соединений между фигурами](/lines/#setting-connections-between-shapes)
