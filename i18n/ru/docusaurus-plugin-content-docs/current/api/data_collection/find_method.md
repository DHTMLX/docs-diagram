---
sidebar_label: find()
title: Метод find объекта Data Collection
description: Вы можете узнать больше о методе find объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# find()

### Описание {#description}

@short: Находит элемент, соответствующий указанным параметрам

### Использование {#usage}

~~~jsx
find(rule: object): object;

// или

find(rule: function): object;
~~~

### Параметры {#parameters}

- `rule` - (обязательный) критерий поиска, который может быть задан:
  - как объект, содержащий следующие параметры:
    - `by: string | function` - критерий поиска (либо ключ атрибута элемента, либо функция поиска)
    - `match: string` - значение атрибута элемента
  - как функция: `DataCallback(item: T, index?: number, array?: T[])`

### Возвращаемое значение {#returns}

Метод возвращает первый объект элемента, соответствующий указанному критерию

### Пример {#example}

~~~jsx {7,10-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//поиск фигуры по ключу атрибута
const shape = diagram.data.find({ by: "text", match: "Manager" });

//поиск фигуры по правилу, заданному в функции
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~

**Полезная статья**:  [Поиск нужного элемента](guides/manipulating_items.md#finding-the-necessary-item)

**Связанный пример**: [Diagram. Данные. Поиск нужной фигуры](https://snippet.dhtmlx.com/sete9z73)
