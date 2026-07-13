---
sidebar_label: beforeSelect
title: Событие beforeSelect объекта Selection
description: Узнайте о событии beforeSelect в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeSelect

### Описание {#description}

@short: Срабатывает при выделении элемента, но до того, как элемент будет фактически выделен

### Использование {#usage}

~~~jsx
"beforeSelect": ({
    id: string | number,
    join: boolean,
    batch: (string | number)[]
}) => boolean | void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

- `id` - id элемента для выделения
- `join` - применённый [режим выделения](api/selection/add_method.md#parameters)
- `batch` - список элементов для выделения

### Возвращаемое значение {#returns}

Верните `false`, чтобы предотвратить выделение элемента; в противном случае - `true`

### Пример {#example}

~~~jsx {9-13}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});
// загрузка данных
diagram.data.parse(data);

// присоединение обработчика к событию
diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

Ниже приведён пример присоединения обработчика к этому событию для Diagram Editor:

~~~jsx {8-12}
// инициализация редактора Diagram
const editor = new dhx.DiagramEditor("editor_container", {
    // опции конфигурации
});
// загрузка данных в редактор
editor.parse(data);

// присоединение обработчика к событию
editor.diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

**Журнал изменений**: Обновлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выделение элементов](guides/manipulating_items.md#selecting-items)
