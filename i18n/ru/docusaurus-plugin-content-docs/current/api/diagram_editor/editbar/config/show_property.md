---
sidebar_label: show
title: Свойство show компонента Editbar
description: Вы можете ознакомиться со свойством show компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# show

### Описание {#description}

@short: Необязательно. Определяет, отображать ли Editbar при инициализации

### Использование {#usage}

~~~jsx
show?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
show: true
~~~

### Пример {#example}

~~~jsx {8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // отображает Editbar по умолчанию
        // или настройте Editbar с помощью объекта
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

**Журнал изменений**: Добавлено в v6.0
