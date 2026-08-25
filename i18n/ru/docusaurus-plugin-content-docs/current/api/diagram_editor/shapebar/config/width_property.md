---
sidebar_label: width
title: Свойство width Shapebar
description: Вы можете узнать о свойстве width объекта Shapebar в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# width

### Описание {#description}

@short: Необязательно. Задаёт ширину shapebar редактора

### Использование {#usage}

~~~jsx
width?: number;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
width: 300
~~~

### Пример {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // отображает Shapebar по умолчанию
        // или настройка Shapebar через объект
        shapebar: {
            width: 400 // по умолчанию 300
        }
    }
});
~~~

**Полезная статья**: [Shapebar](guides/diagram_editor/shapebar.md#setting-the-width-of-shapebar)

**Журнал изменений**: Добавлено в v6.0
