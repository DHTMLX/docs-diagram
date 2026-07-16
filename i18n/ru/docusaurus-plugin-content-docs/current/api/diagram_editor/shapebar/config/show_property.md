---
sidebar_label: show
title: Свойство show Shapebar
description: Вы можете узнать о свойстве show объекта Shapebar в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# show

### Описание {#description}

@short: Необязательно. Определяет, отображается ли shapebar с пользовательскими настройками при инициализации Diagram Editor

### Использование {#usage}

~~~jsx
show?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
show: true
~~~

### Пример {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // отображает Shapebar по умолчанию
        // или настройка Shapebar через объект
        shapebar: {
            show: false // по умолчанию true
        }
    }
});
~~~

**Полезная статья**: [Shapebar](guides/diagram_editor/shapebar.md#showinghiding-the-shapebar)

**Журнал изменений**: Добавлено в v6.0
