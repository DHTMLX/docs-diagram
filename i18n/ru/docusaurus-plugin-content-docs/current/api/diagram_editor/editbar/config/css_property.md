---
sidebar_label: css
title: Свойство css Editbar
description: Узнайте больше о свойстве css компонента Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите гайды для разработчиков и справочник API, попробуйте примеры кода и демонстрации в реальном времени, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# css

### Описание {#description}

@short: Необязательный параметр. Применяет пользовательский класс CSS к Editbar

### Использование {#usage}

~~~jsx
css?: string;
~~~

### Пример {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // отображает Editbar по умолчанию
        // или настройте Editbar через объект
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
