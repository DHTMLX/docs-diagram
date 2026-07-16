---
sidebar_label: clear()
title: Метод clear объекта Selection
description: Узнайте о методе clear объекта Selection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# clear()

### Описание {#description}

@short: Очищает список выделения без вызова событий

### Использование {#usage}

~~~jsx
clear(): void;
~~~

### Пример {#example}

~~~jsx {8}
// диаграмма должна быть создана с параметром "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

diagram.selection.clear();
// события Selection не вызываются
~~~

**Журнал изменений**: Добавлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выделение элементов](guides/manipulating_items.md#selecting-items)

**Связанный пример**: [Diagram. Selection. Выделение элемента](https://snippet.dhtmlx.com/jyoxn5h7)
