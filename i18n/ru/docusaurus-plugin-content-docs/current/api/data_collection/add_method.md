---
sidebar_label: add()
title: Метод add объекта Data Collection
description: В этой статье вы можете узнать о методе add объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, испытайте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# add()

### Описание {#description}

@short: Добавляет новый элемент в диаграмму

### Использование {#usage}

~~~jsx
add(new_item: object | array): string | number | array;
~~~

### Параметры {#parameters}

- `new_item` - (обязательный) объект нового элемента или массив объектов элементов

### Возвращаемое значение {#returns}

Метод возвращает id элемента или массив id элементов

### Пример {#example}

Существует два способа связать фигуры. Вы можете добавить фигуру с указанным родительским ID:

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});
diagram.data.parse(data);

diagram.data.add({ id: "3.2", text: "New Item", type: "card", parent: "3" });
~~~

или вы можете добавить объекты фигуры и соединительной линии:

~~~jsx {2,6-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.add({ type: "card", id: "3.2", text: "New Item" });
diagram.data.add({ type: "line",  from: "3", to: "3.2" });
~~~

**Полезная статья**:  [Добавление элемента](guides/manipulating_items.md#adding-an-item)

**Связанный пример**: [Diagram. Данные. Добавление/удаление элемента](https://snippet.dhtmlx.com/8wi20uop)
