---
sidebar_label: lineConfig
title: Свойство lineConfig
description: Изучите свойство lineConfig в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# lineConfig

### Описание {#description}

@short: Необязательный параметр. Объект с конфигурацией по умолчанию для соединительных линий

:::info
Настройки `lineType`, `lineDirection` и `arrowsHidden` будут применяться к новым соединительным линиям, добавляемым через редактор.
:::

### Использование {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineDirection?: "backArrow" | "forwardArrow",
    arrowsHidden?: boolean,
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // тип "curved" используется только в режиме ментальной карты
};
~~~

### Параметры {#parameters}

Объект `lineConfig` содержит следующие параметры:

- `lineType` - (необязательный) тип новых соединительных линий по умолчанию. Значение применяется, если объект линии не содержит свойство `"type"`
- `lineDirection` - (необязательный) направление новых соединительных линий
- `arrowsHidden` - (необязательный) определяет, должны ли быть скрыты стрелки новых соединительных линий
- `lineGap` - (необязательный) задает расстояние до прямоугольного изгиба соединительной линии
- `connectType` - (необязательный) задает тип соединения линий: `"elbow"` | `"straight"` | `"curved"` (тип `"curved"` используется только в режиме ментальной карты Diagram). Значение применяется, если объект линии не содержит свойство `"connectType"`

:::note
Параметры `lineDirection`, `arrowsHidden` и `lineGap` работают только в режиме по умолчанию редактора (*type: `"default"`*)
:::

### Конфигурация по умолчанию {#default-config}

~~~jsx
lineConfig: {
    lineType:"line",
    lineDirection: "forwardArrow",
    arrowsHidden: false,
    lineGap: 10
}
~~~

Параметр `connectType` имеет следующие значения по умолчанию:

- `"elbow"` - для режима по умолчанию и режима организационной диаграммы
- `"curved"` - для режима ментальной карты (этот тип используется только в режиме ментальной карты)

### Пример {#example}

~~~jsx {2-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineDirection: "backArrow",
        arrowsHidden: true,
        lineGap: 50,
        connectType: "straight"
    },
    // другие параметры конфигурации
});
~~~

Результат применения свойства `lineGap` показан на изображении ниже:

![](/img/linegap_config.png)

**Журнал изменений**:

- Параметр `connectType` добавлен в v6.1
- Параметр `lineGap` добавлен в v5.0 (см. [статью о миграции](migration.md#42---50))
- Добавлено в v4.2

**Связанный пример**: [Diagram editor. Настройка типа линии (соединителя) по умолчанию. Попробуйте соединить фигуру A с фигурой B](https://snippet.dhtmlx.com/22abzn5m)
