---
sidebar_label: shapeType
title: Свойство shapeType редактора Editor
description: Вы можете узнать о свойстве shapeType редактора Editor в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# shapeType

### Описание {#description}

@short: Необязательный. Тип элементов

Это значение применяется, если объект фигуры не содержит свойства `"type"`

### Использование {#usage}

~~~jsx
shapeType?: string;
~~~

### Конфигурация по умолчанию {#default-config}

В режиме по умолчанию редактора Editor (type: `"default"`):

~~~jsx
shapeType: "rectangle"
~~~

В режиме организационной диаграммы редактора Editor (type: `"card"`):

~~~jsx
shapeType: "card"
~~~

В режиме ментальной карты редактора Editor (type: `"topic"`):

~~~jsx
shapeType: "topic"
~~~

### Пример {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "circle"
});
~~~

**Полезная статья:** [Фигуры по умолчанию](shapes/default_shapes.md)
