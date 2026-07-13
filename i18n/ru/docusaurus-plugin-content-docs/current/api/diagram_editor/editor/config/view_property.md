---
sidebar_label: view
title: Свойство view редактора Editor
description: Вы можете узнать о свойстве view редактора Editor в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# view

### Описание {#description}

@short: Объект, который настраивает представления Toolbar, Shapebar и Editbar в Diagram Editor

### Использование {#usage}

~~~jsx
view: {
    toolbar?: boolean | object,
    shapebar?: boolean | object,
    editbar?: boolean | object
};
~~~

### Параметры {#parameters}

- `toolbar` - (необязательно) позволяет показать/скрыть `Toolbar` (если *boolean*) или настроить его внешний вид (если *object*). Подробнее о настройке панели инструментов см. раздел [Toolbar API](api/diagram_editor/toolbar/api_overview.md)
- `shapebar` - (необязательно) позволяет показать/скрыть `Shapebar` (если *boolean*) или настроить его внешний вид (если *object*). Подробнее о настройке Shapebar см. раздел [Shapebar API](api/diagram_editor/shapebar/api_overview.md)
- `editbar` - (необязательно) позволяет показать/скрыть `Editbar` (если *boolean*) или настроить его внешний вид (если *object*). Подробнее о настройке Editbar см. раздел [Editbar API](api/diagram_editor/editbar/api_overview.md)

### Конфигурация по умолчанию {#default-config}

~~~jsx
view: {
    toolbar: true,
    shapebar: true,
    editbar: true
}
~~~

### Пример {#example}

~~~jsx {3-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "toolbar_custom",
            data: ["file", "separator", "scale"]
        },
        shapebar: {
            width: 400
        },
        editbar: false
    }
    // другие настройки
});
~~~

**Журнал изменений**: Добавлено в v6.0
