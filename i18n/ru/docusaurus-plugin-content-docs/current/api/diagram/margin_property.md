---
sidebar_label: margin
title: Свойство margin
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о свойстве margin. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# margin

### Описание {#description}

@short: Необязательно. Объект с настройками отступов для позиционирования элементов в диаграмме

### Использование {#usage}

~~~jsx
margin?: {
    itemX?: number,
    itemY?: number,
    x?: number,
    y?: number
};
~~~

### Параметры {#parameters}

Объект `margin` может включать следующие параметры:

- `itemX` - (необязательный) горизонтальное расстояние между двумя фигурами (только для [type: "org" | "mindmap"](api/diagram/type_property.md))
- `itemY` - (необязательный) вертикальное расстояние между двумя фигурами (только для [type: "org" | "mindmap"](api/diagram/type_property.md))
- `x` - (необязательный) горизонтальное расстояние от начала диаграммы до первого элемента
- `y` - (необязательный) вертикальное расстояние от начала диаграммы до первого элемента

### Конфигурация по умолчанию {#default-config}

~~~jsx
margin: {
    x: 40, y: 40,
    itemX: 40, itemY: 40
}
~~~

### Пример {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    margin: {
        x: 20, y: 20,
        itemX: 50, itemY: 50
    }
});
~~~

**Related samples**:

- [Diagram. Режим организационной диаграммы. Отступы между фигурами](https://snippet.dhtmlx.com/bwe9vm6i)
- [Diagram. Стандартный режим. Пользовательские стили блок-схемы](https://snippet.dhtmlx.com/3wyut2mn)
