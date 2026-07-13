---
sidebar_label: autoplacement
title: Свойство autoplacement редактора
description: Изучите свойство autoplacement редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# autoplacement

### Описание {#description}

@short: Необязательный. Объект с настройками конфигурации для автоматического размещения фигур

:::info
Свойство `autoplacement` работает только в режиме по умолчанию редактора и только для фигур. Оно не работает при использовании групп или дорожек (swimlanes).
:::

### Использование {#usage}

~~~ts
autoplacement?: {
    mode?: "direct" | "edges", // по умолчанию "direct"
    graphPadding?: number, // по умолчанию 200
    placeMode?: "orthogonal" | "radial", // по умолчанию "orthogonal"
    itemPadding?: number, // по умолчанию 20
    levelPadding?: number // по умолчанию 20
};
~~~

### Параметры {#parameters}

Объект `autoplacement` содержит следующие параметры:

- `mode` — (необязательный) режим соединения фигур, `"direct"` (по умолчанию) или `"edges"`
- `graphPadding` — (необязательный) задаёт расстояние между несвязанными диаграммами, *200* по умолчанию
- `placeMode` — (необязательный) задаёт режим размещения фигур, `"orthogonal"` (по умолчанию) или `"radial"`
- `itemPadding` — (необязательный) минимальный отступ между элементами (минимальное значение — *1*), *20* по умолчанию
- `levelPadding` — (необязательный) минимальный отступ между уровнями иерархии (минимальное значение — *1*), *20* по умолчанию

### Конфигурация по умолчанию {#default-config}

~~~jsx
autoplacement: {
    mode: "direct",
    graphPadding: 200,
    placeMode: "orthogonal",
    itemPadding: 20,
    levelPadding: 20
}
~~~

### Пример {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    autoplacement: {
        placeMode: "radial",
        mode: "direct",
        itemPadding: 10,
        levelPadding: 10,
        graphPadding: 100
    }
});

editor.parse(data);
~~~

## Режимы соединения фигур {#modes-of-connecting-shapes}

### Режим "direct" {#direct-mode}

Линии-соединители без стрелок выравниваются "от центра к центру". Они прямые и диагональные.

![](/img/direct_mode.png)

### Режим "edges" {#edges-mode}

Линии-соединители выравниваются "от края к краю".

:::info
Чтобы добавить стрелки к линиям, укажите `forwardArrow: "filled"` или `backArrow: "filled"` в конфигурации [объекта линии](lines/configuration_properties.md).
:::

Линии-соединители в режиме `"edges"` могут быть:

- прямыми (если задать свойство `connectType: "straight"` [объекта линии](lines/configuration_properties.md))

![](/img/edges_straight_mode.png)

- или изогнутыми под углом 90 градусов (если задать свойство `connectType: "elbow"` [объекта линии](lines/configuration_properties.md))

![](/img/edges_mode.png)

## Режимы размещения фигур {#modes-of-placement-of-shapes}

### Режим "orthogonal" {#orthogonal-mode}

Фигуры располагаются вдоль вертикальных и горизонтальных линий

- расположение `"orthogonal"` с линиями в режиме `"direct"`

![](/img/direct_ortogonal.png)

- расположение `"orthogonal"` с линиями в режиме `"edges"`

![](/img/edges_ortogonal.png)

### Режим "radial" {#radial-mode}

Фигуры располагаются на воображаемых окружностях относительно центральной фигуры, то есть фигуры с наибольшим количеством соединений

- расположение `"radial"` с линиями в режиме `"direct"`

![](/img/direct_radial.png)

- расположение `"radial"` с линиями в режиме `"edges"`

![](/img/edges_radial.png)

**Журнал изменений**:

- Параметры `itemPadding` и `levelPadding` добавлены в v6.1.3
- Параметр `placeMode` добавлен в v5.0
- Свойство `autoplacement` добавлено в v3.0

**Связанный пример**: [Diagram editor. Режим по умолчанию. Алгоритм радиального автоматического размещения](https://snippet.dhtmlx.com/f0cespbk)
