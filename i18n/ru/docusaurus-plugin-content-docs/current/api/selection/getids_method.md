---
sidebar_label: getIds()
title: Метод getIds объекта Selection
description: Узнайте больше о методе getIds объекта selection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, опробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getIds()

### Описание {#description}

@short: Возвращает список ID выбранных элементов

### Использование {#usage}

~~~jsx
getIds(): (string | number)[]
~~~

### Возвращаемое значение {#returns}

Метод возвращает список ID выбранных элементов в виде массива

### Пример {#example}

~~~jsx {8}
// диаграмма должна быть создана с опцией "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

const ids = diagram.selection.getIds(); // -> ["1", "1.1", ...] или []
~~~

**Журнал изменений**: Добавлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выбор элементов](guides/manipulating_items.md#selecting-items)

**Связанный пример**: [Diagram. Selection. Выбор элемента](https://snippet.dhtmlx.com/jyoxn5h7)
