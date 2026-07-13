---
sidebar_label: afterUnSelect
title: Событие afterUnSelect объекта Selection
description: Узнайте о событии afterUnSelect в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterUnSelect

### Описание {#description}

@short: Срабатывает после снятия выделения с элемента

### Использование {#usage}

~~~jsx
"afterUnSelect": ({
    id: string | number,
    batch: (string | number)[]
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

- `id` - id элемента, с которого снято выделение
- `batch` - список элементов, с которых снято выделение

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});
// загрузка данных
diagram.data.parse(data);

// присоединение обработчика к событию
diagram.events.on("afterUnSelect", ({ id }) => {
    console.log(id + " was unselected");
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
editor.diagram.events.on("afterUnSelect", ({ id }) => {
    console.log(id + " was unselected");
});
~~~

**Журнал изменений**: Обновлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выделение элементов](guides/manipulating_items.md#selecting-items)
