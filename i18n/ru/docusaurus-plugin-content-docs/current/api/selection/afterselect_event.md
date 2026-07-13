---
sidebar_label: afterSelect
title: Событие afterSelect объекта Selection
description: Узнайте о событии afterSelect в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterSelect

### Описание {#description}

@short: Срабатывает после выделения элемента

### Использование {#usage}

~~~jsx
"afterSelect": ({
    id: string | number,
    join: boolean,
    batch: (string | number)[]
}) => void;
~~~

### Параметры {#parameters}

Колбек события вызывается с объектом, содержащим следующие параметры:

- `id` - id выделенного элемента
- `join` - применённый [режим выделения](api/selection/add_method.md#parameters)
- `batch` - список выделенных элементов

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // другие опции конфигурации
});
// загрузка данных
diagram.data.parse(data);

// присоединение обработчика к событию
diagram.events.on("afterSelect", ({ id }) => {
    console.log(id + " was selected");
});
~~~

Ниже приведён пример присоединения обработчика к этому событию для Diagram Editor:

~~~jsx {8-11}
// инициализация редактора Diagram
const editor = new dhx.DiagramEditor("editor_container", {
    // опции конфигурации
});
// загрузка данных в редактор
editor.parse(data);

// присоединение обработчика к событию
editor.diagram.events.on("afterSelect", ({ id }) => {
    console.log(id + " was selected");
});
~~~

**Журнал изменений**: Обновлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выделение элементов](guides/manipulating_items.md#selecting-items)
