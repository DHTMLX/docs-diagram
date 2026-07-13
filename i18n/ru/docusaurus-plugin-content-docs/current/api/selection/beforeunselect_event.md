---
sidebar_label: beforeUnSelect
title: Событие beforeUnSelect объекта Selection
description: Узнайте о событии beforeUnSelect в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeUnSelect

### Описание {#description}

@short: Срабатывает при снятии выделения с элемента, но до того, как выделение будет фактически снято

### Использование {#usage}

~~~jsx
"beforeUnSelect": ({
    id: string | number,
    batch: (string | number)[]
}) => void | boolean;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом, содержащим следующие параметры:

- `id` - id элемента, с которого нужно снять выделение
- `batch` - список элементов, с которых нужно снять выделение

### Возвращаемое значение {#returns}

Верните `false`, чтобы предотвратить снятие выделения с элемента; в противном случае - `true`

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
diagram.events.on("beforeUnSelect", ({ id }) => {
    console.log(id + " will be unselected");
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
editor.diagram.events.on("beforeUnSelect", ({ id }) => {
    console.log(id + " will be unselected");
    return true;
});
~~~

**Журнал изменений**: Обновлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выделение элементов](guides/manipulating_items.md#selecting-items)
