---
sidebar_label: defaultShapeType
title: Свойство defaultShapeType
description: Вы можете изучить свойство defaultShapeType в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# defaultShapeType

### Описание {#description}

@short: Опционально. Тип фигуры по умолчанию

Значение применяется, если объект фигуры не содержит свойства `"type"`

### Использование {#usage}

~~~jsx
defaultShapeType?: string;
~~~

### Конфигурация по умолчанию {#default-config}

- В режиме `default` компонента Diagram (type: `"default"`)

~~~jsx
defaultShapeType: "rectangle"
~~~

- В режиме **org chart** компонента Diagram (type: `"org"`)

~~~jsx
defaultShapeType: "card"
~~~

- В режиме `mindmap` компонента Diagram (type: `"mindmap"`)

~~~jsx
defaultShapeType: "topic"
~~~

- В режиме **PERT** компонента Diagram (type: `"pert"`)

~~~jsx
defaultShapeType: "task"
~~~

### Пример {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultShapeType: "img-card"
});
~~~

**Полезная статья**: [Настройка типа фигуры](shapes/default_shapes.md#setting-the-type-of-a-shape)
