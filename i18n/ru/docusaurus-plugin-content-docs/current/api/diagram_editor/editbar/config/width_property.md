---
sidebar_label: width
title: Свойство width компонента Editbar
description: Вы можете ознакомиться со свойством width компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# width

### Описание {#description}

@short: Необязательно. Определяет ширину Editbar

### Использование {#usage}

~~~jsx
width?: number;
~~~

### Пример {#example}

~~~jsx {9}
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
