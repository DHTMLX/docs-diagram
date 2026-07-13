---
sidebar_label: getItem()
title: Метод getItem объекта Selection
description: Узнайте больше о методе getItem объекта selection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, опробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getItem()

### Описание {#description}

@short: Возвращает объект указанного выбранного элемента или объект последнего выбранного элемента, если метод вызван без аргументов

### Использование {#usage}

~~~jsx
getItem({
    id: string | number
}): object;

//или

getItem(): object;
~~~

### Параметры {#parameters}

Метод принимает в качестве аргумента объект со следующим параметром:

- `id` - (обязательный) идентификатор искомого элемента

### Возвращаемое значение {#returns}

Метод возвращает объект указанного элемента, если он есть в списке выбранных, либо объект последнего выбранного элемента, если метод вызван без аргументов

### Пример {#example}

~~~jsx {9-11,13-15,17-19}
// диаграмма должна быть создана с опцией "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// получение последнего выбранного элемента
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// получение выбранного элемента по id
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// попытка получить элемент, которого нет в списке выбранных
const item = diagram.selection.getItem({ id: "4" });
// -> возвращает undefined, так как элемента с указанным id в списке выбранных нет
~~~

**Журнал изменений**: Обновлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выбор элементов](guides/manipulating_items.md#selecting-items)

**Связанный пример**: [Diagram. Selection. Выбор элемента](https://snippet.dhtmlx.com/jyoxn5h7)
