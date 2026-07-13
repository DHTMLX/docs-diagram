---
sidebar_label: autoPlace()
title: Метод autoPlace
description: Изучите метод autoPlace в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# autoPlace()

:::info
Метод `autoPlace()` работает только в режиме по умолчанию диаграммы и только для фигур
:::

### Описание {#description}

@short: Автоматически упорядочивает связанные фигуры диаграммы в иерархической структуре

### Использование {#usage}

~~~ts
autoPlace(config?: object): void;
~~~

### Параметры {#parameters}

- `config` - (необязательный) объект с настройками автоматического размещения. Если не указан, применяются настройки по умолчанию. Здесь можно указать следующие параметры:
    - `mode` - (необязательный) режим соединения фигур, `"direct"` (по умолчанию) или `"edges"`
    - `graphPadding` - (необязательный) задаёт расстояние между несвязанными диаграммами, по умолчанию *200*
    - `placeMode` - (необязательный) задаёт режим расположения фигур, `"orthogonal"` (по умолчанию) или `"radial"`
    - `itemPadding` - (необязательный) минимальный отступ между элементами (минимальное значение — *1*), по умолчанию *20*
    - `levelPadding` - (необязательный) минимальный отступ между уровнями иерархии (минимальное значение — *1*), по умолчанию *20*

### Пример {#example}

~~~jsx {4-7}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    placeMode: "radial"
});
~~~

## Режимы соединения фигур {#modes-of-connecting-shapes}

### Режим "direct" {#direct-mode}

Линии-соединители без стрелок выравниваются "от центра к центру"; они прямые и диагональные.

![](/img/direct_mode.png)

### Режим "edges" {#edges-mode}

Линии-соединители выравниваются "от стороны к стороне".

:::note
Если для связи заданы `fromSide` и `toSide`, алгоритм автоматического размещения сохранит эти значения, но не будет использовать их при расчёте расположения. Ключевыми свойствами, определяющими связи, являются `from` и `to`, а `fromSide` и `toSide` вычисляются алгоритмом автоматически.
:::

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
- Свойство `autoplacement` добавлено в v3.0

**Полезная статья**: [Автоматическое расположение фигур](guides/manipulating_items.md#arranging-shapes-automatically)

**Связанные примеры**:
- [Diagram. Режим по умолчанию. Радиальное автоматическое размещение с параметрами отступов](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. Режим по умолчанию. Автоматическое размещение](https://snippet.dhtmlx.com/f3uekgjw)
