---
sidebar_label: findAll()
title: Метод findAll объекта Data Collection
description: Вы можете узнать больше о методе findAll объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# findAll()

### Описание {#description}

@short: Находит все элементы, соответствующие указанным параметрам

### Использование {#usage}

~~~jsx
findAll(rule: object): array;

// или

findAll(rule: function): array;
~~~

### Параметры {#parameters}

- `rule` - (обязательный) критерий поиска, который может быть задан:
  - как объект, содержащий следующие параметры:
    - `by: string | function` - критерий поиска (либо ключ атрибута элемента, либо функция поиска)
    - `match: string` - значение атрибута элемента
  - как функция: `DataCallback(item: T, index?: number, array?: T[])`

### Возвращаемое значение {#returns}

Метод возвращает массив объектов найденных элементов

### Пример {#example}

~~~jsx {7,10-14}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//поиск фигур по ключу атрибута
const shapes = diagram.data.findAll({ by: "text", match: "Manager" });

//поиск фигур с помощью функции
const shapes = diagram.data.findAll(function (shapes) {
    if( shapes.text === "Manager" || shapes.text === "Marketer" ){
        return true;
    }
});
~~~

**Полезная статья**:  [Поиск нужного элемента](guides/manipulating_items.md#finding-the-necessary-item)
