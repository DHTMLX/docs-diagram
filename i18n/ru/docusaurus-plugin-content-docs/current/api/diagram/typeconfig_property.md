---
sidebar_label: typeConfig
title: Свойство typeConfig
description: Вы можете изучить свойство typeConfig в документации библиотеки DHTMLX JavaScript Diagram. Просмотрите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# typeConfig

:::info
Свойство не работает в Editor
:::

### Описание {#description}

@short: Необязательный. Объект, который предоставляет параметры конфигурации для Diagram в режимах mindmap и PERT

Для Diagram в режиме mindmap свойство `typeConfig` определяет направление фигур. Если свойство не применяется, дочерние фигуры будут располагаться автоматически в соответствии с основным алгоритмом.

Для Diagram в режиме PERT свойство `typeConfig` позволяет задавать формат отображения дат в фигурах задач.

### Использование {#usage}

- для режима mindmap

~~~jsx
typeConfig?: {
    direction?: "left" | "right";
}

// или
typeConfig?: {
    side?: {
        left?: string[],
        right?: string[]
    }
}
~~~

- для режима PERT

~~~jsx
typeConfig?: {
    dateFormat?: string; // %d-%m-%Y по умолчанию
}
~~~

### Параметры {#parameters}

Объект `typeConfig` может включать один из следующих параметров:

- для режима mindmap:
    - `direction` - (необязательный) задает направление графа:
      - `"left"` - располагает дочерние фигуры графа слева от корневой фигуры
      - `"right"` - располагает дочерние фигуры графа справа от корневой фигуры
    - `side` - (необязательный) объект, который задает обязательное направление для указанных дочерних фигур. Объект содержит набор пар *ключ:значение*, где *ключ* - это направление фигур (left, right), а *значение* - массив с идентификаторами фигур
- для режима PERT:
    - `dateFormat` - (необязательный) задает формат отображения дат в фигурах типа `task`. Влияет на отображение дат в пользовательском интерфейсе

:::tip
Для диаграммы в режиме mindmap можно использовать либо атрибут `direction`, либо `side`. Не используйте их одновременно!
:::

### Пример {#example}

- для режима mindmap:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        direction: "right"
    }
});
~~~

или

~~~jsx {3-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        side: {
            left: ["2", "3"],
            right: ["4", "5"]
        }
    }
});
~~~

Обратите внимание, что остальные дочерние фигуры, не заданные в опции `side`, будут располагаться автоматически в соответствии с основным алгоритмом.

- для режима PERT:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

**Журнал изменений**:

- Свойство `dateFormat` для режима PERT добавлено в v6.1
- Добавлено в v3.1.

**Полезная статья**: [Расположение фигур в режиме mindmap Diagram](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram)

**Связанные примеры**:

- [Diagram. Режим mindmap. Направление ("left" | "right")](https://snippet.dhtmlx.com/pzllujx3)
- [Diagram. Режим mindmap. Пользовательские стороны](https://snippet.dhtmlx.com/atto9ckg)
- [Diagram и Gantt. PERT-диаграмма. Полная интеграция](https://snippet.dhtmlx.com/gcnx4a9h)
