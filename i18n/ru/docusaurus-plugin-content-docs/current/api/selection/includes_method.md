---
sidebar_label: includes()
title: Метод includes объекта Selection
description: Узнайте больше о методе includes объекта selection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, опробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# includes()

### Описание {#description}

@short: Проверяет, находится ли элемент в списке выбранных

### Использование {#usage}

~~~jsx
includes({
    id: string | number
}): boolean;
~~~

### Параметры {#parameters}

Метод принимает в качестве аргумента объект со следующими параметрами:

- `id` - (обязательный) идентификатор проверяемого элемента

### Возвращаемое значение {#returns}

Метод возвращает `true`, если элемент находится в списке выбранных, в противном случае `false`

### Пример {#example}

~~~jsx {9-10}
// диаграмма должна быть создана с опцией "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // возвращает true
diagram.selection.includes({ id: "4" }) // возвращает false
~~~

**Журнал изменений**: Добавлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выбор элементов](guides/manipulating_items.md#selecting-items)

**Связанный пример**: [Diagram. Selection. Выбор элемента](https://snippet.dhtmlx.com/jyoxn5h7)
