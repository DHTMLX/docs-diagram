---
sidebar_label: autoplacement
title: Свойство autoplacement
description: Изучите свойство autoplacement в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# autoplacement

### Описание {#description}

@short: Необязательный параметр. Объект с настройками автоматического размещения фигур

:::info
Свойство `autoplacement` работает только в режиме по умолчанию диаграммы и только для фигур. Оно не работает при использовании групп или дорожек.

Автоматическое размещение будет применено только после применения метода [`autoPlace()`](api/diagram/autoplace_method.md).
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

Объект `autoplacement` имеет следующие параметры:

- `mode` - (необязательный) режим соединения фигур, `"direct"` (по умолчанию) или `"edges"`
- `graphPadding` - (необязательный) задаёт расстояние между двумя и более несвязанными диаграммами, по умолчанию *200*
- `placeMode` - (необязательный) задаёт режим расположения фигур, `"orthogonal"` (по умолчанию) или `"radial"`
- `itemPadding` - (необязательный) минимальный отступ между элементами (минимальное значение — *1*), по умолчанию *20*
- `levelPadding` - (необязательный) минимальный отступ между уровнями иерархии (минимальное значение — *1*), по умолчанию *20*

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
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        placeMode: "radial",
        mode: "direct",
        itemPadding: 10,
        levelPadding: 10,
        graphPadding: 100
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

## Режимы соединения фигур {#modes-of-connecting-shapes}

### Режим "direct" {#direct-mode}

Линии-соединители без стрелок выравниваются "от центра к центру". Они прямые и диагональные.

![](/img/direct_mode.png)

### Режим "edges" {#edges-mode}

Линии-соединители выравниваются "от стороны к стороне".

:::info
Чтобы добавить стрелки к линиям, укажите `forwardArrow: "filled"` или `backArrow: "filled"` в конфигурации [объекта линии](lines/configuration_properties.md).
:::

Линии-соединители в режиме `"edges"` могут быть:

- прямыми (если задать свойство `connectType: "straight"` [объекта линии](lines/configuration_properties.md))

![](/img/edges_straight_mode.png)

- или изогнутыми под углом 90 градусов (если задать свойство `connectType: "elbow"` [объекта линии](lines/configuration_properties.md))

![](/img/edges_mode.png)

## Режимы расположения фигур {#modes-of-placement-of-shapes}

### Режим "orthogonal" {#orthogonal-mode}

Фигуры располагаются вдоль вертикальных и горизонтальных линий

- расположение `"orthogonal"` с линиями в режиме `"direct"`

![](/img/direct_ortogonal.png)

- расположение `"orthogonal"` с линиями в режиме `"edges"`

![](/img/edges_ortogonal.png)

### Режим "radial" {#radial-mode}

Фигуры располагаются по воображаемым окружностям относительно центральной фигуры, то есть фигуры с наибольшим количеством связей

- расположение `"radial"` с линиями в режиме `"direct"`

![](/img/direct_radial.png)

- расположение `"radial"` с линиями в режиме `"edges"`

![](/img/edges_radial.png)

**Журнал изменений**:

- Параметры `itemPadding` и `levelPadding` добавлены в v6.1.3
- Параметр `placeMode` добавлен в v5.0

**Полезные статьи**:

- [Настройка автоматического размещения фигур](guides/diagram/configuration.md#configuring-autoplacement-for-shapes)
- [Автоматическое расположение фигур](guides/manipulating_items.md#arranging-shapes-automatically)

**Связанные примеры**:

- [Diagram. Режим по умолчанию. Радиальное автоматическое размещение с параметрами отступов](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. Режим по умолчанию. Расположение сгенерированного радиального набора данных с автоматическим размещением](https://snippet.dhtmlx.com/rwsime82)
